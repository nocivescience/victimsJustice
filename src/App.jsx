import { useState } from 'react';
import Menu from './components/NavBar';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <Menu />
      </>
  )
}

export default App
