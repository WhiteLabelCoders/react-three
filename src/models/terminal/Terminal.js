import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Terminal = () => {
	const gltf = useLoader(GLTFLoader, 'terminal.glb')
	return (
		<mesh scale={[0.3, 0.3, 0.3]} renderOrder={1}>
			<primitive object={gltf.scene} position={[0, 8, -40]} />
		</mesh >
	);
}

export default Terminal;
