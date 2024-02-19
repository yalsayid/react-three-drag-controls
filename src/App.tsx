import { Canvas } from "@react-three/fiber";
import {
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  Center,
  SoftShadows,
} from "@react-three/drei";
import { DragControls } from "./DragControls";

export default function App() {
  return (
    <Canvas shadows camera={{ position: [-10, 10, 10], fov: 20 }}>
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={[2.5, 5, 5]}
        intensity={1.5}
        shadow-mapSize={[1024, 1024]}
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-5, 5, 5, -5, 1, 50]}
        />
      </directionalLight>

      <SoftShadows />

      <mesh scale={20} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry />
        <shadowMaterial transparent opacity={0.5} />
      </mesh>

      <DragControls>
        <mesh castShadow receiveShadow position={[-1, 0.5, 1]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial />
        </mesh>
      </DragControls>

      <DragControls>
        <mesh position={[0.75, 0.5, 1]} castShadow receiveShadow>
          <boxGeometry args={[0.5, 1, 0.5]} />
          <meshStandardMaterial />
        </mesh>
      </DragControls>

      <DragControls>
        <Center top position={[1.5, 0, 0]}>
          <mesh castShadow receiveShadow>
            <dodecahedronGeometry args={[0.5]} />
            <meshStandardMaterial color="white" />
          </mesh>
        </Center>
      </DragControls>

      <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
        <GizmoViewport labelColor="white" axisHeadScale={1} />
      </GizmoHelper>
      <OrbitControls makeDefault />
    </Canvas>
  );
}
