import { useState } from 'react';
import Button from "../Button";
import Combobox from "../Combobox";
import TextField from "../TextField";
import ColorField from '../ColorField';
import './Form.css';

const Form = (props) => {

    const [name, setName ] = useState('')
    const [office, setOffice ] = useState('')
    const [imagem, setImagem ] = useState('')
    const [team, setTeam ] = useState('')
    const [nameTeam, setNameTeam ] = useState('')
    const [colorTeam, setColorTeam ] = useState('')

    const whenSaving = (event) => {
        event.preventDefault()
        props.toCollaboratorRegistered({
            name, 
            office, 
            imagem, 
            team
        })
        setName('')
        setOffice('')
        setImagem('')
        setTeam('')
    }

    return (
        <section className="form">
            <form onSubmit={whenSaving}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    mandatory={true} 
                    id="nome" 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={name} 
                    whenUpdate={ valor => setName(valor)}
                />
                <TextField 
                    mandatory={true} 
                    id="cargo" 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={office} 
                    whenUpdate={ valor => setOffice(valor)}
                />
                <TextField 
                    id="endereco-imagem" 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem} 
                    whenUpdate={ valor => setImagem(valor)}
                />
                <Combobox 
                    mandatory={true} 
                    itens={props.team} 
                    label="Time"
                    valor={team} 
                    whenUpdate={ valor => setTeam(valor)}
                />
                <Button text="Criar Card">Criar Card</Button>
            </form>
            <form onSubmit={(event) => { 
                event.preventDefault();
                props.registerTeam({name: nameTeam, color: colorTeam})
            }}>
                <h2>Preencha os dados para criar o time</h2>
                <TextField 
                    mandatory={true} 
                    id="nome" 
                    label="Nome" 
                    placeholder="Digite nome do time"
                    valor={nameTeam} 
                    whenUpdate={ valor => setNameTeam(valor)}
                />
                <ColorField 
                    mandatory={true} 
                    id="cor" 
                    label="Cor" 
                    placeholder="Escolha cor do time"
                    valor={colorTeam} 
                    type='color'
                    whenUpdate={ valor => setColorTeam(valor)}
                />
                
                <Button text="Criar Card">Criar Time</Button>
            </form>
        </section>
    )
}

export default Form