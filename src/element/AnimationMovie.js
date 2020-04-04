import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animation/Movie.json";


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

function UncontrolledLottieMovie() {
    return (
        <Lottie options={defaultOptions} height={200} width={260} />
    );
}

export default UncontrolledLottieMovie;
