/**

$$\      $$\                                                   $$$$$$\    $$\      $$$$$$\
$$ | $\  $$ |                                                 $$  __$$\   $$ |    $$ ___$$\
$$ |$$$\ $$ | $$$$$$\   $$$$$$\   $$$$$$$\  $$$$$$\  $$$$$$\  $$ /  \__|$$$$$$\   \_/   $$ |
$$ $$ $$\$$ | \____$$\ $$  __$$\ $$  _____|$$  __$$\ \____$$\ $$$$\     \_$$  _|    $$$$$ /
$$$$  _$$$$ | $$$$$$$ |$$ |  \__|$$ /      $$ |  \__|$$$$$$$ |$$  _|      $$ |      \___$$\
$$$  / \$$$ |$$  __$$ |$$ |      $$ |      $$ |     $$  __$$ |$$ |        $$ |$$\ $$\   $$ |
$$  /   \$$ |\$$$$$$$ |$$ |      \$$$$$$$\ $$ |     \$$$$$$$ |$$ |        \$$$$  |\$$$$$$  |
\__/     \__| \_______|\__|       \_______|\__|      \_______|\__|         \____/  \______/

*/

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Warcraft3 is ERC1155, Ownable {
    uint256 public constant GOLD = 1;
    uint256 public constant LUMBER = 2;
    uint256 public constant FROSTMOURNE = 3;

    constructor() ERC1155("https://ipfs.io/ipfs/QmeB1YiCisVtdz1t24ADgMVweCsJdck5XX5sHfx15bVRqx/{id}.json") {
        _mint(msg.sender, GOLD, 10**18, "");
        _mint(msg.sender, LUMBER, 10**27, "");
        _mint(msg.sender, FROSTMOURNE, 1, "");
    }
}