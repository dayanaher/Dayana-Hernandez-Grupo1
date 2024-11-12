// HOOKS DE REACT PARA USESTATE Y EFFECT
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// IMPORTO FUNCION PARA OBTENER LOS PRODUCTOS POR CATEGORIAS
import { getProductByCategory } from "../../data/asyncMock";

// IMPORTO ITEMLIST
import ItemList from "../ItemList/ItemList";

// IMPORTO EL LOADING
import Loading from "../Loading/Loading";

export default function ProductsCategory(){
    const [loading, setLoading] = useState(true);

    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();

    useEffect (() => {
        setLoading(true);
        getProductByCategory(categoryId)
            .then((data) => setProducts(data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [categoryId]);


    return(
        <div className="container mx-auto max-w-[1170px]">
            {loading ?(
                <div>
                    <Loading />
                </div>
            ):(

                <ItemList products={products}/>
            )}
        </div>
    )
};