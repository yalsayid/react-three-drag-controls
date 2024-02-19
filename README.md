# React Three DragControls

A powerful and versatile React Three Fiber component that allows you to effortlessly add dragging interactions to any object within your 3D scene.

## 🚀 Installation

Instead of installing via npm, please copy the `DragControls` component code directly from the `src` folder in this repository to your project.

## 💫 Usage

1. Import the `DragControls` component:

   ```javascript
   import { DragControls } from "./components/DragControls";
   ```

2. Wrap your desired object with `DragControls`:

   ```javascript
   <DragControls autoTransform={true}>
     <mesh>{/* Your mesh geometry and materials */}</mesh>
   </DragControls>
   ```

## ⚙️ Props

| Prop            | Type                                       | Default      | Description                                                                                 |
| --------------- | ------------------------------------------ | ------------ | ------------------------------------------------------------------------------------------- |
| `autoTransform` | `boolean`                                  | `true`       | Automatically update the object's transform if dragging changes its position.               |
| `matrix`        | `THREE.Matrix4`                            | `undefined`  | External matrix to control. Use if you need a transform outside of the component's control. |
| `axisLock`      | `"x"` \| `"y"` \| `"z"` \| `undefined`     | `undefined`  | Restrict dragging to a specific axis                                                        |
| `dragLimits`    | `[[number, number]]`\| `undefined` (x,y,z) | `undefined`  | Array of min/max tuples to limit dragging in each axis (e.g., `[[0, 10], [-5, 5], [0, 0]]`) |
| `onHover`       | `(hovering: boolean) => void`              | `undefined`  | Callback for when the mouse hovers over the draggable object                                |
| `onDragStart`   | `(origin: THREE.Vector3) => void`          | `undefined`  | Callback when the drag starts, providing the drag origin in world space                     |
| `onDrag`        | Callback                                   | `undefined`  | Callback invoked during the drag (see note below for parameters)                            |
| `onDragEnd`     | `() => void`                               | `undefined`  | Callback when the drag ends                                                                 |
| `children`      | `React.ReactNode`                          | **Required** | The object(s) you want to make draggable                                                    |

**`onDrag` Callback Parameters:**

- `localMatrix`: Dragged object's local transform matrix
- `deltaLocalMatrix`: Change in local position since last drag event
- `worldMatrix`: Dragged object's world transform matrix
- `deltaWorldMatrix`: Change in world position since last drag event

## 🕹️ Example

```javascript
import { DragControls } from "react-three-dragcontrols";
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";

function MyScene() {
  const boxRef = useRef();

  return (
    <Canvas>
      <ambientLight />
      <DragControls autoTransform={true} ref={boxRef}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </DragControls>
    </Canvas>
  );
}
```
