
import { Link } from "react-router-dom"
import carrito from "../UseCarrito/Carrito.jsx";

const item = (prod) => {
    const addToCart = carrito (state => state.addToCart);
    return (
        <>
            <div className="flex flex-col items-center my-[10px] mx-[10px]">
                <Link to={`/products/${prod.id}`}><img src={prod.img} alt="Imagen Productos"/></Link>

                <Link to={`/products/${prod.id}`}
                      className="text-[22px] font-bold my-[15px] tracking-[3px] uppercase text-[#2d3a4b] hover:text-[rgb(255,225,21)]">{prod.name}</Link>

                <h4 className="text-[18px] font-bold mb-[20px]">$ {prod.price}</h4>
                <button
                    className="mt-4 bg-brown-400 text-white px-4 py-2 rounded-lg hover:bg-brown-600"
                    onClick={() => addToCart(prod)}
                >
                    agregar al carrito
                </button>
            </div>
        </>
)
}
export default  item ;

