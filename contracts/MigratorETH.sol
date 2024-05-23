// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.24;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {Ownable2Step} from "@openzeppelin/contracts/access/Ownable2Step.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {SignatureChecker} from "@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol";
import {Pausable} from "@openzeppelin/contracts/utils/Pausable.sol";
import {EIP712} from "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import {Nonces} from "@openzeppelin/contracts/utils/Nonces.sol";
import "./interface/IWETH.sol";

import "./interface/IMigrator.sol";
import "./interface/IL1StandardBridge.sol";

contract MigratorETH is IMigrator {
    address public immutable L1Bridge;

    constructor(address _L1Bridge) {
        L1Bridge = _L1Bridge;
    }

    ///@notice Function called by the Ztaking Pool to facilitate migration of staked tokens from the Ztaking Pool to Form
    ///@param _user The address of the user whose staked funds are being migrated to Form
    ///@param _tokens The tokens being migrated to Form from the Ztaking Pool
    ///@param _destination The address which will be credited the tokens on Form
    ///@param _amounts The amounts of each token to be migrated to Form for the _user
    function migrate(
        address _user,
        address[] calldata _tokens,
        address _destination,
        uint256[] calldata _amounts
    ) external {
        require(_tokens.length == 1, "INVALID_LENGTH");

        for (uint256 i; i < _tokens.length; i++) {
            IWETH(_tokens[i]).transferFrom(msg.sender, address(this), _amounts[i]);
            IWETH(_tokens[i]).withdraw(_amounts[i]);
            bytes memory extraData = abi.encode(_user);
            L1StandardBridge(L1Bridge).depositETHTo{value: _amounts[i]}(_destination, 0, extraData);
        }
    }

    receive() external payable {}
}
