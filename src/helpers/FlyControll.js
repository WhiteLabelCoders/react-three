import { useEffect } from "react";
import { useThree, useFrame } from '@react-three/fiber'
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js';

const FlyControll = () => {

	const { camera, gl } = useThree();

	const controls = new FlyControls(camera, gl.domElement);

	controls.movementSpeed = 1000;
	controls.domElement = gl.domElement;
	controls.autoForward = false;
	controls.dragToLook = false;

	useFrame(() => controls.update());

	return null;
}

export default FlyControll;
