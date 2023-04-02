
import { Link } from "react-router-dom"

export const CartEmpty = () => {
    return (
        <div className="container my-5">
            <h2>No tienes productos agregados</h2>
            <hr/>
            <Link className="btn btn-primary" to="/">Volver</Link>
        </div>
    )
}