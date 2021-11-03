//import logo from './logo.svg';
import './App.css';
//import ItemA from './SS1_Comps/MyItems';
import React from 'react';



class StarWars extends React.Component {
  constructor {
    super()
    this.this.state = {
      nameAndHomeworld: null,
      power:null,
    }
  }

  getNewCharacter() {
    console.log("GEt New Char")
    this.this.state({
      nameAndHomeworld: "Maul",
      power:"Fire",
    })
  }

render()  { 
    return(
    <div>
    <h1>THis is <StarWars /></h1>        
        <h1>{this.state.nameAndHomeworld}</h1>
        <p>{this.state.power}</p>
        <button type="button" 
        onPressed={() => this.getNewCharacter()} //"onClick" DONT WORK; use "onPressed".
        className="btn">Randomize Character</button>
    </div>
    )
  }
    

function App() {
  }
  
  export default App;
  

/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <ItemA name="Mister"/>
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      

*/