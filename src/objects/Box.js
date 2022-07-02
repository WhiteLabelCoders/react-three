const Box = () => {
	return (
		<mesh position={[0, 1, 0]} scale={1} onClick={(e) => console.log('click')}>
			<boxGeometry args={[2, 2, 2]} />
			<meshPhysicalMaterial />
		</mesh>
	);
}

export default Box;
