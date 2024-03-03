import TWEEN from '@tweenjs/tween.js';
import RubiksCube from "./cube";

const resetCubeGroup = (cubeGroup, rotationGroup) => {
    rotationGroup.children
        .slice()
        .reverse()
        .forEach(function (c) {
            cubeGroup.attach(c)
        })
    rotationGroup.quaternion.set(0, 0, 0, 1)
}

const attachToRotationGroup = (cubeGroup, rotationGroup, axis, limit) => {
    cubeGroup.children
        .slice()
        .reverse()
        .filter(function (c) {
            return limit < 0 ? c.position[axis] < limit : c.position[axis] > limit
        })
        .forEach(function (c) {
            rotationGroup.attach(c)
        })
}

const animateRotationGroup = (rotationGroup, axis, multiplier) => {
    new TWEEN.Tween(rotationGroup.rotation)
        .to(
            {
                [axis]: rotationGroup.rotation[axis] + (Math.PI / 2) * multiplier
            },
            250
        )
        .easing(TWEEN.Easing.Cubic.InOut)
        .start()
}

const rotate = (cubeGroup, rotationGroup, axis, limit, multiplier) => {
    if (!TWEEN.getAll().length) {
        resetCubeGroup(cubeGroup, rotationGroup)
        attachToRotationGroup(cubeGroup, rotationGroup, axis, limit)
        animateRotationGroup(rotationGroup, axis, multiplier)
    }
}

export default rotate;
