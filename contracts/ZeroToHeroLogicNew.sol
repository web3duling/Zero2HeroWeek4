// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

import "./ZeroToHeroProxy.sol";
import "./ZeroToHeroLogicOld.sol";

contract ZeroToHeroLogicNew is ZeroToHeroLogicOld {
    string public value2;

    function setValue2(string memory _newValue2) public {
        value2 = _newValue2;
    }
}
