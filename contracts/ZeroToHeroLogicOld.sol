// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

import "./ZeroToHeroProxy.sol";

contract ZeroToHeroLogicOld {
    bool public initialized;
    uint256 public value1;

    modifier initializer() {
        require(!initialized, "Only initialize once");
        _;
        initialized = true;
    }

    function initialize(uint256 _initValue1) public initializer {
        value1 = _initValue1;
    }

    function setValue1(uint256 _newValue1) public {
        value1 = _newValue1;
    }
}
