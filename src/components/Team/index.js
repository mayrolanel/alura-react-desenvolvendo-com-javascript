import Collaborator from '../Collaborator';
import './Team.css'

const Team = (props) => {
    return(
        props.collaborator.length > 0 && <section className='team' style={{backgroundColor: props.secondaryColor}}>
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
            <div className='collaborators'>
                {props.collaborator.map(contributor => <Collaborator primaryColor={props.primaryColor} name={contributor.name} key={contributor.name} imagem={contributor.imagem} office={contributor.office}/>)}
            </div>
            
            
        </section>
    )
}

export default Team;