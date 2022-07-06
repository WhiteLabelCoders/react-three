import { Canvas } from "@react-three/fiber"
import { Suspense, useRef, useState } from "react"
import CameraControls from "./controllers/CameraControls"
import ComponentBinder from "./controllers/ComponentBinder"
import * as THREE from 'three'

const CanvasJS = () => {

	const floor = useRef()
	const light = useRef()

	const [intensity, useIntensity] = useState(0)

	return (
		<div className="canvas-container">
			<Canvas
				className='webgl'
				color={'0x000000'}
				gl={{ alpha: false }}
				onCreated={(state) => {
				}}>

				<Suspense fallback={null}>

					{/* helpers */}
					<CameraControls />
					<gridHelper args={[100, 100]} />

					{/* lights */}
					<ambientLight intensity={0.1} color={'#fff'} />
					<pointLight color="#fff" position={[0, 5, -15]} lookAt={[0, 0, -15]} />
					<spotLight ref={light} color="rgba(96, 139, 175, 1)" intensity={intensity} position={[-40, 5, -60]} lookAt={[-40, 0, -60]} />
					<spotLight ref={light} color="rgba(96, 139, 175, 1)" intensity={intensity} position={[40, 5, -60]} lookAt={[40, 0, -60]} />

					{/* objects */}
					<ComponentBinder intensity={intensity} setIntensity={useIntensity} />
					<mesh ref={floor}
						position={[0, 0.1, 0]}
						onClick={(e) => console.log('click')}
						name={"floor"}
						rotation={new THREE.Euler(Math.PI / 2, 0, 0)} >
						<boxGeometry args={[100, 100, 0.1]} />
						<meshPhysicalMaterial color={"#1e1e1f"} />
					</mesh>
				</Suspense >
			</Canvas>
		</div>
	);
}

export default CanvasJS;
