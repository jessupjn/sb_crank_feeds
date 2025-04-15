import { web3 } from "@coral-xyz/anchor";
import { AnchorUtils, asV0Tx, PullFeed } from "@switchboard-xyz/on-demand";
const feeds = [
  new web3.PublicKey("DHB2Ph8CK7PmR3xswqcmDkgQeucnwSZtfnMpnc7mQgkb"), // USDC / USD
  new web3.PublicKey("BwBLNEuTnqQVhzgx3557szSgz1PEHEvj2RRoPiFWR8YB"), // USD_BRL
  new web3.PublicKey("4Ascib8aKSXcagQprVocLgwtxha4ksByxatR6hsjN8ve"), // Binance ETHBTC
];

(async () => {
  const sbProgram = await AnchorUtils.loadProgramFromConnection(
    new web3.Connection(
      process.env.DEVNET_RPC_URL || web3.clusterApiUrl("devnet")
    )
  );
  console.log();
  console.log("Loaded Switchboard Program:", sbProgram.programId.toBase58());

  const [instructions, luts, rawResponse] = await PullFeed.fetchUpdateManyIx(
    sbProgram,
    {
      feeds: feeds,
      chain: "solana",
      network: "devnet",
      numSignatures: 2,
    }
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
      payer: new web3.PublicKey("nXsE22JSmWYk7f4KtfjXVqCvGuaVXntdSbCKzdumzFv"),
      // payer: web3.PublicKey; TODO: add this or the anchor provider's wallet will be used.
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
