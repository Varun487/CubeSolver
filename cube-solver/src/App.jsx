import './App.css';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Cube from './components/Cube';
import { Color } from 'three';

const App = () => {
  return (
    <Canvas camera={{ position: [3, 3, 3] }}>
      <ambientLight intensity={2} />
      <Cube position={[0,0,0]} size={[1,1,1]} color={"blue"} />
      <OrbitControls target={[0, 0, 0]}/>
      <Stars />
    </Canvas>
  );
}

export default App;
