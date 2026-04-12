import { useRef, useState, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';
import { useDispatch } from 'react-redux';
import { globeControl } from '../features/globeControl';

const Sprite = ({ name, url, position, color, spinRef, ...props }) => {
  const texture = useLoader(TextureLoader, url);
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();
  const pulseRef = useRef();
  const pulseProgress = useRef(0);
  const isPulsing = useRef(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  useEffect(() => {
    globeControl.pulseMap[name] = () => {
      isPulsing.current = true;
      pulseProgress.current = 0;
    };
    return () => { delete globeControl.pulseMap[name]; };
  }, [name]);

  useFrame((state) => {
    if (!pulseRef.current) return;
    pulseRef.current.lookAt(state.camera.position);
    if (isPulsing.current) {
      pulseProgress.current = Math.min(pulseProgress.current + 0.025, 1);
      const s = 1 + pulseProgress.current * 2;
      pulseRef.current.scale.set(s, s, s);
      pulseRef.current.material.opacity = 0.65 * (1 - pulseProgress.current);
      if (pulseProgress.current >= 1) isPulsing.current = false;
    } else {
      pulseRef.current.material.opacity = 0;
    }
  });

  const handleClick = () => {
    // Spin globe to bring this sprite to front
    if (spinRef?.current) {
      const currentY = spinRef.current.rotation.y;
      const [px, , pz] = position;
      const cosR = Math.cos(currentY);
      const sinR = Math.sin(currentY);
      const curX = px * cosR + pz * sinR;
      const curZ = -px * sinR + pz * cosR;
      const curAngle = Math.atan2(curX, curZ);
      let delta = -curAngle;
      if (delta > Math.PI) delta -= 2 * Math.PI;
      if (delta < -Math.PI) delta += 2 * Math.PI;
      globeControl.spinTarget = currentY + delta;
    }
    // Notify Skills to show tooltip
    globeControl.onSelect?.(name);
    // Trigger pulse
    isPulsing.current = true;
    pulseProgress.current = 0;
  };

  const handlePointerOver = () => {
    setHovered(true);
    dispatch(props.action(true));
    dispatch(props.setOpacity(2));
    dispatch(props.setScale([23, 23, 23]));
  };

  const handlePointerOut = () => {
    setHovered(false);
    dispatch(props.action(false));
    dispatch(props.setOpacity(0.6));
    dispatch(props.setScale([20, 20, 20]));
  };

  return (
    <group>
      <sprite
        scale={props.scale}
        position={position}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        <spriteMaterial attach="material" map={texture} fog={false} opacity={props.opacity} />
      </sprite>
      <mesh ref={pulseRef} position={position}>
        <ringGeometry args={[14, 16.5, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0} depthWrite={false} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default Sprite;
