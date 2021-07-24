import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import './styles.css'

export default function Cliente() {
    const [tipo, setTipo] = useState('')
    const [preco, setPreco] = useState(10)
    const [categoria, setCategoria] = useState('')
    const [estoque, setEstoque] = useState(1)
    const [loja, setLoja] = useState([])

    useEffect(() => {
        const produtos = JSON.parse(localStorage.getItem('produtos'))
        if (produtos) {
            setLoja(produtos)
        }
    }, [])

    function handleSubmit(e) {
        e.preventDefault()

        let data = {
            tipo, preco, categoria, estoque
        }

        let newProdutos = JSON.stringify([...loja || [], data])

        localStorage.setItem('produtos', newProdutos)

        setLoja(JSON.parse(newProdutos))

        toast.success('Produto cadastrado com sucesso!')
    }
    return (
        <div className="container">
            <div>
                <h1>Produtos</h1>
            </div>
            <div className="containerForm">
                <form onSubmit={handleSubmit}>
                    <label>
                        Categoria:
                        <select id="categoria" value={categoria} onChange={e => setCategoria(e.target.value)} required>
                            <option value="">Selecione</option>
                            <option value="eletrodom">Eletrodomésticos</option>
                            <option value="notebooks">Notebooks</option>
                            <option value="celulares">Celulares</option>
                            <option value="livros">Livros</option>
                            <option value="moveis">Móveis</option>
                            <option value="eletronicos">Eletronicos</option>
                            <option value="esporte">Esportes</option>
                            <option value="games">Games</option>
                            <option value="moda">Modas</option>
                            <option value="informaticas">Informáticas</option>
                        </select>
                    </label>
                    <label>
                        Produto:<input 
                            type="text" 
                            value={tipo} 
                            onChange={e => setTipo(e.target.value)} 
                            required/>
                    </label>
                    <label>
                        Preço:<input 
                            type="text" 
                            value={preco} 
                            onChange={e => setPreco(e.target.value)} 
                            required/>
                    </label>
                    <label>
                        Quantidade:<input 
                            type="number" 
                            value={estoque} 
                            onChange={e => setEstoque(e.target.value)} 
                            required />
                    </label>
                    <button className="botaoAdicionar" type="submit">Adicionar Produto</button>
                </form>
            </div>
            <div className="tabelaContainer">
                <table>
                    <thead>
                        <tr>
                            <th>Categoria</th>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Estoque</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loja.map((produto, idx) => (
                            <tr key={idx}>
                                <td>{produto.categoria}</td>
                                <td>{produto.tipo}</td>
                                <td>{produto.preco}</td>
                                <td>{produto.estoque}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
