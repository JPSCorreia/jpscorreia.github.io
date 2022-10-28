import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from "three";
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../features/actions'


const Sprite = ({name, url, position, color, ...props}) => {

  // This reference gives us direct access to the THREE.Mesh object
  const sprites = useRef()
  useFrame((state, delta) => {
    (sprites.current.rotation.y += 0.0011)
  })

  const [opacity, setOpacity] = useState(0.6);
  const texture = useLoader(TextureLoader, url)
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  // const [scale, setScale] = useState([20, 20, 20]);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);
  
  return (
    <group ref={sprites}>
      <sprite
        scale={props.scale}
        position={position}
        // onClick={() => {setOpacity(1); dispatch(actions.reactHighlight()); console.log('teste')}}
        // onPointerEnter={(e) => {setOpacity(1); dispatch(actions.teste)}}
        onPointerOver={() => {setHovered(true); dispatch(props.action(true)); dispatch(props.setOpacity(2)); dispatch(props.setScale([23,23,23])) }}
        onPointerOut={() => {setHovered(false); dispatch(props.action(false)); dispatch(props.setOpacity(0.6)); dispatch(props.setScale([20,20,20])) }}
      >
        <spriteMaterial
          attach="material"
          gl={{
            alpha: true,
            antialias: true,
          }}
          map={texture}
          fog={false}
          opacity={props.opacity}
        />
        Text
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