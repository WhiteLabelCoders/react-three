import { Suspense, useRef } from 'react'
import ReactDOM from 'react-dom'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import './App.css'


import CameraControls from './controllers/CameraControls'
import FlyControl from './controllers/FlyControl'
import ComponentBinder from './controllers/ComponentBinder'
import { Fog } from 'three'

// import Box from './objects/Box'



function App() {

  return (
    <div className="canvas-container">
      <Canvas
        className='webgl'
        color={'0x000000'}
        gl={{ alpha: false }}
        onCreated={(state) => {
          state.scene.fog = new Fog("#000", 3, 15)
        }}>
        <Suspense fallback={null}>

          {/* helpers */}
          <CameraControls />
          {/* <FlyControl /> */}

          <gridHelper args={[100, 100]} />

          {/* lights */}
          <ambientLight intensity={0.1} color={'white'} />
          <pointLight color="white" position={[5, 3, 10]} lookAt={[0, 0, 0]} />

          {/* objects */}
          <ComponentBinder />

          {/* models */}
        </Suspense >
      </Canvas>
    </div>
  )
}

export default App
