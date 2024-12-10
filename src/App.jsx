<<<<<<< HEAD
import './App.css'
import HeaderComponent from './components/Header/Header';
import FooterComponent from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/Home';
import AboutPage from './components/About/About';
import ContactPage from './components/Contact/Contact';
import ProductsPage from './components/Products/Products';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ProductsCategory from './components/Category/Category';
import PaginaCarrito from "./components/Carrito/PaginaCarrito.jsx";


function App() {
    return (
        <>
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path='/products' element={<ProductsPage />} />
                    <Route path='/category/:categoryId' element={<ProductsCategory />} />
                    <Route path='/products/:productId' element={<ItemDetail />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/contact' element={<ContactPage />} />
                    <Route path='/carrito' element={<PaginaCarrito/>}/>
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </>
    );
}

export default App;
=======
/* eslint-disable */
import React, { useState } from 'react'
import './App.css'
import header from "./components/Header/Header.jsx"
import footer from "./components/Footer/Footer.jsx";
import imagen from "./components/imagen/imagen 1.png";



function App() {
  const [text,setText] = useState('Bienvenido');

    return (
        <>
              <header className="header">
                 <div className="logo">
                     <div className={"container-title"}>
                        <h1>Mi primer proyecto</h1>
                     </div>
                 </div>
                  <nav className={"nav"}>
                      <div className={"container-list"}>
                            <ul>
                                <li><a href={"#home"}>Inicio</a></li>
                                <li><a href={"#about"}>Acerca de</a></li>
                                <li><a href={"#services"}>Servicios</a></li>
                                <li><a href={"#contact"}>Contacto</a></li>
                            </ul>
                      </div>
                </nav>
              </header>

               <section>
                   <div className={"App"}>
                       <div className={"imagen"}>
                           <div className={"container imagen"}>
                                <img src="components/imagen/imagen%201.png" alt=""></img>
                           </div>
                       </div>
                   </div>
               </section>


                <footer className="footer">
                  <div className={"container container-footer"}>
                      <div className={"title-footer"}>
                          <ul>
                              <li><a href={"#home"}>Contacto</a></li>
                              <li><a href={"#home"}>Info</a></li>
                              <li><a href={"#home"}>Servicio</a></li>
                              <p>&copy; 2024 Mi Aplicación. Todos los derechos reservados.</p>
                          </ul>
                      </div>
                  </div>
                </footer>
        </>
    )
}

export default App;

>>>>>>> 7586f7d60cea32e1abfe70403978ce78da42eca8
