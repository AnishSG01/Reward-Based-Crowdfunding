// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract Funding is ERC1155, Ownable, ERC1155Supply {
    uint public constant NFT0 = 0;
    uint public constant NFT1 = 1;
    uint public constant NFT2 = 2;
    uint public  totalRaised = 0 ether;

    event donation(address indexed _from, uint256 time, uint _value );

    address contractBenificiary;
    constructor() ERC1155("ipfs://QmTB4G62s4rW2SAB7A5BP4W7Q95h6tnxJpTiYYkdEHd7oz/") {
        contractBenificiary = msg.sender;
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function withdraw() external onlyOwner {
        uint balance = address(this).balance;
        payable(contractBenificiary).transfer(balance);
    }

    function mint() public payable
    {
        require(msg.value>=0.01 ether, "Please enter an amount greater than 0.01 ether");
        if(msg.value>=0.01 ether){
            _mint(msg.sender, NFT0, 1, "");
        }
        if(msg.value>=0.5 ether){
           _mint(msg.sender, NFT1, 1, "");
        }
        if(msg.value>=1 ether){
            _mint(msg.sender, NFT2, 1, "");
        }

        totalRaised += msg.value;
        emit donation(msg.sender, block.timestamp, msg.value);

        // 0.01-0.5 eth= NFT1
        // 0.5-1 eth= NFT1 + NFT2
        // >1 eth= NFT1 + NFT2 + NFT3
        // _mint(account, id, amount, data);
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
        onlyOwner
    {
        _mintBatch(to, ids, amounts, data);
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        internal
        override(ERC1155, ERC1155Supply)
    {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }

    function uri(uint256 _id) public view override returns (string memory){
        require(exists(_id), "URI: nonexistent token");
        return string(abi.encodePacked(super.uri(_id), Strings.toString(_id), ".json"));
    }
}



