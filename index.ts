import { web3 } from "@coral-xyz/anchor";
import { AnchorUtils, asV0Tx, PullFeed } from "@switchboard-xyz/on-demand";

const feeds = [
  new web3.PublicKey("6USvryJSNcdZUH1REsaKZwDWTKL5FwcPbE8q3EWZgjZX"), // pump SOL/USDC LP token
];

(async () => {
  const sbProgram = await AnchorUtils.loadProgramFromConnection(
    new web3.Connection(
      process.env.MAINNET_RPC_URL || web3.clusterApiUrl("mainnet-beta")
    )
  );
  console.log();
  console.log("Loaded Switchboard Program:", sbProgram.programId.toBase58());

  const [instructions, luts, rawResponse] = await PullFeed.fetchUpdateManyIx(
    sbProgram,
    {
      feeds: feeds,
      chain: "solana",
      network: "mainnet-beta",
      numSignatures: 2,
    },
    true
  );
  console.log();
  console.log("Retrieved response from oracles:");
  console.log(rawResponse);

  if (instructions.length > 0) {
    const tx = await asV0Tx({
      connection: sbProgram.provider.connection,
      ixs: instructions,
      lookupTables: luts,
      computeUnitLimitMultiple: 1.25,
      computeUnitPrice: 100_000,
      // TODO: update this field to your signer wallet's public key.
      payer: new web3.PublicKey("nXsE22JSmWYk7f4KtfjXVqCvGuaVXntdSbCKzdumzFv"),
    });

    const numInstructions = tx.message.compiledInstructions.length;
    console.log();
    console.log(`Compiled transaction w/ ${numInstructions} instructions...`);

    // TODO: sign / submit transaction.
  } else {
    console.log();
    console.log("PullFeed.fetchUpdateManyIx returned no instructions.");
  }
})();
