import React from 'react'
import NavLink from './NavLink'
import AmazonQBtn from './AmazonQBtn'
import BtnNav from './BtnNav'
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-[#141f2e] text-white px-6 py-2 flex items-center justify-between relative">
            {/* Logo y menú izquierdo */}
            <div className="flex items-center">
                <div className="w-[48px] mr-4">
                    <a href="/">
                        <img src="/amazon-web-services.png" alt="AWS Logo" />
                    </a>
                </div>
                <AmazonQBtn />
                {/* Menú Desktop */}
                <nav className="hidden md:block">
                    <ul className="flex items-center">

                        <NavLink name="Productos" link="https://aws.amazon.com/es/products/?nc2=h_ql_prod" />
                        <NavLink name="Soluciones" link="https://aws.amazon.com/es/solutions/?nc2=h_ql_sol" />
                        <NavLink name="Precios" link="https://aws.amazon.com/es/pricing/?nc2=h_ql_pr" />
                        <NavLink name="Documentación" link="https://aws.amazon.com/documentation-overview/?nc2=h_ql_doc_do" />
                        <NavLink name="Aprender" link="https://aws.amazon.com/es/getting-started/?nc2=h_ql_le" hidden="hidden" />
                        <NavLink name="Red de socios" link="https://aws.amazon.com/es/partners/?nc2=h_ql_pn" hidden="hidden" />
                        <NavLink name="AWS Marketplace" link="https://aws.amazon.com/marketplace/?nc2=h_ql_mp" hidden="hidden" />
                    </ul>
                </nav>
            </div>

            {/* Menú derecho (desktop) */}
            <div className='right-menu flex'>


                <nav className="hidden lg:flex items-center">
                    <NavLink name="Acerca de AWS" link="https://aws.amazon.com/es/products/?nc2=h_ql_prod" />
                    <NavLink name="Contacto" link="https://aws.amazon.com/es/solutions/?nc2=h_ql_sol" />
                    <NavLink name="Iniciar sesión" link="https://aws.amazon.com/es/pricing/?nc2=h_ql_pr" />
                    <BtnNav />
                    <div className="p-1 border-2 rounded-full w-fit mx-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.5 5.5C5.5 7.98 7.52 10 10 10s4.5-2.02 4.5-4.5S12.48 1 10 1 5.5 3.02 5.5 5.5zm7 0a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 5 0zM4 19H2v-3.5C2 13.02 4.02 11 6.5 11h7c2.48 0 4.5 2.02 4.5 4.5V19h-2v-3.5a2.5 2.5 0 0 0-2.5-2.5h-7A2.5 2.5 0 0 0 4 15.5V19z"
                                fill="#fff"
                            />
                        </svg>
                    </div>
                </nav>

                {/* Botón Hamburguesa (móvil) */}
                <button
                    className="flex flex-col justify-center space-y-1 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="block w-6 h-0.5 bg-white"></span>
                    <span className="block w-6 h-0.5 bg-white"></span>
                    <span className="block w-6 h-0.5 bg-white"></span>
                </button>

                {/* Menú móvil */}
                {isOpen && (
                    <div className="absolute w-fit top-full right-3 px-3 py-1 rounded-b-sm bg-[#141f2e]">
                        <ul className="flex flex-col py-2 items-center space-y-2">
                            <NavLink name="Productos" link="https://aws.amazon.com/es/products/?nc2=h_ql_prod" hidden="block md:hidden" />
                            <NavLink name="Soluciones" link="https://aws.amazon.com/es/solutions/?nc2=h_ql_sol" hidden="block md:hidden" />
                            <NavLink name="Precios" link="https://aws.amazon.com/es/pricing/?nc2=h_ql_pr" hidden="block md:hidden" />
                            <NavLink name="Documentación" link="https://aws.amazon.com/documentation-overview/?nc2=h_ql_doc_do" hidden="block md:hidden" />
                            <NavLink name="Aprender" link="https://aws.amazon.com/es/getting-started/?nc2=h_ql_le" />
                            <NavLink name="Red de socios" link="https://aws.amazon.com/es/partners/?nc2=h_ql_pn" />
                            <NavLink name="AWS Marketplace" link="https://aws.amazon.com/marketplace/?nc2=h_ql_mp" />
                            <NavLink name="Acerca de AWS" link="https://aws.amazon.com/es/products/?nc2=h_ql_prod" hidden="block lg:hidden"  />
                            <NavLink name="Contacto" link="https://aws.amazon.com/es/solutions/?nc2=h_ql_sol" hidden="block lg:hidden"  />
                            <NavLink name="Iniciar sesión" link="https://aws.amazon.com/es/pricing/?nc2=h_ql_pr" hidden="block lg:hidden" />
                            <BtnNav hidden="block lg:hidden"/>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}