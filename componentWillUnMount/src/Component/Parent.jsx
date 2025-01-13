
import React,{Component} from "react"
import ChildA from "./ChildA"
import ChildB from "./ChildB"

class Parent extends Component{

        constructor(){
            super();
            this.state={
                data:true,
            }
        }

        change=()=>{
            this.setState({data: !this.state.data})
        }

    render(){
        return(
            <>
             <h1>Parent</h1>
             {this.state.data ? <ChildA/> : <ChildB/>}
             <button onClick={this.change}>Change</button> 
            </>
        )
    }
}

export default Parent