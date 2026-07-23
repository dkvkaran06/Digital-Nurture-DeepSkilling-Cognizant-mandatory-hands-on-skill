import React from "react";


function Welcome() {


    function sayWelcome(message) {
        alert(message);
    }


    return (
        <div>

            <button onClick={() => sayWelcome("Welcome")}>
                Say Welcome
            </button>

        </div>
    );
}


export default Welcome;