import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = (props) =>{
    return(
        <div className="container-fluid bg-dark mx-2 p-3">

            <div className="container text-white d-flex align-items-center justify-content-center fs-3">
            <i className="fa-regular fa-clock mx-4"></i>
            <div>
            <b className="item six mx-2 bg-secondary p-2 rounded shadow">{props.sixNum}</b>
            <b className="item five mx-2 bg-secondary p-2 rounded shadow">{props.fiveNum}</b>
            <b className="item four mx-2 bg-secondary p-2 rounded shadow">{props.fourNum}</b>
            <b className="item three mx-2 bg-secondary p-2 rounded shadow">{props.threeNum}</b>
            <b className="item two mx-2 bg-secondary p-2 rounded shadow">{props.twoNum}</b>
            <b className="item one mx-2 bg-secondary p-2 rounded shadow">{props.oneNum}</b>

        
        </div>
        </div>
        </div>
    );
};

SecondsCounter.propTypes={
    sixNum: PropTypes.number,
    fiveNum: PropTypes.number,
    fourNum: PropTypes.number,
    threeNum: PropTypes.number,
    twoNum: PropTypes.number,
    oneNum: PropTypes.number,
};

export default SecondsCounter;