import React, { useRef } from 'react';
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";

const CameraView = () => {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const style={
        position: "absolute",
        marginLeft: "auto",
        marginRight: "auto",
        left: 0,
        right: 0,
        textAlign: 'center',
        zIndex: 9,
        width: 640,
        height: 480
    }

    const runPosenet = async () => {
        const net = await posenet.load();
        console.log("Posenet loaded");
        setInterval(()=>{
            detect(net)
        }, 100)
    }

    const drawHand = (predictions, canvas) => {
        console.log(predictions)
        if(predictions.score > 0){
            const keypoints = predictions.keypoints;
            keypoints.forEach((point)=>{
                const x = point.position.x
                const y = point.position.y
                console.log(x)
                canvas.beginPath();
                canvas.arc(x, y, 5, 0, 3 * Math.PI);

                canvas.fillStyle = "Indigo";
                canvas.fill();
                

            })
        }
    }

    const detect = async (net) => {
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null && 
            webcamRef.current.video.readyState === 4
        ){
            const video = webcamRef.current.video;
            const videoWidth = video.videoWidth;
            const videoHeight = video.videoHeight;

            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            const pose = await net.estimateSinglePose(video);
            //console.log(pose)

            drawHand(pose, canvasRef.current.getContext("2d"))
        }

    }

    runPosenet();

    return (
        <div>
            <Webcam ref={webcamRef} style={style}/>     
            <canvas ref={canvasRef} style={style}/>
        </div>
    )
}

export default CameraView



