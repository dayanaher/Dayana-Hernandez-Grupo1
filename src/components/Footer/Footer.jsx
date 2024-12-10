<<<<<<< HEAD
/* eslint-disable */
import React from "react";

    export default function FooterComponent() {
        return (
            <footer className="bg-green-600 py-[60px] w-[100vw]">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <h3 className="text-[#ffffff] text-lg font-bold">Contacto</h3>
                            <p className="text-[#bbbbbb]">Correo: contacto@Misfrutasyverduras.com</p>
                            <p className="text-[#bbbbbb]">Correo: Dayananaandre@alumnos.ulagos.cl</p>
                            <p className="text-[#bbbbbb]">Teléfono: +56 9 56327718</p>
                        </div>
                        <div>
                            <h3 className="text-[#ffffff] text-lg font-bold">Enlaces</h3>
                            <ul className="text-[#bbbbbb] space-y-2">
                                <li><a href="/" className="hover:underline">Inicio</a></li>
                                <li><a href="/products" className="hover:underline">Productos</a></li>
                                <li><a href="/about" className="hover:underline">Acerca de</a></li>
                                <li><a href="/contact" className="hover:underline">Contactos</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[#ffffff] text-lg font-bold">Información Legal</h3>
                            <ul className="text-[#bbbbbb] space-y-2">
                                <li><a href="/privacy" className="hover:underline">Política de Privacidad</a></li>
                                <li><a href="/terms" className="hover:underline">Términos y Condiciones</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-6 mb-8">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#ffffff] hover:text-[#bbbbbb]">
                            <i className="fab fa-facebook text-2xl"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#ffffff] hover:text-[#bbbbbb]">
                            <i className="fab fa-twitter text-2xl"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#ffffff] hover:text-[#bbbbbb]">
                            <i className="fab fa-instagram text-2xl"></i>
                        </a>
                    </div>
                    <div className="text-center text-[#bbbbbb]">
                        <p>&copy;  2024 Mi Aplicación. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        );
    }



=======
/* eslint-disable */
import React from "react";


function Footer() {
    return (
        <footer className="footer">
            <div className={"container container footer"}>

                      <p>&copy; 2024 Mi Aplicación. Todos los derechos reservados.</p>
            </div>

        </footer>
    );
}

export default Footer;
>>>>>>> 7586f7d60cea32e1abfe70403978ce78da42eca8
