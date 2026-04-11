import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import RotatingGlobeMesh from './RotatingGlobeMesh';
import Sprite from './Sprite';
import reactImg from '../assets/react-icon.png';
import cssImg from '../assets/css-icon.png';
import framerImg from '../assets/framer-icon.png';
import typescriptImg from '../assets/typescript-icon.png';
import javascriptImg from '../assets/javascript-icon.png';
import nodeImg from '../assets/node-icon.png';
import tailwindImg from '../assets/tailwind-icon.png';
import reduxImg from '../assets/redux-icon.png';
import * as THREE from 'three';
import { useSelector } from 'react-redux';
import { actions } from '../features/actions';
import { globeControl } from '../features/globeControl';

function CameraController({ z }) {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0, 35, z);
    camera.lookAt(0, -22, 0);
    camera.updateProjectionMatrix();
  }, [camera, z]);
  return null;
}

function GlobeCenterProjector() {
  const { camera } = useThree();
  const v = new THREE.Vector3(0, 0, 0);
  useFrame(() => {
    v.set(0, 0, 0);
    v.project(camera);
    globeControl.centerY = (1 - (v.y + 1) / 2) * 100;
  });
  return null;
}

function SpinController({ spinRef }) {
  useFrame(() => {
    if (!spinRef.current) return;
    if (globeControl.spinTarget !== null) {
      const diff = globeControl.spinTarget - spinRef.current.rotation.y;
      if (Math.abs(diff) < 0.005) {
        spinRef.current.rotation.y = globeControl.spinTarget;
        globeControl.spinTarget = null;
      } else {
        spinRef.current.rotation.y += diff * 0.06;
      }
    } else {
      spinRef.current.rotation.y += 0.00125;
    }
  });
  return null;
}

function RotatingGlobe() {
  const spinRef = useRef();
  globeControl.spinRef = spinRef;

  const isMobile  = useMediaQuery({ query: '(max-width: 640px)' });
  const isTablet  = useMediaQuery({ query: '(max-width: 1024px)' });
  const cameraZ   = isMobile ? 360 : isTablet ? 300 : 240;

  const color2 = new THREE.Color('#22D3F8');
  const TILT = THREE.MathUtils.degToRad(18);

  const reactHighlight    = useSelector((state) => state.reactHighlightData);
  const reactOpacity      = useSelector((state) => state.reactOpacityData);
  const reactScale        = useSelector((state) => state.reactScaleData);
  const javascriptHighlight = useSelector((state) => state.javascriptHighlightData);
  const javascriptOpacity   = useSelector((state) => state.javascriptOpacityData);
  const javascriptScale     = useSelector((state) => state.javascriptScaleData);
  const cssHighlight      = useSelector((state) => state.cssHighlightData);
  const cssOpacity        = useSelector((state) => state.cssOpacityData);
  const cssScale          = useSelector((state) => state.cssScaleData);
  const typescriptHighlight = useSelector((state) => state.typescriptHighlightData);
  const typescriptOpacity   = useSelector((state) => state.typescriptOpacityData);
  const typescriptScale     = useSelector((state) => state.typescriptScaleData);
  const framerHighlight   = useSelector((state) => state.framerHighlightData);
  const framerOpacity     = useSelector((state) => state.framerOpacityData);
  const framerScale       = useSelector((state) => state.framerScaleData);
  const nodeHighlight     = useSelector((state) => state.nodeHighlightData);
  const nodeOpacity       = useSelector((state) => state.nodeOpacityData);
  const nodeScale         = useSelector((state) => state.nodeScaleData);
  const tailwindHighlight = useSelector((state) => state.tailwindHighlightData);
  const tailwindOpacity   = useSelector((state) => state.tailwindOpacityData);
  const tailwindScale     = useSelector((state) => state.tailwindScaleData);
  const reduxHighlight    = useSelector((state) => state.reduxHighlightData);
  const reduxOpacity      = useSelector((state) => state.reduxOpacityData);
  const reduxScale        = useSelector((state) => state.reduxScaleData);

  return (
    <Canvas
      className='ball'
      id='#ball-place'
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 35, 240], fov: 57 }}
    >
      <ambientLight />
      <directionalLight color={color2} position={[0, -1, 0]} intensity={1.25} />
      <directionalLight color={color2} position={[0,  1, 0]} intensity={1.25} />
      <directionalLight color={color2} position={[0,  0, 1]} intensity={1.25} />
      <directionalLight color={color2} position={[0,  0,-1]} intensity={1.25} />
      <directionalLight color={color2} position={[1,  0, 0]} intensity={1.25} />
      <directionalLight color={color2} position={[-1, 0, 0]} intensity={1.25} />

      <CameraController z={cameraZ} />
      <SpinController spinRef={spinRef} />
      <GlobeCenterProjector />

      {/* Outer group tilts the axis like Earth; inner group handles spin */}
      <group rotation={[TILT, 0, 0]}>
        <group ref={spinRef}>
          <RotatingGlobeMesh />
          <Sprite name='React.js'   url={reactImg}      position={[0, 0, 72.5]}  color='#00ccff' spinRef={spinRef} highlight={reactHighlight}      action={actions.reactHighlight}      opacity={reactOpacity}      scale={reactScale}      setScale={actions.reactScale}      setOpacity={actions.reactOpacity} />
          <Sprite name='TypeScript' url={typescriptImg} position={[-51, 0, 51]}  color='#3178c6' spinRef={spinRef} highlight={typescriptHighlight} action={actions.typescriptHighlight} opacity={typescriptOpacity} scale={typescriptScale} setScale={actions.typescriptScale} setOpacity={actions.typescriptOpacity} />
          <Sprite name='CSS3'       url={cssImg}        position={[-72.5, 0, 0]} color='#2762e9' spinRef={spinRef} highlight={cssHighlight}        action={actions.cssHighlight}        opacity={cssOpacity}        scale={cssScale}        setScale={actions.cssScale}        setOpacity={actions.cssOpacity} />
          <Sprite name='Javascript' url={javascriptImg} position={[-51, 0,-51]}  color='#efd81f' spinRef={spinRef} highlight={javascriptHighlight} action={actions.javascriptHighlight} opacity={javascriptOpacity} scale={javascriptScale} setScale={actions.javascriptScale} setOpacity={actions.javascriptOpacity} />
          <Sprite name='Node.js'   url={nodeImg}        position={[0, 0,-72.5]}  color='#a7cc64' spinRef={spinRef} highlight={nodeHighlight}       action={actions.nodeHighlight}       opacity={nodeOpacity}       scale={nodeScale}       setScale={actions.nodeScale}       setOpacity={actions.nodeOpacity} />
          <Sprite name='Framer'    url={framerImg}      position={[51, 0,-51]}   color='#ffffff' spinRef={spinRef} highlight={framerHighlight}     action={actions.framerHighlight}     opacity={framerOpacity}     scale={framerScale}     setScale={actions.framerScale}     setOpacity={actions.framerOpacity} />
          <Sprite name='Tailwind'  url={tailwindImg}    position={[72.5, 0, 0]}  color='#44a8b3' spinRef={spinRef} highlight={tailwindHighlight}   action={actions.tailwindHighlight}   opacity={tailwindOpacity}   scale={tailwindScale}   setScale={actions.tailwindScale}   setOpacity={actions.tailwindOpacity} />
          <Sprite name='Redux'      url={reduxImg}      position={[51, 0, 51]}   color='#764abc' spinRef={spinRef} highlight={reduxHighlight}      action={actions.reduxHighlight}      opacity={reduxOpacity}      scale={reduxScale}      setScale={actions.reduxScale}      setOpacity={actions.reduxOpacity} />
        </group>
      </group>

    </Canvas>
  );
}

export default RotatingGlobe;
