const { ethers, ContractFactory } = require("ethers")
require("dotenv").config()
const fs = require("fs")

const abi = JSON.parse(fs.readFileSync("abi.json").toString())
const bytecode = JSON.parse(fs.readFileSync("bytecode.json").toString())

const provider = new ethers.EtherscanProvider(
  "matic-mumbai",
  process.env.ETHERSCAN_API
)

const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

const main = async () => {
  const gasp0 = await (await provider.getFeeData()).gasPrice

  const options = {
    gasLimit: 100000,
    gasPrice: gasp0,
  }

  const factory = new ethers.ContractFactory(abi, bytecode.object, signer)

  try {
    const contract = await (await factory.deploy(options)).waitForDeployment()
    console.log(`Deployment successful! Contract Address: ${contract.address}`)
  } catch (error) {
    console.error("Error deploying contract:", error)
  }
}

main()
