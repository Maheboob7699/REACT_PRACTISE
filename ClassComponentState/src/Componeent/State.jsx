
import React, {Component} from "react";
  class StateComponent extends Component{
    constructor() {
        super();
        this.state = {
          count: 0,
          name: "Mehboob"
        };


      }

      increment = () => {
        this.setState({ count: this.state.count + 1 });
      };
      decrement =()=>{
        if(this.state.count > 0){
            this.setState({count:this.state.count-1})
        }
       
      }
      
      changeName=()=>{
       this.setState({name: "musharaf"})
      }

   render(){
    return(
        <> 
        <h1>Component</h1>
        <h1>Count :  {this.state.count}</h1>
        <h1>Name: {this.state.name}</h1>
        <button onClick={this.increment}>Incerement</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.changeName}>Change</button>
        </>
    )
   }
  }

  export default StateComponent





