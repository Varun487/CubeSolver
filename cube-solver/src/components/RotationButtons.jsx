import { useRef } from "react";
import { useControls, button } from 'leva';
import rotate from "./Logic/rotate.js";

const RotationButtons = ({ cubeGroup }) => {
    const rotationGroup = useRef()

    useControls('Cube', {
        'Back': button(() => {
            rotate(cubeGroup.current, rotationGroup.current, 'x', -0.5, 1)
        }),
        'Back inverse': button(() => {
            rotate(cubeGroup.current, rotationGroup.current, 'x', -0.5, -1)
        }),
        'Front': button(() => {
            rotate(cubeGroup.current, rotationGroup.current, 'x', 0.5, -1)
        }),
        'Front inverse': button(() => {
            rotate(cubeGroup.current, rotationGroup.current, 'x', 0.5, 1)
        }),
        'Right': button(() => {
            rotate(cubeGroup.current, rotationGroup.current, 'z', -0.5, 1)
        }),
        'Right inverse': button(() => {
            rotate(cubeGroup.current, rotationGroup.current, 'z', -0.5, -1)
        }),
        'Left': button(() => {
            rotate(cubeGroup.current, rotationGroup.current, 'z', 0.5, -1)
        }),
        'Left inverse': button(() => {
            rotate(cubeGroup.current, rotationGroup.current, 'z', 0.5, 1)
        }),
        'Up': button(() => {
            rotate(cubeGroup.current, rotationGroup.current, 'y', 0.5, -1)
        }),
        'Up inverse': button(() => {
            rotate(cubeGroup.current, rotationGroup.current, 'y', 0.5, 1)
        }),
        'Down': button(() => {
            rotate(cubeGroup.current, rotationGroup.current, 'y', -0.5, 1)
        }),
        'Down inverse': button(() => {
            rotate(cubeGroup.current, rotationGroup.current, 'y', -0.5, -1)
        })
    })

    return (
        <>
            <group ref={rotationGroup} />
        </>
    )
}

export default RotationButtons;
