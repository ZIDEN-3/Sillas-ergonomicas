import Comprar from '../components/Comprar';
import Steelcaseseries from '../images/steelcaseseries1.jpg';
import '../styles/HermanMiller.css'

function SteelCaseSeries () {
   return (
   
   <div>
        <h1>Steelcase Series 1 </h1>
         <div className='containerImg'><img src={Steelcaseseries} /></div>
         <Comprar
         urlAmazon={"https://amzn.to/3HmqDxI"}/>
<article className='caracteristicas'>

  <h2>La Steelcase Series 1 ofrece rendimiento ergonómico sin compromisos y es una de las mejores sillas ergonómicas calidad precio</h2>

  <p>
    La <strong>Steelcase Series 1</strong> es una de las sillas ergonómicas más completas dentro de su rango de precio. Está diseñada para personas que pasan largas horas frente al escritorio y necesitan un respaldo real para su salud postural, sin tener que invertir una fortuna. Combina <strong>tecnología ergonómica de verdad</strong>, ajustes personalizables y un diseño compacto que encaja incluso en espacios reducidos.
  </p>

  <p>
    No se trata solo de comodidad: esta silla está pensada para mejorar tu rendimiento, reducir la fatiga diaria y prevenir dolores comunes en la espalda baja, hombros o cuello. A diferencia de muchas sillas que dicen ser ergonómicas pero no ofrecen soporte activo, la Series 1 incluye tecnologías desarrolladas por Steelcase tras décadas de investigación en entornos de trabajo reales.
  </p>

  <h2>Soporte lumbar inteligente con tecnología LiveBack™</h2>
  <p>
    El respaldo de la Steelcase Series 1 incluye el sistema <strong>LiveBack™</strong>, que se flexiona de forma dinámica según tus movimientos. ¿Te inclinás hacia adelante? ¿Cambiás de postura? La silla lo detecta y se adapta automáticamente para seguir sosteniendo tu columna, especialmente en la zona lumbar.
  </p>
  <p>
    Este tipo de soporte activo ayuda a mantener la <strong>curvatura natural de la columna</strong>, reduce el deslizamiento pélvico y previene el dolor lumbar, incluso después de jornadas largas.
  </p>

  <h2>Asiento cómodo que cuida la circulación</h2>
  <p>
    Su asiento está fabricado con <strong>espuma de alta densidad</strong>, diseñada para distribuir el peso de manera uniforme y evitar puntos de presión en los muslos. Además, el borde frontal del asiento tiene un diseño flexible que evita comprimir las piernas, algo esencial para una buena circulación.
  </p>
  <p>
    La función de <strong>reclinación con ajuste de tensión y bloqueo</strong> te permite elegir entre trabajar en posición activa o relajarte sin perder soporte.
  </p>

  <h2>Reposabrazos 4D: soporte total para tus brazos</h2>
  <p>
    Esta silla cuenta con <strong>reposabrazos ajustables en 4 direcciones</strong>: altura, anchura, profundidad y rotación. Ya sea que estés tipeando, usando el mouse o simplemente descansando, podés personalizar el ángulo perfecto para evitar tensión en los hombros y muñecas.
  </p>
  <Comprar/>
  </article>
  <article className='caracteristicas'>
  <h2>Beneficios ergonómicos comprobados</h2>
  <p>
    La Steelcase Series 1 no es solo una silla bonita: está diseñada para mejorar tu salud y productividad. Algunos de sus beneficios más destacados incluyen:
  </p>
  <ul className="ul1">
    <li className="lista1">Mejor alineación del cuerpo para trabajar sin molestias.</li>
    <li className="lista1">Reduce la tensión acumulada en hombros y cuello.</li>
    <li className="lista1">Ideal para tareas prolongadas en computadora.</li>
  </ul>
   <Comprar
         urlAmazon={"https://amzn.to/3HmqDxI"}/>
</article>
  <article className='caracteristicas'>
  <h2>Fácil de ajustar y personalizar</h2>
  <p>
    La Steelcase Series 1 es fácil de configurar para adaptarse a tus necesidades específicas. Con un simple giro o palanca, podés ajustar la altura del asiento, la inclinación del respaldo y la posición de los reposabrazos. Esto la convierte en una excelente opción tanto para oficinas compartidas como para uso personal.
  </p>
  <h2>Diseño moderno, compacto y resistente</h2>
  <p>
    La Steelcase Series 1 tiene un <strong>diseño minimalista y profesional</strong> que combina bien con cualquier entorno de oficina o escritorio en casa. Su estructura es compacta pero robusta, ideal si tenés poco espacio pero no querés renunciar a la calidad.
  </p>
  <p>
    Está fabricada con <strong>materiales duraderos y sostenibles</strong>, respaldada por la reputación de Steelcase como líder mundial en mobiliario ergonómico. Además, está disponible en múltiples colores (dependiendo del distribuidor), por lo que podés adaptarla a tu estilo sin sacrificar funcionalidad.
  </p>

  <h2>¿Vale la pena?</h2>
  <p>
    Si buscás una silla ergonómica real que no sea simplemente "bonita", la Steelcase Series 1 es una de las mejores opciones del mercado. Ofrece un <strong>balance excelente entre calidad, confort, personalización y diseño</strong>. Una inversión inteligente que tu cuerpo agradecerá cada día.
  </p>
  <Comprar urlAmazon={"https://amzn.to/3HmqDxI"}/>

  </article>

    </div>)
}

export default SteelCaseSeries;