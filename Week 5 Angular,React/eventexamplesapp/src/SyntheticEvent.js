import React from "react";


function SyntheticEvent() {


    function onPress() {
        alert("I was clicked");
    }


    return (

        <div>

            <button onClick={onPress}>
                OnPress
            </button>

        </div>

    );
}


export default SyntheticEvent;