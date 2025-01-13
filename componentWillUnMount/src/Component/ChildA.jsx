import React,{Component} from "react"


class ChildA extends Component{

    componentWillUnmount(){
        console.log("component will un mount");
        
    }
    render(){
        return(
            <>
             <h1>Child A</h1>
            </>
        )
    }
}

export default ChildA