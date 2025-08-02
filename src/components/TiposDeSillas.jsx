import { Link } from 'react-router-dom'
import '../styles/TiposDeSillas.css'

function TiposDeSillas ( { Nombre, altImagen, Pagina, srcImagen}) {
    return (
        <div className='TiposDeSillas'>
            <Link to={Pagina}><img className="TiposImagen" src={srcImagen} alt={altImagen}/></Link>
            <h3 className="TiposNombre">{Nombre}</h3>
        </div>
    )
}


export default TiposDeSillas;