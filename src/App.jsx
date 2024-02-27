import { useState } from 'react';
import Menu from './components/NavBar';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Blank from './components/Blank';
import Home from './components/Home';
import Casos from './components/casos/Casos';
import Caso from './components/casos/Caso';
import informacionCaso from './components/casos/comentario.js';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter basename='/victimsJustice'>
      <Menu />
      <Routes>
        <Route path="/" element={<Blank />} />
        <Route path="/home" element={<Home />} />
        <Route path="/casos" element={<Casos />} />
        <Route path="/casos/viviana" element={<Caso
          nombre={informacionCaso.tituloVivana}
          descripcion={informacionCaso.textoViviana}
        />} />
        <Route path='/casos/tirador' element={
          <Caso
            nombre={informacionCaso.tituloTirador}
            descripcion={informacionCaso.textoTirador}
          />
        }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
