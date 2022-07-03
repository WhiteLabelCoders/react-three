import { useEffect } from "react"
import { useThree, useFrame } from '@react-three/fiber'
import { FlyControls } from "@react-three/drei"


const FlyControl = () => {
	const { camera } = useThree()

	return (
		<FlyControls enableDamping={false} movementSpeed={3} rollSpeed={0} dragToLook={false} />
	)
}

export default FlyControl
