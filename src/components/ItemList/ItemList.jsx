import Item from "../Item/Item"
import { getProducts } from "../../data/asyncMock"
import { useEffect, useState } from "react"

export default function ItemList(){
    const [products, setProducts] = useState([]);

    useEffect (() => {
        getProducts().then((data) =>{
            setProducts(data);
        });
    }, []);

    return(
        <div className="flex flex-wrap">
            {products.map((prod) =>(
                <Item {...prod} key={prod.id}/>
            ))}
        </div>
    )
}