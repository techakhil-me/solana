const {
  Connection,
  Keypair,
  clusterApiUrl,
  LAMPORTS_PER_SOL,
} = require("@solana/web3.js");

const foo = async () => {
  let public_key = Keypair.generate().publicKey;
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

  let tokenAmount = await connection.getBalance(public_key);
  console.log(tokenAmount);

  const airdropSignature = await connection.requestAirdrop(
    public_key,
    2 * LAMPORTS_PER_SOL
  );
  tokenAmount = await connection.getBalance(public_key);
  console.log(tokenAmount);
};
