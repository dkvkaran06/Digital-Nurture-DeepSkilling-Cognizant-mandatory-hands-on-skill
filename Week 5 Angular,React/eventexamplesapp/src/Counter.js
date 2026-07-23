import React, { Component } from "react";

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }


    increment() {
        this.setState({
            count: this.state.count + 1
        });

        this.sayHello();
    }


    decrement() {
        this.setState({
            count: this.state.count - 1
        });
    }


    sayHello() {
        alert("Hello! Member1");
    }


    render() {
        return (
            <div>

                <h3>{this.state.count}</h3>

                <button onClick={this.increment}>
                    Increment
                </button>

                <br/>

                <button onClick={this.decrement}>
                    Decrement
                </button>

                <br/>

                <button onClick={() => alert("Welcome")}>
                    Say Welcome
                </button>

                <br/>

                <button onClick={() => alert("I was clicked")}>
                    Click on me
                </button>

            </div>
        );
    }
}

export default Counter;