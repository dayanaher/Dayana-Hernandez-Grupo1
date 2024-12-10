<<<<<<< HEAD
import Item from "../Item/Item"
import { getProducts } from "../../data/asyncMock"
import { useEffect, useState } from "react"
import Loading from "../Loading/Loading";

// eslint-disable-next-line react/prop-types
export default function ItemList({ products: initialProducts }){
    const [products, setProducts] = useState(initialProducts || []);
    const [loading, setLoading] = useState(!initialProducts);

    useEffect(() => {
        if(!initialProducts) {
            getProducts().then((data) =>{
                setProducts(data)
                setLoading(false)
            });
        }else{
            setLoading(false)
        }
    }, [initialProducts]);

    return(
        <>
            {loading ?(
                <div>
                    <Loading />
                </div>
            ):(
                <div className="flex flex-wrap">
                    {products.map((prod) =>(
                        <Item {...prod} key={prod.id}/>
                    ))}
                </div>
            )}

        </>
    )
=======
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
>>>>>>> 7586f7d60cea32e1abfe70403978ce78da42eca8
}