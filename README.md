# Example of ZeppelinOS upgradeable application

This repo contains an example contract along useful scripts to work with smart contracts

## Requirements

* Node/npm 
* npx

## Install

Enter the cloned folder

```sh
npm install
```

## New

```sh
 npx zos init my-app
```

### Use against Ganache 

Run Ganache on port 9545

```sh
npm run ganache
```
Open another tab

```sh
npx zos session --network local
```

### Use against public testnet with Infura.io

Pass the name as created in truffle.js

eg. Ropsten

```sh
npx zos session --network ropsten
```

## Add to zos

Having a smart contract in `/contracts` folder, add it to `zos`

```sh
npx add MyContract
```

## Intialize proxy contract

```sh
npm run create
```

## Deploy 

```sh
npm run deploy
```

## Update 

Upgrade you smart contract with

```sh
npm run update
```




