import { ethers, upgrades, run } from "hardhat";

async function main() {
  const Token = await ethers.getContractFactory("Token");
  const tokenProxy = await upgrades.deployProxy(Token, ["Matic Token", "MATIC"], {});
  await tokenProxy.deployed();
  const implementationAddress = await upgrades.erc1967.getImplementationAddress(tokenProxy.address);
  console.log("Successful deployment");
  console.log("Proxy address: ", tokenProxy.address);
  console.log("Implementation address: ", implementationAddress);

  setTimeout(async () => {
    console.log("Starting verification...");
    await run("verify", {
      address: implementationAddress,
    });
    console.log("Verification done.");
  }, 30000);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
