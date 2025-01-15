// import React, { Component } from "react";
// import ComponenWillUnMount from "./componentWillUnmount";

// class LifeCycleMethod extends Component {

//     constructor() {
//         super();
//         this.state={
//             product:[],
//             data:true,

//         }
//     }

//     componentDidMount() {
//             const fetchData = async () => {
//                 try {
//                     let data = await fetch('https://api.escuelajs.co/api/v1/products'); // API URL
//                     let response = await data.json();
//                     console.log(response);

//                     this.setState({product: response})
//                 } catch (error) {
//                     console.error("Error fetching data:", error);
//                 }  

//             }
//             fetchData();
//             console.log("Component did mount call");
            
//     }

//     componentDidUpdate(prevState){
//   if(prevState.product !== this.state.product){
//     console.log("component did update");
    
//   }
//     }

//     change=()=>{
//         this.setState({data:!this.state.data})
//     }

//      componentWillUnmount(){
//         console.log("Component wiil un mount");
        
//     }

//     render() {
//         return (
//             <>
//                 {this.state.data ? (
//                     <h1>Component did mount</h1> 
//                 ) : (
//                     <ComponenWillUnMount />) }
//                 <button onClick={this.change}>Change</button>
//             </>
//         )
//     }
// }

// export default LifeCycleMethod




import React, { Component } from "react";
import ComponenWillUnMount from "./componentWillUnmount";

class LifeCycleMethod extends Component {

    constructor() {
        super();
        this.state = {
            product: [],
            data: true,   
        };
    }
    componentDidMount() {
        const fetchData = async () => {
            try {
                let data = await fetch('https://api.escuelajs.co/api/v1/products'); // API URL
                let response = await data.json();
                console.log(response); 
                this.setState({ product: response });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
        console.log("Component did mount call");
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.product !== this.state.product) { //breaking condition
            console.log("Component did update");
        }
    }

    componentWillUnmount() {
        console.log("Component will unmount");
    }

  
    change = () => {
        this.setState({ data: !this.state.data });
    }

    render() {
        const {data} = this.state;
        const {key} = this.props;

        return (
            <>
                <h1>Life cycle Method</h1>
                {this.state.data ? (
                    <h1>Component did mount</h1>
                ) : (
                    <ComponenWillUnMount /> 
                )}
                <button onClick={this.change}>Change</button>
            </>
        );
    }
}

export default LifeCycleMethod;
