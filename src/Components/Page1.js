import React from 'react'
import Animation from "./animation.json";
import Lottie from "lottie-react";


export default function Page1() {

    return (
        <div className='page1'>
            <div className="left-column">
                <h1 className="heading">Predict Your Best Club</h1>
                <h4 style={{ textAlign: 'left', marginLeft: '70px' }}>We are here to help you!</h4>
            </div>
            <div className="right-column">
                <Lottie animationData={Animation} />
            </div>
        </div>
    )
}
