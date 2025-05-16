import { Canvas } from '@react-three/fiber'
import RotatingGlobeMesh from './RotatingGlobeMesh'
import { OrbitControls } from '@react-three/drei'
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
import { useSelector } from 'react-redux';
import { actions } from '../features/actions'

function RotatingGlobe() {

  const color2 = new THREE.Color("#22D3F8");
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const reactHighlight = useSelector((state) => state.reactHighlightData)
  const reactOpacity = useSelector((state) => state.reactOpacityData)
  const reactScale = useSelector((state) => state.reactScaleData)
  const htmlHighlight = useSelector((state) => state.htmlHighlightData)
  const htmlOpacity = useSelector((state) => state.htmlOpacityData)
  const htmlScale = useSelector((state) => state.htmlScaleData)
  const cssHighlight = useSelector((state) => state.cssHighlightData)
  const cssOpacity = useSelector((state) => state.cssOpacityData)
  const cssScale = useSelector((state) => state.cssScaleData)
  const javascriptHighlight = useSelector((state) => state.javascriptHighlightData)
  const javascriptOpacity = useSelector((state) => state.javascriptOpacityData)
  const javascriptScale = useSelector((state) => state.javascriptScaleData)
  const expressHighlight = useSelector((state) => state.expressHighlightData)
  const expressOpacity = useSelector((state) => state.expressOpacityData)
  const expressScale = useSelector((state) => state.expressScaleData)
  const nodeHighlight = useSelector((state) => state.nodeHighlightData)
  const nodeOpacity = useSelector((state) => state.nodeOpacityData)
  const nodeScale = useSelector((state) => state.nodeScaleData)
  const postgresHighlight = useSelector((state) => state.postgresHighlightData)
  const postgresOpacity = useSelector((state) => state.postgresOpacityData)
  const postgresScale = useSelector((state) => state.postgresScaleData)
  const reduxHighlight = useSelector((state) => state.reduxHighlightData)
  const reduxOpacity = useSelector((state) => state.reduxOpacityData)
  const reduxScale = useSelector((state) => state.reduxScaleData)

  const reactAction = actions.reactHighlight
  const htmlAction = actions.htmlHighlight
  const cssAction = actions.cssHighlight
  const javascriptAction = actions.javascriptHighlight
  const expressAction = actions.expressHighlight
  const nodeAction = actions.nodeHighlight
  const postgresAction = actions.postgresHighlight
  const reduxAction = actions.reduxHighlight

  const reactSetOpacity = actions.reactOpacity
  const htmlSetOpacity = actions.htmlOpacity
  const cssSetOpacity = actions.cssOpacity
  const javascriptSetOpacity = actions.javascriptOpacity
  const expressSetOpacity = actions.expressOpacity
  const nodeSetOpacity = actions.nodeOpacity
  const postgresSetOpacity = actions.postgresOpacity
  const reduxSetOpacity = actions.reduxOpacity

  const reactSetScale = actions.reactScale
  const htmlSetScale = actions.htmlScale
  const cssSetScale = actions.cssScale
  const javascriptSetScale = actions.javascriptScale
  const expressSetScale = actions.expressScale
  const nodeSetScale = actions.nodeScale
  const postgresSetScale = actions.postgresScale
  const reduxSetScale = actions.reduxScale

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
      camera={{ position: [0, 35, 125], fov: 57 }}
    >
      <ambientLight />
      <directionalLight color={color2} position={[0, -1, 0]} intensity={1.25}/>
      <directionalLight color={color2} position={[0, 1, 0]} intensity={1.25} />
      <directionalLight color={color2} position={[0, 0, 1]} intensity={1.25}/>
      <directionalLight color={color2} position={[0, 0, -1]} intensity={1.25} />
      <directionalLight color={color2} position={[1, 0, 0]} intensity={1.25}/>
      <directionalLight color={color2} position={[-1, 0, 0]} intensity={1.25} />
      <RotatingGlobeMesh  /> 
      <Sprite name='React.js' url={reactImg} position={[0, 0, 72.5]} color='#00ccff' highlight={reactHighlight} action={reactAction} opacity={reactOpacity} scale={reactScale} setScale={reactSetScale} setOpacity={reactSetOpacity} />
      <Sprite name='HTML5' url={htmlImg} position={[-51, 0, 51]} color='#dd4b25' highlight={htmlHighlight} action={htmlAction} opacity={htmlOpacity} scale={htmlScale} setScale={htmlSetScale} setOpacity={htmlSetOpacity} />
      <Sprite name='CSS3' url={cssImg} position={[-72.5, 0, 0]} color='#2762e9' highlight={cssHighlight} action={cssAction} opacity={cssOpacity} scale={cssScale} setScale={cssSetScale} setOpacity={cssSetOpacity} />
      <Sprite name='Javascript' url={javascriptImg} position={[-51, 0, -51]} color='#efd81f' highlight={javascriptHighlight} action={javascriptAction} opacity={javascriptOpacity} scale={javascriptScale} setScale={javascriptSetScale} setOpacity={javascriptSetOpacity} />
      <Sprite name='Node.js' url={nodeImg} position={[0, 0, -72.5]} color='#43853d' highlight={nodeHighlight} action={nodeAction} opacity={nodeOpacity} scale={nodeScale} setScale={nodeSetScale} setOpacity={nodeSetOpacity} />
      <Sprite name='Express.js' url={expressImg} position={[51, 0, -51]} color='#ffffff' highlight={expressHighlight} action={expressAction} scale={expressScale} opacity={expressOpacity} setScale={expressSetScale} setOpacity={expressSetOpacity} />
      <Sprite name='PostgreSQL' url={postgresqlImg} position={[72.5, 0, 0]} color='#31648d' highlight={postgresHighlight} action={postgresAction} scale={postgresScale} opacity={postgresOpacity} setScale={postgresSetScale} setOpacity={postgresSetOpacity}/>
      <Sprite name='Redux' url={reduxImg} position={[51, 0, 51]} color='#764abc' highlight={reduxHighlight} action={reduxAction} scale={reduxScale} opacity={reduxOpacity} setScale={reduxSetScale} setOpacity={reduxSetOpacity}/>
      {
        isTabletOrMobile? '' : <OrbitControls className='orbit-controls' enablePan={false} enableZoom={false} />
      }
    </Canvas>
  )
}

export default RotatingGlobe