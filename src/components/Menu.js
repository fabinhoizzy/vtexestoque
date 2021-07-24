import React from 'react'
import { Link } from "react-router-dom";
import './styles.css'

export default function Header() {
    return (
        <header className="header">
            <a href="/" className="link active">
                <p>Loja Vtex</p> 
            </a>

            <nav>
                <ul className="menu">
                   <li> 
                       <a href="/">
                        <Link on to="/" className="link active">
                            #Página Inicial
                        </Link> 
                        </a>
                    </li>
                    <li>
                        <a href="/">
                        <Link id="clienteLink" on to="/cliente" className="link">
                            #Clientes
                        </Link> 
                        </a>
                    </li>

                    <li>
                        <a href="/">
                        <Link id="produtoLink" to="/produtos" className="link">
                            #Produtos
                         </Link> 
                         </a>
                    </li>
                </ul>

            </nav>

        </header>
    )
}
