import { Canvas } from "@react-three/fiber"
import { Fog } from "three"
import { Suspense, useRef } from "react"
import CameraControls from "./controllers/CameraControls"
import ComponentBinder from "./controllers/ComponentBinder"
import * as THREE from 'three'

const CanvasJS = () => {

	const floor = useRef();

	return (
		<div className="canvas-container">
			<Canvas
				className='webgl'
				color={'0x000000'}
				gl={{ alpha: false }}
				onCreated={(state) => {
					// state.scene.fog = new Fog("#000", 5, 15)
				}}>
				<Suspense fallback={null}>

					{/* helpers */}
					<CameraControls />
					<gridHelper args={[100, 100]} />

					{/* lights */}
					<ambientLight intensity={0.1} color={'#fff'} />
					<pointLight color="#fff" position={[0, 5, -15]} lookAt={[0, 0, -15]} />
					{/* <spotLight color="#fff" position={[0, 5, -20]} lookAt={[0, 0, -20]} /> */}

					{/* objects */}
					<ComponentBinder />
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
