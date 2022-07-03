import JSX3D from "../JSX3D/JSX3D"
import { Html } from "@react-three/drei"
import Terminal from '../models/terminal/Terminal'
import { useRef, useState } from "react"


const Box = () => {

	const box = useRef()
	const [occluded, occlude] = useState()
	return (
		<group>
			<mesh ref={box} position={[0, 13, -30]} scale={0.6} onClick={(e) => console.log('click')} name={"screen"} renderOrder={2}>
				<boxGeometry args={[76, 40, 0.1]} />
				<meshPhysicalMaterial />
			</mesh>
			<mesh >
				<Html className="content" position={[0, 13, -29.9]} scale={[3.5, 3.5, 1]} transform occlude >
					<div className="wrapper">
						<JSX3D />
					</div>
				</Html>
			</mesh>
			<Terminal scale={[0.5, 0.5, 0.5]} />
		</group >
	)
}

export default Box
