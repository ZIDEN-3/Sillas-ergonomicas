import '../styles/Comprar.css'; 
 
 function Comprar( { urlAmazon }) {
    return (
    <a href={urlAmazon} target="_blank" rel="nofollow noopener noreferrer">
  <button className='btn'>Comprar en Amazon</button>
</a>
          )

    
}

export default Comprar;