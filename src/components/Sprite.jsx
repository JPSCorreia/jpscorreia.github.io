import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from "three";

const Sprite = ({name, url, position, color, ...props}) => {

  // This reference gives us direct access to the THREE.Mesh object
  const sprites = useRef()
  useFrame((state, delta) => {
    (sprites.current.rotation.y += 0.0011)
  })

  const [opacity, setOpacity] = useState(0.5);
  const texture = useLoader(TextureLoader, url)
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);
  
  return (
    <group ref={sprites}>
      <sprite
        scale={[20, 20, 20]}
        position={position}
        onPointerEnter={(e) => setOpacity(1)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => {setHovered(false); setOpacity(0.6)}}
      >
        <spriteMaterial
          attach="material"
          gl={{
            alpha: true,
            antialias: true,
          }}
          map={texture}
          fog={false}
          opacity={opacity}
        />
      </sprite>
    </group>
  );
}

export default Sprite










  // const spriteNewReactMap = new THREE.TextureLoader().load(reactIcon)
  // const spriteNewHtmlMap = new THREE.TextureLoader().load(htmlIcon)

  // const spriteReactMap = loader.load('../../assets/react-icon2.png');

  // const spriteReactMaterial = new THREE.SpriteMaterial( { map: spriteReactMap, color: '#00ccff', fog: false } );
  // const spriteReact = new THREE.Sprite( spriteReactMaterial );
  // spriteReact.position.set(0, 0, 50)
  // spriteReact.scale.set( 15, 15, 15);