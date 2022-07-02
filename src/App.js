import { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import './App.css'


import FPVControls from './controllers/FPVControls'
import CameraControls from './controllers/CameraControls'
import User from './controllers/User'
import Terminal from './models/terminal/Terminal'

import Box from './objects/Box'

function App() {
  return (
    <div className="canvas-container">
      <Canvas className='webgl'>
        <Suspense fallback={null}>

          {/* helpers */}
          <CameraControls />

          <User />
          <gridHelper args={[100, 100]} />

          {/* lights */}
          <ambientLight intensity={0.1} color={'white'} />
          <pointLight color="white" position={[5, 3, 10]} lookAt={[0, 0, 0]} />

          {/* objects */}
          {/* <Box /> */}

          {/* models */}
          <Terminal scale={[0.5, 0.5, 0.5]} />
        </Suspense >
      </Canvas>
    </div>
  )
}

export default App
