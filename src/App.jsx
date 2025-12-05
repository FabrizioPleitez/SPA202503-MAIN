import { Routes, Route} from 'react-router';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { Layout } from './pages/Layout';
import { PokemonDetails } from './pages/PokemonDetails';

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/detalles/:id" element={<PokemonDetails/>} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
