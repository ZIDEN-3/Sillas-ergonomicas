import '../styles/Comprar.css'; 
 
 function VerEn( { urlWebsite }) {
    return (
    <a href={urlWebsite} target="_blank" rel="nofollow noopener noreferrer">
  <button className='btn'>Ver en el sitio oficial</button>
</a>
          )

    
}

export default VerEn;