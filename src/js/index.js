//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import SecondsCounter from "./component/SecondsCounter";


let i=0;

window.onload = () =>{
setInterval(() => {
    const six=Math.floor((i/100000) %10);
    const five = Math.floor ((i/10000) %10);
    const four = Math.floor ((i/1000)%10);
    const three = Math.floor ((i/100) % 10);
    const two = Math.floor ((i/10)%10);
    const one = Math.floor ((i/1)%10);

    i++;

    ReactDOM.render(
        <SecondsCounter
        sixNum={six}
        fiveNum={five}
        fourNum={four}
        threeNum={three}
        twoNum={two}
        oneNum={one}
        />, document.querySelector("#app"))
    
}, 1000)
}
