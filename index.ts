import { web3 } from "@coral-xyz/anchor";
import { AnchorUtils, asV0Tx, PullFeed } from "@switchboard-xyz/on-demand";

const connection = new web3.Connection(
  process.env.MAINNET_RPC_URL || web3.clusterApiUrl("mainnet-beta")
);

const feeds = [
  new web3.PublicKey("G4FdLzuezfaJxBd8eChuw1NU4Sq3n1rasGTwSh7dXegN"),
  new web3.PublicKey("CLjvwowzQ2L9PrmXA6zqbamxLVeDY9vE87aBxMZLJLoY"),
  new web3.PublicKey("DPvVSQYhZXQ2ygfT2Qjdg6iyeQVAyiz8okj88YRjy6NN"),
  new web3.PublicKey("Fqv8vT5fdjvBbHd5k4B4ZvnXLH6bbdKP8cMv93ybCP8W"),
];

(async () => {
  const sbProgram = await AnchorUtils.loadProgramFromConnection(connection);
  console.log();
  console.log("Loaded Switchboard Program:", sbProgram.programId.toBase58());

  console.log();
  console.log("Fetching update for feeds: ", JSON.stringify(feeds, null, 2));

  const resp = await PullFeed.fetchUpdateManyLightIx(sbProgram, {
    feeds: feeds,
    chain: "solana",
    network: "mainnet-beta",
    numSignatures: 2,
  }).catch((e) => {
    console.log("Error in `fetchUpdateManyLightIx`:", e);
    return undefined;
  });
  console.log();
  console.log("Retrieved response from oracles:");
  console.log(resp?.[2] ?? "null");

  if (resp) {
    const tx = await asV0Tx({
      connection: connection,
      ixs: resp[0],
      lookupTables: resp[1],
      computeUnitLimitMultiple: 1.25,
      computeUnitPrice: 100_000,
      // TODO: update this field to your signer wallet's public key.
      payer: new web3.PublicKey("nXsE22JSmWYk7f4KtfjXVqCvGuaVXntdSbCKzdumzFv"),
    });

    const numInstructions = tx.message.compiledInstructions.length;
    console.log();
    console.log(`Compiled transaction w/ ${numInstructions} instructions...`);

    const sim = await connection.simulateTransaction(tx);
    console.log();
    console.log(`Simulation Logs:\n${sim.value.logs?.join("\n") ?? "null"}`);

    // TODO: sign / submit transaction.
  } else {
    console.log();
    console.log("PullFeed.fetchUpdateManyIx returned no instructions.");
  }
})();
