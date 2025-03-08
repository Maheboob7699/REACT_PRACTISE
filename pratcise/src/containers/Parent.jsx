import { Component } from "react";
class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: [],
            count: 0,
            toogleName: false,
        }
    }

    componentDidMount() {
        const ApiData = async () => {
            try {
                let response = await fetch(" https://api.escuelajs.co/api/v1/products");
                let data = await response.json();
                console.log(data);

                this.setState({ product: data })

            }
            catch (err) {
                console.log("err is", err);

            }

        }
        ApiData()
    }

    componentDidUpdate(prevState) {
        if (prevState !== this.state.product) {
            console.log("product is", this.state.product);

        }
    }

    incrementCounter = () => {
        this.setState({ count: this.state.count + 1 })
    }

    toogleName = () => {
        this.setState({ toogleName: !this.state.toogleName })
    }





    render() {
        return (
            <>
                <h1>Api</h1>
                <h2>count :{this.state.count}</h2>
                <h2>{this.state.toogleName ? "mehboob" : "musharaf"}</h2>
                <button onClick={this.incrementCounter}>inc</button>
                <button onClick={this.toogleName}>toogle</button>

            </>
        )
    }
}
export default ParentComponent