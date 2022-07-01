import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'
import './App.css';

function App() {
  return (
    <div className="canvas-container">
      <Canvas className='webgl'>
        <ambientLight intensity={0.1} color={'white'} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshPhysicalMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById('root'))

export default App;
