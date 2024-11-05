import {renderToString} from "react-dom/server.js";

export const products = [
    {
        id: 1,
        name: 'Manzana',
        price: 299,
        despcription: 'Lorem ipsum dolor sit amet',
        stock: 5,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-1.jpg',
        category: 'Frutas',

    },
    {
        id: 2,
        name: 'Zanahoria',
        price: 300,
        despcription: 'Lorem ipsum dolor sit amet',
        stock: 5,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-2.jpg',
        category: 'Verduras',

    },
    {
        id: 3,
        name: 'Aceite de oliva',
        price: 310,
        despcription: 'Lorem ipsum dolor sit amet',
        stock: 5,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-3.jpg',
        category: 'Aceites',
    },
    {
        id: 4,
        name: 'Porotos',
        price: 310,
        despcription: 'Lorem ipsum dolor sit amet',
        stock: 5,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-4.jpg',
        category: 'Legumbres',
    },
]

export const getProducts = () =>{
    return new Promise((res) =>{
        setTimeout(() =>{
            res(products);
        }, 2000);
    })
}

export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 2000);
    });
};

export const getProductByCategory = (category) => {
    return new Promise((res) => {
        const productosFiltrados = products.filter((product) => product.category === category);
        setTimeout(() => {
            res(productosFiltrados);
        }, 2000);
    });
};
