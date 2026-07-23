
import React, { Component } from "react";

class CurrencyConvertor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            amount: "",
            currency: "Euro"
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit() {

        let result = 0;

        if (this.state.currency === "Euro") {
            result = this.state.amount * 110.19;
        }
        else if (this.state.currency === "Dollar") {
            result = this.state.amount * 83;
        }
        else if (this.state.currency === "Pound") {
            result = this.state.amount * 107;
        }

        alert(
            "converting to " + this.state.currency + " amount is " +
            result.toFixed(2)
        );
    }


    render() {

        return (

            <div>

                <h1 style={{color:"green"}}>
                    Currency Convertor!!!
                </h1>


                <label>
                    Amount:
                </label>

                <input
                    type="number"
                    onChange={(e) =>
                        this.setState({
                            amount: e.target.value
                        })
                    }
                />

                <br/><br/>


                <label>
                    Currency:
                </label>

                <select
                    value={this.state.currency}
                    onChange={(e) =>
                        this.setState({ currency: e.target.value })
                    }
                >
                    <option>Euro</option>
                    <option>Dollar</option>
                    <option>Pound</option>
                </select>

                <br/><br/>

                <button onClick={this.handleSubmit}>
                    Submit
                </button>

            </div>

        );
    }
}

export default CurrencyConvertor;