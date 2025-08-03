import TiposDeSillas from "../components/TiposDeSillas";
import Silladerodillas from '../images/silladerodillas.png';
import Sillaejecutiva from '../images/sillaejecutiva.png';
import Sillagamer from '../images/sillagamer.png';
import Sillademalla from '../images/sillademalla.png';

import '../styles/inicio.css';

function Inicio () {
    return (
        <>
        <article>
            <header>
                <h1>Mejores Sillas ergonómicas para el 2025</h1>
            </header>
            <section>
                <div className="container">
                    <TiposDeSillas
                     Nombre=' Herman Miller Aeron'
                     srcImagen={Sillademalla}
                     altImagen='Silla ergonomica'
                     Pagina='/Silla-ergonómica-Herman-Miller-Aereon'
                     />
                     <TiposDeSillas
                     Nombre='Steelcase Series 1'
                     srcImagen={Sillademalla}
                     altImagen='Silla ergonomica'
                     Pagina='./Silla-ergonómica-Steel-case-series-1'
                     />
                     <TiposDeSillas
                     Nombre='Sihoo M57'
                     srcImagen={Sillademalla}
                     altImagen='Silla ergonomica'
                     Pagina='/Silla-ergonómica-Sihoo-M57'
                     />
                     <TiposDeSillas
                     Nombre='Hbada Ergonomic Office Chair'
                     srcImagen={Sillademalla}
                     altImagen='Silla ergonomica'
                     Pagina='/Silla-ergonómica-Hbada-Ergonomic-Office-Chair'
                     />
                </div>
            </section>
            <section>
                <h2>Tipos de sillas ergonómicas</h2>
                <p>Las sillas ergonómicas son aquellas que se adaptan a la forma del cuerpo humano, 
                    proporcionando comodidad y soporte adecuado para 
                    largas horas de trabajo o estudio. 
                    Existen varios tipos de sillas ergonómicas, 
                    cada una diseñada para satisfacer diferentes necesidades y
                     preferencias.</p>
                     <div className="container">
                        <TiposDeSillas
                     Nombre='Sillas ergonómicas de oficina clásica'
                     srcImagen={Sillademalla}
                     altImagen='Silla ergonomica'
                     Pagina='/Silla-ergonómica-de-oficina'
                     />
                     <TiposDeSillas
                     Nombre='Sillas ergonómicas de rodillas (kneeling chair)'
                     srcImagen={Silladerodillas}
                     altImagen='Silla ergonomica'
                     Pagina='/Silla-ergonómica-de-rodillas'
                     />
                     <TiposDeSillas
                     Nombre='Sillas ergonómicas de malla'
                     srcImagen={Sillademalla}
                     altImagen='Silla ergonomica'
                     Pagina='/Silla-ergonómica-de-malla'
                     />
                     <TiposDeSillas
                     Nombre='Sillas ergonómicas económicas'
                     srcImagen={Sillademalla}
                     altImagen='Silla ergonomica'
                     Pagina='/Sillas-ergonómicas-económicas'
                     />
                     <TiposDeSillas
                     Nombre='Sillas ergonómicas especiales'
                     srcImagen={Sillademalla}
                     altImagen='Silla ergonomica'
                     Pagina='/Silla-ergonómica-especial'
                     />
                      <TiposDeSillas
                     Nombre='Sillas ergonómicas gamer'
                     srcImagen={Sillagamer}
                     altImagen='Silla ergonomica'
                     Pagina='/Silla-gamer-ergonómica'
                     />
                      <TiposDeSillas
                     Nombre='Sillas ergonómicas ejecutivas'
                     srcImagen={Sillaejecutiva}
                     altImagen='Silla ergonomica'
                     Pagina='/Silla-ergonómica-ejecutiva'
                     />
                     <TiposDeSillas
                     Nombre='Silla ergonómica reclinable con reposapiés'
                     srcImagen={Sillademalla}
                     altImagen='Silla ergonomica'
                     Pagina='/Silla-ergonómica-reclinable-con-reposapiés'
                     />
                     </div>
            </section>
        </article>
        </>
    )
}

export default Inicio;