import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';

function App() {
  return (
    <main className="app transition-all ease-in bg-gray-300">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;
