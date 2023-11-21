import Collaborator from '../Collaborator';
import './Team.css'
import hexToRgba from 'hex-to-rgba';


const Team = (props) => {
    return(
        props.collaborator.length > 0 && <section className='team' style={{backgroundColor: hexToRgba(props.color, '0.2')}}>
            <input onChange={event => props.changeColor(event.target.value, props.team.id )} value={props.color} type='color' className='inputColor' />
            <h3 style={{borderColor: props.color}}>{props.name}</h3>
            <div className='collaborators'>
                {props.collaborator.map(contributor => {
                    return (
                        <Collaborator 
                            color={props.color} 
                            name={contributor.name} 
                            key={contributor.name} 
                            imagem={contributor.imagem} 
                            office={contributor.office} 
                            fromDelete={props.fromDelete} collaborator={contributor}
                            whenFavorite={props.whenFavorite}
                        />
                    );
                })}
            </div>
            
            
        </section>
    )
}

export default Team;