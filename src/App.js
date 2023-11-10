import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const teams = [
    {
      name: "Programação",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9"
    },
    {
      name: "Front-end",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF"
    },
    {
      name: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2"
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8"
    },
    {
      name: "Ux e Design",
      primaryColor: "#D86EBF",
      secondaryColor: "#FAE5F5"
    },
    {
      name: "Mobile",
      primaryColor: "#FEBA05",
      secondaryColor: "#FFF5D9"
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF"
    }
  ]

  const [collaborators, setcollaborator] = useState([])

  const toTheNewCollaboratorAdded = (collaborator) => {
    
    setcollaborator([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner />
      <Form team={teams.map(team => team.name)} toCollaboratorRegistered={collaborator => toTheNewCollaboratorAdded(collaborator)}/>
      {teams.map(team => <Team 
        key={team.name} 
        name={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor}
        collaborator={collaborators.filter(colaborador => colaborador.team === team.name)}
      />)}

      <Footer />
      
    </div>
  );
}

export default App;
