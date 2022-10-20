import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import React from 'react';
import * as THREE from 'three';
import { useMediaQuery } from 'react-responsive';

function RotatingGlobeMesh(props) {

  // This reference gives us direct access to the THREE.Mesh object
  const mesh = useRef()

  const color1 = new THREE.Color("#67E8F9");
  const color2 = new THREE.Color("#22D3F8");

  useFrame((state, delta) => {
    (mesh.current.rotation.y += 0.00125)
  })

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={1.35}
      
    >
      <sphereGeometry attach="geometry" args={[40, 30, 30]} />
      <meshStandardMaterial
        attach="material"
        clearcoat={1.0}
        cleacoatRoughness={0.1}
        metalness={0.9}
        roughness={0.65}
        color={color1}
        attenuationColor={color1}
        sheenColor={color2}
        normalScale={new THREE.Vector2(0.15, 0.15)}
        specularColor={color1}
        ior={0}
        reflectivity={1}
        transparent={true}
        opacity={1}
        wireframe={true}
      />
    </mesh>
  );
}

export default RotatingGlobeMesh