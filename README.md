# Simple upgradable ERC20

## Deployment instruction

- Install packages with `yarn`
- Rename .env.example to .env and add your keys
- Change token name and symbol in the deployment script
- Run `npx hardhat run --network [networkName] scripts/deploy.ts`
  - networkName can be `goerli` or `goerliLinea`. You can add new network in hardhat.config.ts
