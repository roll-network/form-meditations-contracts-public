// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@eth-optimism/contracts/L2/messaging/L2StandardBridge.sol";

contract L2ERC20Receiver {
    // standard value: 0x4200000000000000000000000000000000000010
    L2StandardBridge public l2Bridge;

    constructor(L2StandardBridge _l2Bridge) {
        l2Bridge = _l2Bridge;
    }

    event DepositFinalized(
        address indexed from,
        address indexed to,
        uint256 amount,
        uint256 param1,
        address param2,
        uint256 value
    );

    function finalizeDeposit(address _from, address _to, uint256 _amount, bytes calldata _data) external payable {
        require(msg.sender == address(l2Bridge), "Only L2 Bridge");

        // Decodificar extraData
        (uint256 param1, address param2) = abi.decode(_data, (uint256, address));

        emit DepositFinalized(_from, _to, _amount, param1, param2, msg.value);
    }
}
