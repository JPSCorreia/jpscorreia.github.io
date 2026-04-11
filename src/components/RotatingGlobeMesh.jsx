import * as THREE from 'three';

function RotatingGlobeMesh() {
  const color1 = new THREE.Color("#67E8F9");

  return (
    <mesh scale={1.35}>
      <sphereGeometry args={[40, 30, 30]} />
      <meshStandardMaterial
        wireframe
        clearcoat={1.0}
        metalness={0.9}
        roughness={0.65}
        color={color1}
        normalScale={new THREE.Vector2(0.15, 0.15)}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

export default RotatingGlobeMesh;
