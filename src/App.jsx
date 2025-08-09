import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import NotFoundPage from './pages/NotFoundPage';
import SillaOficina from './pages/SillaOficina';
import SillaDeRodillas from './pages/SillaDeRodillas';
import SillaEjecutiva from './pages/SillaEjecutiva';
import SillaGamer from './pages/SillaGamer';
import SillaEspecial from './pages/SillaEspecial';
import SillaReclinableReposapiés from './pages/SillaReclinableReposapiés';
import SillaEconómica from './pages/SillaEconómicas';
import SillaDeMalla from './pages/SillaDeMalla';
import SongmicsOBN86BK from './pages/SongmicsOBN86BK';
import SteelCaseSeries from './pages/SteelCaseSeries';
import SihooM18 from './pages/SihooM18';
import ErgoHuman from './pages/ErgoHuman';
import HbadaErgonomic from './pages/Hbada';
import HermanMiller from './pages/HermanMiller';
import NavBar from "./components/NavBar";
import './App.css';
import { Analytics } from "@vercel/analytics/react"


function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Inicio/>}></Route>
      <Route path='/Silla-ergonómica-Herman-Miller' element={<HermanMiller/>}></Route>
     <Route path='/Silla-ergonómica-ErgoHuman' element={<ErgoHuman/>}></Route>
     <Route path='/Silla-ergonómica-de-oficina' element={<SillaOficina/>}></Route>
      <Route path='/Silla-ergonómica-Hbada-Ergonomic-Office-Chair' element={<HbadaErgonomic/>}></Route>
      <Route path='/Silla-ergonómica-Songmics-OBN86BK' element={<SongmicsOBN86BK/>}></Route>
      <Route path='/Silla-ergonómica-Steel-case-series-1' element={<SteelCaseSeries/>}></Route>
      <Route path='/Silla-ergonómica-Sihoo-M18' element={<SihooM18/>}></Route>
      <Route path='/Silla-ergonómica-de-rodillas' element={<SillaDeRodillas/>}></Route>
      <Route path='/Silla-ergonómica-de-malla' element={<SillaDeMalla/>}></Route>
      <Route path='/Sillas-ergonómicas-económicas' element={<SillaEconómica/>}></Route>
      <Route path='/Silla-ergonómica-especial' element={<SillaEspecial/>}></Route>
      <Route path='/Silla-gamer-ergonómica' element={<SillaGamer/>}></Route>
      <Route path='/Silla-ergonómica-ejecutiva' element={<SillaEjecutiva/>}></Route>
      <Route path='/Silla-ergonómica-reclinable-con-reposapiés' element={<SillaReclinableReposapiés/>}></Route>
      <Route path='*' element={<NotFoundPage/>}></Route>
    </Routes>
    <Analytics />
    </>
  )
}

export default App
