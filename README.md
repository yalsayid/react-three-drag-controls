# React Three DragControls

A powerful and versatile React Three Fiber component that allows you to effortlessly add dragging interactions to any object within your 3D scene.

[![Edit yalsayid/react-three-object-drag-controls/main](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/github/yalsayid/react-three-object-drag-controls/main?embed=1)

## 🚀 Installation

You have two options for using the `DragControls` component:

- **Install from pmndrs/drei:**

  ```bash
  npm install @react-three/drei
  ```

  After installation, you can import it as shown in the Usage section below. Note that the `DragControls` component was merged into pmndrs/drei, as detailed in [this PR](https://github.com/pmndrs/drei/pull/1827).

- **Copy from this repository:**
  If you prefer, directly copy the `DragControls` component code from the `src` folder of this repository into your project.

## 💫 Usage

**If you installed from pmndrs/drei:**

```javascript
import { DragControls } from "@react-three/drei";
```

**Regardless of installation method:**

1. Wrap your desired object with `DragControls`:

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
import { DragControls } from "./components/DragControls";
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
