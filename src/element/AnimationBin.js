import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animation/Bin.json";


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

function UncontrolledLottieBin() {
    return (
        <Lottie options={defaultOptions} height={260} width={500} />
    );
}

export default UncontrolledLottieBin;
