import { Link } from 'react-router-dom'
import '../styles/TiposDeSillas.css'

function TiposDeSillas ( { Nombre, altImagen, Pagina, srcImagen}) {
    return (
       <Link to={Pagina}> <div className='TiposDeSillas'>
            <img className="TiposImagen" src={srcImagen} alt={altImagen}/>
            <h2 className="TiposNombre">{Nombre}</h2>
        </div></Link>
    )
}


export default TiposDeSillas;