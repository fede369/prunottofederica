import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animation/AddItem.json";


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

function UncontrolledLottieAddItem() {
    return (
        <Lottie options={defaultOptions} height={390} width={400} />
    );
}

export default UncontrolledLottieAddItem;
