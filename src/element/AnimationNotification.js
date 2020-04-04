import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animation/Notification.json";


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

function UncontrolledLottieNotification() {
    return (
        <Lottie options={defaultOptions} height={200} width={200} />
    );
}

export default UncontrolledLottieNotification;
