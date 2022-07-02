import ReactDOM from 'react-dom'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import './App.css';

import CameraControls from './helpers/CameraControls'
import FlyControll from './helpers/FlyControll';

import Box from './objects/Box';


function App() {
  return (
    <div className="canvas-container">
      <Canvas className='webgl'>
        {/* helpers */}
        <CameraControls />
        {/* <FlyControll /> */}
        <gridHelper args={[100, 100]} />

        {/* lights */}
        <ambientLight intensity={0.1} color={'white'} />
        <pointLight color="white" position={[5, 3, 10]} lookAt={[0, 0, 0]} />

        {/* objects */}
        <Box />
      </Canvas>
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById('root'))

export default App;
