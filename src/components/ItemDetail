import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock.jsx';

export default function ItemDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductById(productId).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    }, [productId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-2">
                <div className="span-col-1">
                    <img src={product.img} alt="Imagen del producto" />
                </div>
                <div>
                    <h1>{product.name}</h1>
                    <p>{product.despcription}</p>
                    <p>Price: ${product.price}</p>
                    <p>Stock: {product.stock}</p>
                    
                    <div>
                        <h3>Tallas disponibles:</h3>
                        <ul>
                            {product.sizes.map((size, index) => (
                                <li key={index}>{size}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
