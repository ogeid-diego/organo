import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome: nome, 
            cargo: cargo, 
            imagem: imagem, 
            time: time
        })
        setNome("")
        setCargo("")
        setImagem("")
        setTime("")
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os campos abaixo para criar o card de colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)}/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" valor={cargo} aoAlterado={valor => setCargo(valor)}/>
                <CampoTexto label="Imagem" placeholder="Digite o endereco da sua imagem" valor={imagem} aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa  obrigatorio={true} label="Time" times={props.times} valor={time} aoAlterado={valor => setTime(valor)}/>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario