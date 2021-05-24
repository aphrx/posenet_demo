import React, { Suspense, useState } from 'react';
import CameraView from './components/CameraView';
import { Canvas } from 'react-three-fiber';
import Model from './components/Three/model.js';
import Lights from './components/Three/lights.js';

function App() {
  let kp;

  const mapJoints = (keypoints) => {
    kp = keypoints
  }

   const getJoints = () => {
    return kp;
  }

  return (
    <>
    
    <div style={{ position: "relative", width: 600, height: 600 }}>
      
      <Canvas
        colorManagement
        shadowMap
        camera={{position: [0, 0, 2], fov: 60}}>
          <Lights />
          <Suspense fallback={null}>
            <mesh position={[0,-1,0]}>
              <Model getJoints={getJoints}/>
            </mesh>
          </Suspense>
        </Canvas>
    </div>
    <CameraView mapJoints={mapJoints}/>
    </>
  );
}

export default App;
