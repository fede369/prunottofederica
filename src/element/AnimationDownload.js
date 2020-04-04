import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animation/Download.json";


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

function UncontrolledLottieDownload() {
    return (
        <Lottie options={defaultOptions} height={235} width={300} style={{ marginTop: "35px", paddingTop: "20px" }} />
    );
}

export default UncontrolledLottieDownload;
