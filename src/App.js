import React, { Suspense } from 'react';
import CameraView from './components/CameraView';
import { Canvas } from 'react-three-fiber';
import Model from './components/Three/model.js';
import Lights from './components/Three/lights.js';

function App() {
  return (
    <>
      <Canvas
        colorManagement
        shadowMap
        camera={{position: [1, 0, 2], fov: 50}}>
          <Lights />
          <Suspense fallback={null}>
            <mesh position={[0,-1,0]}>
            <Model />
            </mesh>
          </Suspense>
        </Canvas>
    </>
  );
}

export default App;
