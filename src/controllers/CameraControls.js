import { useEffect } from "react";
import { useThree, useFrame } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from 'three'


const CameraControls = () => {

	function clamp(x, a, b) {
		return Math.min(Math.max(x, a), b);
	}

	const { camera, gl, mouse } = useThree();

	let currentMouseX = 1, currentMouseY = 1, previousMouseX = null, previousMouseY = null, xDelta = 0, yDelta = 0

	let rotation = new THREE.Quaternion()
	let translation = new THREE.Vector3
	let phi = 0
	let phiSpeed = 2
	let theta = 0
	let qx = new THREE.Quaternion()
	let qz = new THREE.Quaternion()
	let q = new THREE.Quaternion()

	window.addEventListener('mousemove', (e) => {

		currentMouseX = e.pageX - window.innerWidth / 2
		currentMouseY = e.pageY - window.innerHeight / 2

		if (previousMouseX === null && previousMouseY === null) {
			previousMouseX = currentMouseX
			previousMouseY = currentMouseY
		}

		xDelta = currentMouseX - previousMouseX
		yDelta = currentMouseY - previousMouseY

		const xh = xDelta / window.innerWidth
		const yh = yDelta / window.innerHeight

		phi += -xh * phiSpeed
		theta = clamp(theta + -yh * 5, -Math.PI / 3, Math.PI / 3)

		qx.setFromAxisAngle(new THREE.Vector3(0, 1, 0), phi)
		qz.setFromAxisAngle(new THREE.Vector3(1, 0, 0), theta)

		q.multiply(qx)
		q.multiply(qz)

		rotation.copy(q)

		previousMouseX = currentMouseX
		previousMouseY = currentMouseY

	})

	useFrame(
		() => {

			camera.quaternion.copy(rotation)


		}
	)

	return null;
}

export default CameraControls;
