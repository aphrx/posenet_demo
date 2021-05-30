/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber';
import { useGLTF } from '@react-three/drei'

const getAngle = (p1, p2, c1, c2, m) => {
  if(p1['score'] > 0.3 && p2['score'] > 0.3){
    return (Math.atan2(p2['position']['y'] - p1['position']['y'], p2['position']['x'] - p1['position']['x']) + c1) * m;
  }
  return c2 * m
}

export default function Model(props) {
  let kp;
  const group = useRef()
  const { nodes, materials } = useGLTF('../../../model.glb')

  console.log(nodes.Ch36.skeleton)

  kp = props.getJoints()
  console.log(kp)
  

  useFrame((state, delta) => {
    kp = props.getJoints()
  
    // Left arm & elbow
    nodes.Ch36.skeleton.bones[7].rotation.y = getAngle(kp[5], kp[7], 0, 0, -1)
    nodes.Ch36.skeleton.bones[9].rotation.x = getAngle(kp[7], kp[9], 0, 0, 1)

    //Right arm & elbow
    nodes.Ch36.skeleton.bones[31].rotation.y = getAngle(kp[8], kp[6], 0, 0, -1)
    nodes.Ch36.skeleton.bones[33].rotation.x = getAngle(kp[10], kp[8], 0, 0, -1)
    
    // Left leg & knee
    nodes.Ch36.skeleton.bones[55].rotation.z =  getAngle(kp[13], kp[11], (3.14/2), 3.14, -1)
    nodes.Ch36.skeleton.bones[56].rotation.z = getAngle(kp[15], kp[13], (3.14/2), 0, -1)

    // Right leg & knee
    nodes.Ch36.skeleton.bones[60].rotation.z =  getAngle(kp[14], kp[12], (3.14/2), 3.14, -1)
    nodes.Ch36.skeleton.bones[61].rotation.z = getAngle(kp[16], kp[14], (3.14/2), 0, -1)

    console.log(-getAngle(kp[13], kp[11], (3.14/2), 3.14))
    console.log(-getAngle(kp[13], kp[11], 0, 0)+ 3.14/2)
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
        <primitive object={nodes.mixamorig1Hips} />
        <skinnedMesh geometry={nodes.Ch36.geometry} material={materials.Ch36_Body} skeleton={nodes.Ch36.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('../../../model.glb')