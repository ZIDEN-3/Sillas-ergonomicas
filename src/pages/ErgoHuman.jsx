import ImgErgoHuman from '../images/ErgoHuman.jpg';
import Comprar from '../components/Comprar';

import '../styles/HermanMiller.css';

function ErgoHuman() {
  return (
    <div>
      <h1>hjh OFFICE Ergo Line W</h1>
      <div className='containerImg'><img src={ImgErgoHuman} /></div>
      <Comprar
         urlAmazon={"https://amzn.to/40RqGsc"}/>

      <section>
        <article className="caracteristicas">
          <h2>Ergo Line W: ergonomía profesional con diseño moderno y funcional</h2>
          <p>
            La <strong>hjh OFFICE Ergo Line W</strong> es una silla giratoria profesional que combina <strong>ergonomía avanzada, soporte lumbar y diseño europeo</strong>. Está pensada para ofrecer la máxima comodidad durante jornadas largas frente al escritorio, sin renunciar a una estética moderna.
          </p>
          <p>
            Su respaldo flexible con soporte lumbar incorporado, ajustes múltiples y materiales de alta calidad hacen de esta silla una opción ideal para <strong>oficinas, estudios y teletrabajo</strong>.
          </p>
        </article>

        <article className="caracteristicas">
          <h3>Características principales de la Ergo Line W</h3>
          <p>
            Esta silla está diseñada para adaptarse a la forma de tu espalda gracias a su respaldo con “costillas ergonómicas”, simulando la curvatura natural de la columna. Su sistema de reclinación y sus apoyabrazos ajustables la hacen muy versátil y cómoda.
          </p>
          <ul className='ul1'>
            <li className='lista1'><strong>Soporte lumbar dinámico:</strong> se ajusta automáticamente a la zona baja de la espalda.</li>
            <li className='lista1'><strong>Respaldo ergonómico flexible:</strong> compuesto por secciones que imitan la columna vertebral.</li>
            <li className='lista1'><strong>Mecanismo síncrono inteligente:</strong> adapta respaldo y asiento al movimiento del cuerpo.</li>
            <li className='lista1'><strong>Altura y profundidad del asiento ajustables:</strong> ideal para personas de diferentes estaturas.</li>
            <li className='lista1'><strong>Apoyabrazos 3D:</strong> ajustables en altura, ancho y ángulo.</li>
            <li className='lista1'><strong>Tapizado en tela gris oscuro resistente:</strong> elegante, profesional y fácil de mantener.</li>
          </ul>
           <Comprar
         urlAmazon={"https://amzn.to/40RqGsc"}/>

        </article>

        <article className="caracteristicas">
          <h3>¿Por qué elegir la hjh OFFICE Ergo Line W?</h3>
          <p>
            Esta silla ofrece <strong>calidad alemana y certificación TÜV</strong>, con una estructura robusta y un diseño pensado para la salud postural. Es perfecta para quienes buscan <strong>ergonomía real sin pagar precios premium</strong>.
          </p>
        </article>

        <article className="caracteristicas">
          <p>
            Es ideal para:
          </p>
          <ul className='ul1'>
            <li className='lista1'>Profesionales que trabajan 6 a 8 horas al día sentados.</li>
            <li className='lista1'>Personas con molestias lumbares que necesitan una silla adaptativa.</li>
            <li className='lista1'>Usuarios que buscan una silla ergonómica de nivel profesional.</li>
            <li className='lista1'>Ambientes modernos u oficinas elegantes.</li>
            <li className='lista1'>Es una de las mejores sillas ergonómicas con respaldo flexible</li>
            <li className='lista1'>Es una de las mejores sillas ergonómicas para oficinas ejecutivas</li>
          </ul>
           <Comprar
         urlAmazon={"https://amzn.to/40RqGsc"}/>

        </article>

        <article className="caracteristicas">
          <p>
            El diseño en color <strong>gris oscuro</strong> le da un aspecto profesional y limpio, ideal para cualquier espacio de trabajo. La <strong>Ergo Line W</strong> está diseñada para durar, con materiales resistentes, rodillos de calidad y una estructura certificada para soportar hasta 120 kg.
          </p>

          <h3>Preguntas frecuentes</h3>
          <p><strong>¿La hjh OFFICE Ergo Line W es apta para personas altas?</strong></p>
          <p>Sí. Es adecuada para usuarios de hasta 1,85 m y cuenta con respaldo alto, asiento profundo y ajuste de altura.</p>

          <p><strong>¿Se puede usar para trabajar desde casa?</strong></p>
          <p>Totalmente. Su diseño ergonómico y su respaldo adaptable la hacen ideal para home office o estudio profesional.</p>

          <p><strong>¿Viene armada?</strong></p>
          <p>No. Se entrega desarmada, pero el montaje es simple e incluye herramientas e instrucciones claras.</p>
        <p><strong>¿Precio?</strong></p>
          <p>Alrededor de 425,90€ en amazon.es</p>
        <Comprar
         urlAmazon={"https://amzn.to/40RqGsc"}/>

        </article>
      </section>
    </div>
  );
}

export default ErgoHuman;
