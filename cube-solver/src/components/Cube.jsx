import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Piece from "./Piece";
import TWEEN from '@tweenjs/tween.js';
import RotationButtons from "./RotationButtons";

const Cube = () => {
    const ref = useRef();
    useFrame(() => {
        TWEEN.update()
    })
    return (
      <>
        <group ref={ref}>
            {[...Array(3).keys()].map(x =>
                [...Array(3).keys()].map(y =>
                    [...Array(3).keys()].map(z =>
                        (<Piece key={x + y + z} position={[x-1, y-1, z-1]}/>)
            )))}
        </group>
        <RotationButtons cubeGroup={ref}/>
      </>
    );
}

export default Cube;
