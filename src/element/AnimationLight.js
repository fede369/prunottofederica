import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animation/Light.json";


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

function UncontrolledLottieLight() {
    return (
        <Lottie options={defaultOptions} height={175} width={345} />
    );
}

export default UncontrolledLottieLight;
