import './NuestraEmpresa.scss'
import { Link } from "react-router-dom"
const NuestraEmpresa = () => {

    return(
        <div className="Container my5">
             <div className='nuestra_titulo'>
            <h2>Nuestra Empresa</h2>
            <Link to ="/"> <h2>❌</h2></Link>
            </div>
            <hr className='linea_sep'/>

        <div className="nuestra-empresa">
        
            <p>En nuestra empresa, nos apasiona la moda y nos enfocamos en ofrecer las últimas tendencias en ropa y accesorios de alta calidad para hombres.</p>
            <p>Nos enorgullece contar con un equipo de diseñadores y expertos en moda que trabajan arduamente para seleccionar cuidadosamente cada pieza en nuestras colecciones y asegurarse de que estén a la vanguardia de las últimas tendencias.</p>
            <p>Además, nos preocupamos por brindar un servicio excepcional a nuestros clientes, ofreciéndoles una experiencia de compra inigualable. Desde el momento en que visitan nuestra tienda o navegan en nuestra tienda en línea, nuestro objetivo es hacer que se sientan como en casa.</p>
            <p>¡Gracias por confiar en nosotros para vestirte con estilo!</p>
        </div>
       </div>
    
        )
}
export default NuestraEmpresa


