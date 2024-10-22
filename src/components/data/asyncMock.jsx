export const products = [
    {
        id: 1,
        name: 'stone cup',
        price: 299,
        despcription: 'Lorem ipsum dolor sit amet',
        stock: 5,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-1.jpg'
    },
    {
        id: 2,
        name: 'gray bag',
        price: 300,
        despcription: 'Lorem ipsum dolor sit amet',
        stock: 5,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-2.jpg'
    },
    {
        id: 3,
        name: 'chiar',
        price: 310,
        despcription: 'Lorem ipsum dolor sit amet',
        stock: 5,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-3.jpg'
    },
    {
        id: 4,
        name: 'STool',
        price: 310,
        despcription: 'Lorem ipsum dolor sit amet',
        stock: 5,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-4.jpg'
    },
]

export const getProducts = () =>{
    return new Promise((res) =>{
        setTimeout(() =>{
            res(products);
        }, 2000);
    })
}