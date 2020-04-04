import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animation/Music.json";


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

function UncontrolledLottieMusic() {
    return (
        <Lottie options={defaultOptions} height={200} width={250} />
    );
}

export default UncontrolledLottieMusic;
