<<<<<<< HEAD
import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export default function Item({id, name, price, img}){

    return(
        <div className="flex flex-col items-center my-[10px] mx-[10px]">
            <Link to={`/products/${id}`}><img src={img} alt="Imagen Productos" /></Link>

            <Link to={`/products/${id}`} className="text-[22px] font-bold my-[15px] tracking-[3px] uppercase text-[#2d3a4b] hover:text-[rgb(255,225,21)]">{name}</Link>

            <h4 className="text-[18px] font-bold mb-[20px]">$ {price}</h4>
        </div>
    )
=======
export default function Item({id, name, price, img}){

    return(
        <div className="flex flex-col items-center my-[20px]">
            <img src={img} alt="Imagen Productos" />
            <h3 className="text-[22px] font-bold my-[15px] tracking-[3px] uppercase text-[#2d3a4b] hover:text-[rgb(255,225,21)]">{name}</h3>
            <h4 className="text-[18px] font-bold mb-[20px]">{price}</h4>
        </div>
    )
>>>>>>> 7586f7d60cea32e1abfe70403978ce78da42eca8
}