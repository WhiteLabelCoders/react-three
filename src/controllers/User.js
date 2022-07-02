import { useEffect } from "react";
import { useThree, useFrame } from '@react-three/fiber'
// import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js';
import { FlyControls } from "@react-three/drei";


const User = () => {
	const { camera } = useThree()
	// const { camera, gl } = useThree();
	camera.position.set(0, 3, 10)
	// const controls = new FlyControls(camera, gl.domElement);
	// controls.movementSpeed = 1000;
	// controls.domElement = gl.domElement;
	// // controls.rollSpeed = Math.PI / 24;
	// controls.autoForward = false;
	// controls.dragToLook = false;



	useFrame(() => camera.position.y = 3);

	return (
		<FlyControls enableDamping={false} movementSpeed={3} rollSpeed={0} dragToLook={false} />
	)
}

export default User;
