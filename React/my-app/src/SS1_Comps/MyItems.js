import React from "react"; //Requirement #1

class ItemA extends React.Component{
    
  constructor(props) {
      super(props)

      this.state = {
        clicks: 0,
        totalRemaining: 100,
      }  
  }

  clickMe() {
      this.setState({
        clicks: this.state.clicks + 1,
        totalRemaining: this.state.totalRemaining - 1,
      })
    //console.log("I clicked", this.props.name)
  }
  
  render() { //YOU CANT PUT EMPTY LINE/SPACE
      return (
        <div>
        <h1 onClick={() => this.clickMe()}>
        The world is yours...{this.props.name}</h1>
        <span>{this.state.clicks} is the x of clicks. {this.state.totalRemaining}</span>
        </div>
      )
    }
  }

  export default ItemA; //Requirement #2