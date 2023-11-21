import './ColorField.css'

const ColorField = (props) => {

    const whenTyping = (event) => {
        props.whenUpdate(event.target.value) 
    }

    return (
        <div className="color-field">
            <label htmlFor={props.id}>{props.label}</label>
            <input type="color" value={props.valor} onChange={whenTyping} required={props.mandatory} id={props.id} placeholder={props.placeholder} data-test={props.label}/>
        </div>
    )


}

export default ColorField;