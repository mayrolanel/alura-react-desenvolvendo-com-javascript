import './Button.css'

const Button = (props)=> {
    return (
        <button className="button" data-test="btn-salvar">
            {props.children}
        </button>
    )
    
}

export default Button;