
import './Footer.scss'
export const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__container_left">
                       
                       <p><small>Todos los derechos @Reservados</small></p>
                 </div>
               
                 <div className='redes__iconos'>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
                 </div>
                        


            </div>
    </footer>

    )
}