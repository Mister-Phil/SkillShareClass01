pragma solidity 0.6.6; //This version need 

import "@openzeppelin/contracts/token/ERC721/ERC721.sol"; // We collect data from this.

contract SimpleCollectible is ERC721 {
 int256 public tokenCounter; //Let's create a COUNTER for Every New token! 
 constructor () public ERC721 ("Doggie", "DOG"){ //Name = Doggie; symbol = dog
    tokenCounter = 0; //We start initially with 0 token.
    }
    //Now let's do the token/NFT itself : we create the " Factory / class".
    //So we will mint it and then return the token.
    function createCollectible(string memory tokenURI) public returns (uint256) {
        uint256 newItemId = tokenCounter;
        _safeMint(msg.sender, newItemId); //Let send a message to the owner...
        _setTokenURI(newItemId, tokenURI); //Set the token URI ()
        tokenCounter = tokenCounter + 1;
        return newItemId;
        }

}
