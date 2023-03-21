import './Contacto.scss'
import  TextControlsExample  from "../../helpers/contacto_function"
import { Link } from "react-router-dom"
const Contacto = () => {
    
    return(
        <div>
            <div className='contacto_titulo'>
            <h2>Contacto</h2>
            <Link to ="/"> <h2>❌</h2></Link>
            
            </div>
            <hr className='linea_sep'/>
            <TextControlsExample/>
       </div>
    
        )
        
}
export default Contacto



