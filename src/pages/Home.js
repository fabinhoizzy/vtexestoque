import React from 'react'

export default function Home() {
    return (
        <div className="mensagemPrincipal">
            <h1>Bem-Vindo ao Sistema de Cadastrados</h1>
            <h1>
                <a href="./cliente">Clientes</a>
                -<a href="/produtos">Produtos</a>
            </h1>
            <img src="https://www.andrewebsite.com/imagens/banner_agencia_ecommerce_andrewebsite_cases_vtex.jpg" alt="banner Vtex" width="auto" />
        </div>
    )
}
