import React from "react"; //Requirement #1

class ItemA extends React.Component{
    render() {
      return (
        <h1>The world is yours...{this.props.name}</h1>
      )
    }
  }

  export default ItemA; //Requirement #2