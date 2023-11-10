import './Combobox.css'

const Combobox = (props) => {

    const whenTyping = (event) => {
        props.whenUpdate(event.target.value) 
    }

    return(
        <div className="combobox">
            <label>{props.label}</label>
            <select required={props.mandatory} onChange={whenTyping} value={props.valor} data-test={props.label}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
            
        </div>
    )
}

export default Combobox;