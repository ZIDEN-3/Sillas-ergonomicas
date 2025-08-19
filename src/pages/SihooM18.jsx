import ImgSihooM18 from '../images/SihooM18.webp';
import Comprar from '../components/Comprar';


import '../styles/HermanMiller.css';

function SihooM18() {
  return (
    <div>
      <h1>Sihoo M18</h1>
      <div className='containerImg'><img src={ImgSihooM18} /></div>
     <Comprar
         urlAmazon={"https://amzn.to/4ooWH4U"}/>

      <section>
        <article className="caracteristicas">
          <h2>Sihoo M18 ofrece ergonomía, diseño, soporte a un precio accesible y una de las mejores sillas para la espalda</h2>
          <p>
            La <strong>Sihoo M18</strong> es una silla ergonómica que combina funciones esenciales para el bienestar postural con un diseño profesional y elegante. 
            Es una excelente opción para quienes buscan comodidad sin necesidad de invertir en modelos premium.
          </p>
          <p>
            Ideal para home office, oficinas corporativas o espacios de estudio, la M18 destaca por su <strong>soporte lumbar ajustable, respaldo de malla y materiales resistentes</strong>.
          </p>
        </article>

        <article className="caracteristicas">
          <h3>Características principales de la Sihoo M18</h3>
          <p>
            Diseñada pensando en la ergonomía, la Sihoo M18 ayuda a mantener una postura saludable incluso durante jornadas largas, evitando dolores y mejorando el rendimiento.
          </p>
          <ul className='ul1'>
            <li className='lista1'><strong>Soporte lumbar ajustable:</strong> cuida la curvatura natural de la espalda baja.</li>
            <li className='lista1'><strong>Reposacabezas ajustable:</strong> proporciona soporte para cuello y cabeza.</li>
            <li className='lista1'><strong>Respaldo reclinable hasta 120°:</strong> ideal para pequeños descansos.</li>
            <li className='lista1'><strong>Apoyabrazos ajustables:</strong> permiten adaptar la altura para mayor confort.</li>
            <li className='lista1'><strong>Malla transpirable en el respaldo:</strong> mantiene el flujo de aire y evita la acumulación de calor.</li>
          </ul>
           <Comprar
         urlAmazon={"https://amzn.to/4ooWH4U"}/>
        </article>

        <article className="caracteristicas">
          <h3>¿Por qué elegir la Sihoo M18?</h3>
          <p>
            La Sihoo M18 es perfecta para quienes buscan <strong>ergonomía efectiva con buen diseño y durabilidad</strong>.
            Está pensada para ajustarse a distintas necesidades sin perder calidad.
          </p>
        </article>

        <article className="caracteristicas">
          <p>
            Es ideal para:
          </p>
          <ul className='ul1'>
            <li className='lista1'>Personas que trabajan muchas horas sentadas.</li>
            <li className='lista1'>Quienes quieren prevenir molestias posturales.</li>
            <li className='lista1'>Estudiantes o gamers que buscan ergonomía sin gastar de más.</li>
            <li className='lista1'>Ambientes modernos que requieren una silla estética y funcional.</li>
            <li className='lista1'>Es una de las mejores sillas ergonómicas para programadores</li>
            <li className='lista1'>Es una de las mejores sillas ergonómicas teletrabajo</li>
          </ul>
           <Comprar
         urlAmazon={"https://amzn.to/4ooWH4U"}/>
        
        </article>

        <article className="caracteristicas">
          <p>
            Su diseño profesional en tonos oscuros permite integrarla fácilmente a cualquier ambiente de trabajo o estudio.
            La <strong>Sihoo M18</strong> cumple con los principios de ergonomía moderna, ofreciendo una experiencia muy cercana a modelos más costosos.
            Con una excelente relación calidad-precio, es una de las mejores opciones del mercado en 2025.
          </p>

          <h3>Preguntas frecuentes</h3>
          <p><strong>¿La Sihoo M18 sirve para personas altas?</strong></p>
          <p>Sí. Soporta personas de hasta 1,85 m y 130 kg, gracias a su respaldo alto y materiales resistentes.</p>

          <p><strong>¿Se puede usar para estudiar o jugar?</strong></p>
          <p>Sí. Su diseño ergonómico la hace ideal para estudiar, trabajar o pasar horas jugando sin sufrir dolores posturales.</p>

          <p><strong>¿Viene armada?</strong></p>
          <p>No. Llega desarmada pero incluye herramientas e instrucciones sencillas para su ensamblado.</p>
         <Comprar
         urlAmazon={"https://amzn.to/4ooWH4U"}/>
        </article>
      </section>
    </div>
  );
}

export default SihooM18;
