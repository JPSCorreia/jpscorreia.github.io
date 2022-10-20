import { Canvas } from '@react-three/fiber'
import RotatingGlobeMesh from './RotatingGlobeMesh'
import { OrbitControls } from '@react-three/drei'
import React from 'react';
import Sprite from './Sprite';
import reactImg from '../assets/react-icon.png'
import htmlImg from '../assets/html-icon.png'
import cssImg from '../assets/css-icon.png'
import expressImg from '../assets/express-icon.png'
import javascriptImg from '../assets/javascript-icon.png'
import nodeImg from '../assets/node-icon.png'
import postgresqlImg from '../assets/postgresql-icon.png'
import reduxImg from '../assets/redux-icon.png'
import * as THREE from 'three'
import { useMediaQuery } from 'react-responsive'

function RotatingGlobe() {

  const color2 = new THREE.Color("#22D3F8");
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <Canvas 
      className='ball'
      id='#ball-place'
      gl={
        { 
          alpha:true, 
          antialias:true,
        }
      } 
      
      camera={{ position: [0, 50, 125], fov: 57 }}
    >
      <ambientLight />
      <directionalLight color={color2} position={[0, -1, 0]} intensity={1.25}/>
      <directionalLight color={color2} position={[0, 1, 0]} intensity={1.25} />
      <directionalLight color={color2} position={[0, 0, 1]} intensity={1.25}/>
      <directionalLight color={color2} position={[0, 0, -1]} intensity={1.25} />
      <directionalLight color={color2} position={[1, 0, 0]} intensity={1.25}/>
      <directionalLight color={color2} position={[-1, 0, 0]} intensity={1.25} />
      <RotatingGlobeMesh  /> 
      <Sprite name='React.js' url={reactImg} position={[0, 0, 72.5]} color='#00ccff' />
      <Sprite name='HTML5' url={htmlImg} position={[-51, 0, 51]} color='#dd4b25' />
      <Sprite name='CSS3' url={cssImg} position={[-72.5, 0, 0]} color='#2762e9' />
      <Sprite name='Javascript' url={javascriptImg} position={[-51, 0, -51]} color='#efd81f' />
      <Sprite name='Node.js' url={nodeImg} position={[0, 0, -72.5]} color='#43853d' />
      <Sprite name='Express.js' url={expressImg} position={[51, 0, -51]} color='#ffffff' />
      <Sprite name='PostgreSQL' url={postgresqlImg} position={[72.5, 0, 0]} color='#31648d' />
      <Sprite name='Redux' url={reduxImg} position={[51, 0, 51]} color='#764abc'/>
      {
        isTabletOrMobile? '' : <OrbitControls className='orbit-controls' enablePan={false} enableZoom={false} />
      }
    </Canvas>
  )
}

export default RotatingGlobe