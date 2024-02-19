import { Canvas } from "@react-three/fiber";
import {
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  Center,
  Grid,
  Environment,
} from "@react-three/drei";
import { useControls } from "leva";
import { DragControls } from "./DragControls";

export default function App() {
  const { axisLock } = useControls({
    axisLock: {
      label: "Axis Lock",
      options: {
        None: undefined,
        X: "x",
        Y: "y",
        Z: "z",
      },
      value: undefined,
    },
  }) as {
    axisLock: "x" | "y" | "z" | undefined;
  };

  return (
    <Canvas shadows camera={{ position: [10, 12, 12], fov: 25 }}>
      <DragControls axisLock={axisLock}>
        <Center top>
          <mesh castShadow receiveShadow rotation={[-0.63, 0, 0]} scale={2}>
            <dodecahedronGeometry args={[0.5]} />
            <meshStandardMaterial color="#a78bfa" />
          </mesh>
        </Center>
      </DragControls>
      <DragControls axisLock={axisLock}>
        <Center top position={[-1, 0, 2]}>
          <mesh castShadow>
            <sphereGeometry args={[0.5, 64, 64]} />
            <meshStandardMaterial color="#a78bfa" />
          </mesh>
        </Center>
      </DragControls>
      <DragControls axisLock={axisLock}>
        <Center top position={[2, 0, 1]}>
          <mesh castShadow rotation={[0, Math.PI / 4, 0]}>
            <boxGeometry args={[0.7, 0.7, 0.7]} />
            <meshStandardMaterial color="#a78bfa" />
          </mesh>
        </Center>
      </DragControls>

      <Grid
        position={[0, -0.01, 0]}
        receiveShadow
        args={[10.5, 10.5]}
        infiniteGrid
        fadeDistance={50}
        fadeStrength={1}
        sectionColor={"#a78bfa"}
        sectionSize={4}
        sectionThickness={1.5}
        cellColor={"#f5f3ff"}
        cellSize={1}
        cellThickness={1}
      />

      <OrbitControls makeDefault />
      <Environment preset="city" />
      <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
        <GizmoViewport
          axisColors={["#9d4b4b", "#2f7f4f", "#3b5b9d"]}
          labelColor="white"
        />
      </GizmoHelper>
    </Canvas>
  );
}
