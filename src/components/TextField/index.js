import './TextField.css';

const TextField = (props) => {
    return (
        <div className="text-field">
            <label htmlFor={props.id}>{props.label}</label>
            <input id={props.id} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField;