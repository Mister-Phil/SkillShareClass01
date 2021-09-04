//This solidity version needs another file b/c it's NOT among the latest versions. 

pragma solidity >=0.5.0 <0.6.0;
//The creation of the contract
contract ZombieFactory {

    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;
    
    struct Zombie { //Your struct of zombies
        string name;
        uint dna;
    }

    Zombie[] public zombies; //Here we create an array with the Struct above.
    
    //1. This function is public; use " _createZombie(string memory _name, uint _dna) private { " to make it private. 
    function createZombie(string memory _name, uint _dna) public { // The creation of the function here.
        //The structs and arrays for the function go here.
        zombies.push(Zombie(_name,_dna)); //Here to create an array of zombies use the (), NOT THE '[]'!
    }
    //Adding a new function. **Watch out for the ortograph.
    function _generateRandomDna(string memory _str) private view returns (uint) {
        
    }

}






