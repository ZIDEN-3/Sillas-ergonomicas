import { Link } from 'react-router-dom'
import '../styles/TiposDeSillas.css'

function TiposDeSillas ( { Nombre, altImagen, Pagina, srcImagen}) {
    return (
        <div className='TiposDeSillas'>
            <Link to={Pagina}><img className="TiposImagen" src={srcImagen} alt={altImagen}/></Link>
            <h2 className="TiposNombre">{Nombre}</h2>
        </div>
    )
}


export default TiposDeSillas;