import { useState } from 'react';
import Menu from './components/NavBar';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Blank from './components/Blank';
import Home from './components/Home';
import PiePagina from './components/PiePagina';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter basename='/victimsJustice'>
      <Menu />
      <Routes>
        <Route path="/" element={<Blank />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
