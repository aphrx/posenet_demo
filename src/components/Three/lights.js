import React from 'react'

const Lights = () => {
    return (
        <>
            <ambientLight intensity={0.4} />
            <directionalLight 
                castShadow 
                position={-8, 16, -8}
                intensity={0}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10} />
            <pointLight position={[0,50,0]} intensity={2} />
        </>
    )
}

export default Lights