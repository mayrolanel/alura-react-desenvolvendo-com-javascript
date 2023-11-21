import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: "Programação",
      color: "#57C278",
    },
    {
      id: uuidv4(),
      name: "Front-end",
      color: "#82CFFA",
    },
    {
      id: uuidv4(),
      name: "Data Science",
      color: "#A6D157",
    },
    {
      id: uuidv4(),
      name: "Devops",
      color: "#E06B69",
    },
    {
      id: uuidv4(),
      name: "Ux e Design",
      color: "#D86EBF",
    },
    {
      id: uuidv4(),
      name: "Mobile",
      color: "#FEBA05",
    },
    {
      id: uuidv4(),
      name: "Inovação e Gestão",
      color: "#FF8A29",
    }
  ])

  const initial = [
    {
      id: uuidv4(),
      favorite: false,
      name: 'JULIANA AMOASEI',
      office: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'DANIEL ARTINE',
      office: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'GUILHERME LIMA',
      office: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'PAULO SILVEIRA',
      office: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'JULIANA AMOASEI',
      office: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'DANIEL ARTINE',
      office: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'GUILHERME LIMA',
      office: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'PAULO SILVEIRA',
      office: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'JULIANA AMOASEI',
      office: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'DANIEL ARTINE',
      office: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'GUILHERME LIMA',
      office: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'PAULO SILVEIRA',
      office: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'JULIANA AMOASEI',
      office: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'DANIEL ARTINE',
      office: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'GUILHERME LIMA',
      office: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'PAULO SILVEIRA',
      office: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'JULIANA AMOASEI',
      office: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'DANIEL ARTINE',
      office: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'GUILHERME LIMA',
      office: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'PAULO SILVEIRA',
      office: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'JULIANA AMOASEI',
      office: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'DANIEL ARTINE',
      office: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'GUILHERME LIMA',
      office: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'PAULO SILVEIRA',
      office: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[5].name
    },
  ]

  const [collaborators, setcollaborator] = useState(initial)

  const toTheNewCollaboratorAdded = (collaborator) => {
    setcollaborator([...collaborators, collaborator])
  }

  function deleteCollaborator(id) {
    setcollaborator(collaborators.filter(colab => colab.id !== id))
  }

  function changeTeamColor(color, id){
    setTeams(teams.map(item => {
      if(item.id === id) {
        item.color = color
      }
      return item
    }))
  }

  const registerTeam = (newTeam) => {
    setTeams([...teams, { ...newTeam, id: uuidv4()}])
  }

  const toggleFavorite = (id) => {
    setcollaborator(collaborators.map(colab => {
      if(colab.id === id) colab.favorite = !colab.favorite;
      return colab;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form 
        registerTeam={registerTeam}
        team={teams.map(team => team.name)} 
        toCollaboratorRegistered={collaborator => toTheNewCollaboratorAdded(collaborator)}
      />
      {teams.map(team => <Team 
        changeColor={changeTeamColor}
        key={team.name} 
        name={team.name} 
        team={team}
        color={team.color} 
        collaborator={collaborators.filter(colaborador => colaborador.team === team.name)}
        fromDelete={deleteCollaborator}
        whenFavorite={toggleFavorite}
      />)}

      <Footer />
      
    </div>
  );
}

export default App;
