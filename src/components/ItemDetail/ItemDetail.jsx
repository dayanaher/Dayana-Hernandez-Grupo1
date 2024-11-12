import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock.jsx';

export default function ItemDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const [quantity, setQuantity] = useState(5);
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity -1)
        }
    }

    const incrementQuantity = () => {
        if (quantity < product.stock){
            setQuantity(quantity + 1)
        }
    }

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
                    <p className='text-[20px] my-[20px]'>Stock: {product.stock}></p>
                    <div className={'flex'}>
                        <button onClick={decrementQuantity}
                                className='rounded-[5px] hover:bg-slate-600 hover:text-[#ffffff] w-[50px] border-[1px] text-[20px] flex justify-center'> -
                        </button>
                        <p className='text-[20px] px-[10px]'>{quantity}</p>
                        <button onClick={incrementQuantity}
                                className='rounded-[5px] hover:bg-slate-600 hover:text-[#ffffff] w-[50px] border-[1px] text-[20px] flex justify-center'> +
                        </button>
                        <p className='text-[20px] my-[20px]'>Precio: ${product.price} por unidad</p>

                        <p className='text-[20px] my-[20px]'>Precio Total: ${precioTotal}</p>

                        <button
                            className='bg-[#171e27] text-[#ffffff] text-[20px] px-[20px] py-[5px] hover:bg-[#172625]'>Comprar
                        </button>


                    </div>
                </div>
            </div>
        </div>
    );
}