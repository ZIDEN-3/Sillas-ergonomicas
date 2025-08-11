import TiposDeSillas from "../components/TiposDeSillas";
import Silladerodillas from '../images/silladerodillas.webp';
import Sillaejecutiva from '../images/sillaejecutiva.webp';
import Sillagamer from '../images/sillagamer.webp';
import Sillademalla from '../images/sillademalla.webp';
import Sillaeconomica from '../images/Sillaeconomica.webp';
import Sillaespecial from '../images/Sillaespecial.webp';
import Steelcaseseries from '../images/steelcaseseries1.jpg';
import SihooM18 from '../images/SihooM18.jpg';
import Sillaconreposapies from '../images/sillareclinable.webp';
import Songmics from '../images/songmics.jpg';
import ErgoHuman from '../images/ErgoHuman.jpg';
import SilldeOficina from '../images/silladeoficina.webp';


import '../styles/inicio.css';

function Inicio () {
    return (
        <>
        <article>
            <header>
                <h1>Mejores Sillas ergonómicas de oficina para el 2025</h1>
            </header>
            <section>
                <div className="container">
                    <TiposDeSillas
                     Nombre='Songmics OBN86BK'
                     srcImagen={Songmics}
                     altImagen='Silla ergonómica Songmics OBN86BK'
                     Pagina='/Silla-ergonómica-Songmics-OBN86BK'
                     />
                     <TiposDeSillas
                     Nombre='Steelcase Series 1'
                     srcImagen={Steelcaseseries}
                     altImagen='Silla ergonómica Steelcase Series 1'
                     Pagina='./Silla-ergonómica-Steel-case-series-1'
                     />
                     <TiposDeSillas
                     Nombre='Sihoo M18'
                     srcImagen={SihooM18}
                     altImagen='Silla ergonómica Sihoo M18'
                     Pagina='/Silla-ergonómica-Sihoo-M18'
                     />
                     <TiposDeSillas
                     Nombre='hjh OFFICE Ergo Line W'
                     srcImagen={ErgoHuman}
                     altImagen='Silla ergonómica ErgoHuman'
                     Pagina='/Silla-ergonómica-ErgoHuman'
                     />
                </div>
            </section>
            <section>
                <h2>Tipos de sillas ergonómicas</h2>
                <p>Las sillas ergonómicas son aquellas que se adaptan a la forma del cuerpo humano, 
                    proporcionando comodidad, salud y soporte adecuado para 
                    largas horas de trabajo o estudio. 
                    Existen varios tipos de sillas ergonómicas, 
                    cada una diseñada para satisfacer diferentes necesidades y
                     preferencias.</p>
                     <div className="container">
                        <TiposDeSillas
                     Nombre='Sillas ergonómicas de oficina clásica'
                     srcImagen={SilldeOficina}
                     altImagen='Silla ergonómica de oficina'
                     Pagina='/Silla-ergonómica-de-oficina'
                     />
                     <TiposDeSillas
                     Nombre='Sillas ergonómicas de rodillas (kneeling chair)'
                     srcImagen={Silladerodillas}
                     altImagen='Silla ergonómica de rodillas'
                     Pagina='/Silla-ergonómica-de-rodillas'
                     />
                     <TiposDeSillas
                     Nombre='Sillas ergonómicas de malla'
                     srcImagen={Sillademalla}
                     altImagen='Silla ergonómica de malla'
                     Pagina='/Silla-ergonómica-de-malla'
                     />
                     <TiposDeSillas
                     Nombre='Sillas ergonómicas económicas'
                     srcImagen={Sillaeconomica}
                     altImagen='Silla ergonómica economica'
                     Pagina='/Sillas-ergonómicas-económicas'
                     />
                     <TiposDeSillas
                     Nombre='Sillas ergonómicas especiales'
                     srcImagen={Sillaespecial}
                     altImagen='Silla ergonómica especiales'
                     Pagina='/Silla-ergonómica-especial'
                     />
                      <TiposDeSillas
                     Nombre='Sillas ergonómicas gamer'
                     srcImagen={Sillagamer}
                     altImagen='Silla ergonómica gamer'
                     Pagina='/Silla-gamer-ergonómica'
                     />
                      <TiposDeSillas
                     Nombre='Sillas ergonómicas ejecutivas'
                     srcImagen={Sillaejecutiva}
                     altImagen='Silla ergonómica ejecutiva'
                     Pagina='/Silla-ergonómica-ejecutiva'
                     />
                     <TiposDeSillas
                     Nombre='Silla ergonómica reclinable con reposapiés'
                     srcImagen={Sillaconreposapies}
                     altImagen='Silla ergonómica con reposapies'
                     Pagina='/Silla-ergonómica-reclinable-con-reposapiés'
                     />
                     </div>
            </section>
        </article>
        </>
    )
}

export default Inicio;