import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import { HardhatUserConfig } from 'hardhat/config';
import { config } from './config';


const hardhatConfig: HardhatUserConfig = {
    solidity: '0.8.17',
    networks: {
        main: {
            url: `https://api.avax.network/ext/bc/C/rpc`,
            accounts: [config.privateKey],
        },
        fuji: {
            url: `https://api.avax-test.network/ext/bc/C/rpc`,
            accounts: [config.privateKey],
        }
    },
    etherscan: {
        apiKey: {
            fuji: 'avascan',
        },
        customChains: [
            {
                network: 'fuji',
                chainId: 43113,
                urls: {
                    apiURL: 'https://api.avascan.info/v2/network/testnet/evm/43113/etherscan',
                    browserURL: 'https://testnet.avascan.info/blockchain/c',
                }
            }
        ]
    },
};

export default hardhatConfig;