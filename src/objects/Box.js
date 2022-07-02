const Box = () => {

	return (
		<mesh position={[0, 13, -30]} scale={0.6} onClick={(e) => console.log('click')} name={"screen"} >
			<boxGeometry args={[76, 40, 0.1]} />
			<meshPhysicalMaterial />
		</mesh>
	)
}

export default Box
