import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animation/Photo.json";


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

function UncontrolledLottiePhoto() {
    return (
        <Lottie options={defaultOptions} height={200} width={390} />
    );
}

export default UncontrolledLottiePhoto;
