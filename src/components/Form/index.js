import TextField from "../TextField"
import './Form.css'

const Form = () => {
    return (
        <section className="form">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField id="nome" label="Nome" placeholder="Digite seu nome" />
                <TextField id="cargo" label="Cargo" placeholder="Digite seu cargo" />
                <TextField id="endereco-imagem" label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )
}

export default Form