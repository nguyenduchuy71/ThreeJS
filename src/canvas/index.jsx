import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import Shirt from './Shirt';
import CameraRig from './CameraRig';
// import Backdrop from './Backdrop';

const CanvasModel = () => {
  return (
    <Canvas
      className="w-full max-w-full h-full transition-all ease-in"
      gl={{ preserveDrawingBuffer: true }}
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
    >
      <ambientLight intensity={0.8} />
      <Environment preset="city" />

      <CameraRig>
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
