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
import Footer from './components/Footer'
import './App.css';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"


function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Inicio/>}></Route>
      <Route path='/Silla-ergonomica-Herman-Miller' element={<HermanMiller/>}></Route>
     <Route path='/Silla-ergonomica-ErgoHuman' element={<ErgoHuman/>}></Route>
     <Route path='/Silla-ergonomica-de-oficina' element={<SillaOficina/>}></Route>
      <Route path='/Silla-ergonomica-Hbada-Ergonomic-Office-Chair' element={<HbadaErgonomic/>}></Route>
      <Route path='/Silla-ergonomica-Songmics-OBN86BK' element={<SongmicsOBN86BK/>}></Route>
      <Route path='/Silla-ergonomica-Steel-case-series-1' element={<SteelCaseSeries/>}></Route>
      <Route path='/Silla-ergonomica-Sihoo-M18' element={<SihooM18/>}></Route>
      <Route path='/Silla-ergonomica-de-rodillas' element={<SillaDeRodillas/>}></Route>
      <Route path='/Silla-ergonomica-de-malla' element={<SillaDeMalla/>}></Route>
      <Route path='/Sillas-ergonomicas-economicas' element={<SillaEconómica/>}></Route>
      <Route path='/Silla-ergonomica-especial' element={<SillaEspecial/>}></Route>
      <Route path='/Silla-gamer-ergonomica' element={<SillaGamer/>}></Route>
      <Route path='/Silla-ergonomica-ejecutiva' element={<SillaEjecutiva/>}></Route>
      <Route path='/Silla-ergonomica-reclinable-con-reposapies' element={<SillaReclinableReposapiés/>}></Route>
      <Route path='*' element={<NotFoundPage/>}></Route>
    </Routes>
    <Footer/>
    <Analytics />
    <SpeedInsights />
    </>
  )
}

export default App
