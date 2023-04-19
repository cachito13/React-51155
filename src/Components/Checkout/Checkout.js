import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Navigate } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../Firebase/config"






const Checkout = () => {
    const {cart, totalCarrito, vaciarCarrito} = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
            nombre: '',
            direccion: '',
            email: '',

    })
    const handleInputChange = (e) => {
       
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const orden = {
            cliente: values,
            items: cart,
            total: totalCarrito(),
            fyh: new Date()
        }

        
        const orderRef = collection(db, "orders")

        addDoc(orderRef, orden)
            .then((doc) =>{
                setOrderId(doc.id)
                vaciarCarrito()

            })
    }
//compra exitosa
    if (orderId) {
        return (
            <div className="container my-5">
                <h2>Tu compra se registró exitosamente!</h2>
                <hr/>
                <p>Guardá tu número de orden: <strong>{orderId}</strong></p>
            </div>
        )
    }
    if (cart.length === 0) {
        return <Navigate to="/"/>
    }
    return (
        <div className="container my-5">
            <h2>Ingresa tus datos</h2>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input
                    value={values.nombre}
                    type="text"
                    className="form-control my-2"
                    placeholder="Tu nombre"
                    onChange={handleInputChange}
                    name="nombre"
                />
                <input
                    value={values.direccion}
                    type="text"
                    className="form-control my-2"
                    placeholder="Tu direccion"
                    onChange={handleInputChange}
                    name="direccion"
                />
                <input
                    value={values.email}
                    type="text"
                    className="form-control my-2"
                    placeholder="Tu email"
                    onChange={handleInputChange}
                    name="email"
                />

                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Checkout