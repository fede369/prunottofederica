import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animation/LottieLetter.json";


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

function UncontrolledLottieLetter() {
    return (
        <Lottie options={defaultOptions} height={200} width={350} />
    );
}

export default UncontrolledLottieLetter;
