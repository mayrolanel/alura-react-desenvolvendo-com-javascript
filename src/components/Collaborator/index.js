import './Collaborator.css'

const Collaborator = ({name, imagem, office, primaryColor}) => {
    return (
        <div className='collaborator'>
            <div className='header' style={{backgroundColor: primaryColor}}> 
                <img src={imagem} alt={name} />
            </div>
            <div className='cardFooter'>
                <h4>{name}</h4>
                <h5>{office}</h5>
            </div>
        </div>
        
    )
}

export default Collaborator;