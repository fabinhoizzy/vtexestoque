import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import './styles.css'

export default function Cliente() {
    const [nome, setNome] = useState('')
    const [ano, setAno] = useState('')
    const [email, setEmail] = useState('')
    const [estado, setEstado] = useState('')
    const [loja, setLoja] = useState([])

    useEffect(() => {
        const cliente = JSON.parse(localStorage.getItem('cliente'))
        if (cliente) {
            setLoja(cliente)
        }
    }, [])

    function handleSubmit(e) {
        e.preventDefault()

        let data = {
            nome, ano, email, estado
        }

        let newCliente = JSON.stringify([...loja || [], data])

        localStorage.setItem('cliente', newCliente)

        setLoja(JSON.parse(newCliente))

        toast.success('Cliente cadastrado com sucesso!')

    }
    return (
        <div className="container">
            <div>
                <h1 className="titulo">Clientes</h1>
            </div>
            <div className="containerForm">
                <form onSubmit={handleSubmit}>
                    <label>
                        Nome:<input 
                            value={nome} 
                            type="text" 
                            placeholder="Ex: Fábio"
                            onChange={e => setNome(e.target.value)} 
                            required/>
                    </label>
                    <label>
                        Data de Nascimento:<input 
                            value={ano}
                            type="text" 
                            placeholder="Ex: 00/00/0000"
                            onChange={e => setAno(e.target.value)}
                            required />
                    </label>
                    <label>
                        E-mail:<input 
                            value={email} 
                            type="email" 
                            placeholder="exemplo@exemplo"
                            onChange={e => setEmail(e.target.value)} 
                            required />
                    </label>
                    <label>
                        Estado:
                        <select id="estado" value={estado} onChange={e => setEstado(e.target.value)} required>
                            <option value="">Selecione</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="AC">Acre</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janairo</option>
                            <option value="RN">Rio Grande de Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônio</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        
                        </select>
                    </label>
                    <button className="botaoAdicionar" type="submit">Adicionar Cliente</button>
                </form>
            </div>
            <div className="tabelaContainer">
                <table>
                    <thead>
                        <tr className="formResultado">
                            <th>Nome</th>
                            <th>Data de Nascimento</th>
                            <th>E-mail</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loja.map((cliente, idx) => (
                            <tr key={idx}>
                                <td>{cliente.nome}</td>
                                <td>{cliente.ano}</td>
                                <td>{cliente.email}</td>
                                <td>{cliente.estado}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
