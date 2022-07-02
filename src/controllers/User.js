import { useEffect } from "react"
import { useThree, useFrame } from '@react-three/fiber'
import { FlyControls } from "@react-three/drei"


const User = () => {
	const { camera } = useThree()

	return (
		<FlyControls enableDamping={false} movementSpeed={3} rollSpeed={0} dragToLook={false} />
	)
}

export default User
