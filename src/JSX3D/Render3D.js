import { useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from 'three'

import JSX3D from "./JSX3D";

const Render3D = () => {

	let screenJSX = document.querySelector('.js--screen');
	const { camera, gl, mouse, scene } = useThree()
	const tempV = new THREE.Vector3();
	let screenHTML = []

	for (const child of scene.children) {
		if (child['name'] === "screen") {
			screenHTML.push(child)
			console.log(screenHTML)
			// console.log(screen)
		}
	}
	// screenHTML.updateWorldMatrix(true, false);

	// screenHTML.getWorldPosition(tempV);

	// tempV.project(camera);

	// const x = (tempV.x * .5 + .5) * gl.domElement.clientWidth;
	// const y = (tempV.y * -.5 + .5) * gl.domElement.clientHeight;

	// screenJSX.style.transform = `translate(-50%, -50%) translate(${x}px,${y}px)`

	return null
}
export default Render3D;

