import './TextField.css';

const TextField = (props) => {

    
    const whenTyping = (event) => {
        props.whenUpdate(event.target.value) 
    }

    return (
        <div className="text-field">
            <label htmlFor={props.id}>{props.label}</label>
            <input value={props.valor} onChange={whenTyping} required={props.mandatory} id={props.id} placeholder={props.placeholder} data-test={props.label}/>
        </div>
    )
}

export default TextField;