import { MdOutlineClose, MdFavorite, MdFavoriteBorder   } from 'react-icons/md';
import './Collaborator.css'

const Collaborator = ({name, imagem, office, color, fromDelete, collaborator, whenFavorite}) => {

    function favorite() {
        whenFavorite(collaborator.id)
    }

    const propFavorite = {
        size: 25,
        onClick: favorite
    }

    return (
        <div className='collaborator'>
            <MdOutlineClose 
                className="delete" 
                onClick={()=> fromDelete(collaborator.id)}
                size={25}
            />
            <div className='header' style={{backgroundColor: color}}> 
                <img src={imagem} alt={name} />
            </div>
            <div className='cardFooter'>
                <h4>{name}</h4>
                <h5>{office}</h5>
                <div className='favorite'>
                    {collaborator.favorite 
                        ? <MdFavorite {...propFavorite} color='#FF0000'/>
                        : <MdFavoriteBorder {...propFavorite} />
                    }
                </div>
            </div>
        </div>
        
    )
}

export default Collaborator;