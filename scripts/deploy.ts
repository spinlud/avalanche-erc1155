import '@nomiclabs/hardhat-ethers';
import hre from 'hardhat';
import { ethers } from 'hardhat';

const tokensMap: { [key: number]: string } = {
    1: 'Gold',
    2: 'Lumber',
    3: 'Frostmourne',
};

(async () => {
    const [ deployer ] = await ethers.getSigners();
    const Warcraft3 = await ethers.getContractFactory("Warcraft3");
    console.log(`Deploying contract...`);
    const warcraft3 = await Warcraft3.deploy();
    console.log(`Contract deployed to address ${warcraft3.address}`);

    for (const [tokenId, tokenName] of Object.entries(tokensMap)) {
        const amt = await warcraft3.balanceOf(deployer.address, tokenId);
        console.log(`Deployer has ${amt} ${tokenName}!`);
    }

    // TODO
    // console.log(`Verifying contract...`);
    // await hre.run("verify:verify", {
    //     address: warcraft3.address,
    //     constructorArguments: [],
    // });

    console.log(`Done!`);
})();