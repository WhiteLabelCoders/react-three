import { FirstPersonControls } from "@react-three/drei"

const FPVControls = () => {
	const args = {
		// activeLook: true,
		// autoForward: false,
		// constrainVertical: false,
		// enabled: true,
		// heightCoef: 1,
		// heightMax: 1,
		// heightMin: 0,
		// heightSpeed: true,
		// lookVertical: true,
		lookSpeed: 0.1,
		movementSpeed: 5,
		// verticalMax: Math.PI,
		// verticalMin: 0,
	}

	return (
		<FirstPersonControls {...args} />
	)
}

export default FPVControls
