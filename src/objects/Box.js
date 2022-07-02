const Box = () => {
	return (
		<mesh position={[0, 1, -10]} scale={1} onClick={(e) => console.log('click')}>
			<boxGeometry args={[1, 1, 1]} />
			<meshPhysicalMaterial />
		</mesh>
	)
}

export default Box
