export const products = [
    {
        id: 1,
        name: 'Manzana',
        price: 299,
        despcription: 'La manzana es una fruta con textura firme, jugosa, refrescante, de sabor amable y suave',
        stock: 5,
        img: '../public/imagen/Manzana.jpeg',
        category: 'Frutas',

    },
    {
        id: 2,
        name: 'Zanahoria',
        price: 300,
        despcription: 'Las zanahorias tiernas y de buen color tienen un sabor delicado y son ideales para comerlas crudas.',
        stock: 5,
        img: '../public/imagen/Zanahoria.jpeg',
        category: 'Verduras',

    },
    {
        id: 3,
        name: 'Aceite de oliva',
        price: 310,
        despcription: 'El aceite de oliva es el sabor de la tradición',
        stock: 5,
        img: '../public/imagen/Aceite de oliva.jpeg',
        category: 'Aceites',
    },
    {
        id: 4,
        name: 'Porotos',
        price: 310,
        despcription: 'Son una buena fuente de fibra dietética, otorgando una sensación de saciedad prolongada.',
        stock: 5,
        img: '../public/imagen/Porotos.jpeg',
        category: 'Legumbres',
    },
    {
        id: 5,
        name: 'Kiwi',
        price: 299,
        despcription: 'El kiwi es una fruta deliciosa, fresca y llena de nutrientes que combina un sabor único, ligeramente ácido y dulce',
        stock: 5,
        img: '../public/imagen/kiwi.jpeg',
        category: 'Frutas',

    },
    //asy
    {
        id: 6,
        name: 'Morrón',
        price: 300,
        despcription: 'El morrón es una opción saludable, versátil y llena de sabor para cualquier comida',
        stock: 5,
        img: '../public/imagen/Morrón.jpeg',
        category: 'Verduras',

    },
    {
        id: 7,
        name: 'Aceite de pepita de uva',
        price: 310,
        despcription: '',
        stock: 5,
        img: '../public/imagen/Aceite pepitas de uva.jpeg',
        category: 'Aceites',
    },
    {
        id: 8,
        name: 'Lentejas',
        price: 310,
        despcription: 'Son una buena fuente de fibra dietética, otorgando una sensación de saciedad prolongada.',
        stock: 5,
        img: '../public/imagen/Lentejas.jpeg',
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