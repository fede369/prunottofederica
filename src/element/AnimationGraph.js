import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animation/Graph.json";


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

function UncontrolledLottieGraph() {
    return (
        <Lottie options={defaultOptions} height={250} width={350} />
    );
}

export default UncontrolledLottieGraph;
