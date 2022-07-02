import { useEffect } from "react";
import { useThree, useFrame } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


const CameraControls = () => {

	const { camera, gl, mouse } = useThree();

	useFrame(
		() => {
			let mouseX = ((mouse.x / window.innerWidth) * 2 - 1)
			let mouseY = - (mouse.y / window.innerHeight) * 2 + 1
			console.log(mouseX)
			camera.lookAt(mouseX, mouseY, 0)
		}
	)


	useEffect(
		() => {
			const controls = new OrbitControls(camera, gl.domElement);

			controls.minDistance = 3;
			// controls.maxDistance = 20;

			return () => {
				controls.dispose();
			};
		},
		[camera, gl]
	);
	return null;
}

export default CameraControls;
