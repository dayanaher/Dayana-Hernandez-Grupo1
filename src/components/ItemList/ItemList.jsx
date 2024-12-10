
import Item from "../Item/Item";
import { getProducts } from "../../data/asyncMock.jsx";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading.jsx";

 function ItemList ({ products: initialProducts }) {

     const [products, setProducts] = useState(initialProducts || []);
     const [loading, setLoading] = useState(!initialProducts);

     useEffect(() => {
         if (!initialProducts) {
             getProducts().then((data) => {
                 setProducts(data)
                 setLoading(false)
             });
         } else {
             setLoading(false)
         }
     }, [initialProducts]);

     return (
         <>
             {loading ? (
                 <div>
                     <Loading/>
                 </div>
             ) : (
                 <div className="flex flex-wrap">
                     {products.map((prod) => (
                         <Item {...prod} key={prod.id}/>
                     ))}
                 </div>
             )}

         </>
     );
 }

export default ItemList;
