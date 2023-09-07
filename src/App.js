import { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import MyOrg from "./components/MyOrg";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [collaborators, setCollaborators] = useState([
    {
      id: uuidv4(),
      team: "Front End",
      photo: "https://github.com/harlandlohora.png",
      name: "Harland Lohora",
      job: "Instructor",
      fav: false,
    },
    {
      id: uuidv4(),
      team: "Programación",
      photo: "https://github.com/drbh2020.png",
      name: "Diego Berastain (Gato programador)",
      job: "Desarrollador de software e instructor",
      fav: true,
    },
    {
      id: uuidv4(),
      team: "UX y Diseño",
      photo: "https://github.com/JeanmarieAluraLatam.png",
      name: "Jeanmarie Quijada",
      job: "Instructora de Alura Latam",
      fav: false,
    },
    {
      id: uuidv4(),
      team: "Programación",
      photo: "https://github.com/christianpva.png",
      name: "Christian Velasco",
      job: "Head de Alura e Instructor",
      fav: false,
    },
    {
      id: uuidv4(),
      team: "Innovación y Gestión",
      photo: "https://github.com/JoseDarioGonzalezCha.png",
      name: "José Gonzales",
      job: "Dev FullStack",
      fav: false,
    },
  ]);
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      title: "Programación",
      primaryColor: "#57C275",
      secondaryColor: "#D9F7E9",
    },
    {
      id: uuidv4(),
      title: "Front End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      id: uuidv4(),
      title: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      id: uuidv4(),
      title: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      id: uuidv4(),
      title: "UX y Diseño",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      id: uuidv4(),
      title: "Móvil",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      id: uuidv4(),
      title: "Innovación y Gestión",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ]);

  // Ternario ---> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  const changeShowForm = () => {
    setShowForm(!showForm);
  };

  // Registrar colaborador
  const registerCollaborator = (collaborator) => {
    console.log("Nuevo colaborador", collaborator);
    setCollaborators([...collaborators, collaborator]);
  };

  // Eliminar colaborador
  const deleteCollaborator = (id) => {
    console.log("Eliminar colaborador", id);
    const newCollaborators = collaborators.filter((collaborator) => collaborator.id !== id);
    setCollaborators([...newCollaborators]);
  };

  // Actualizar colo de equipo
  const updateTeamColor = (color, id) => {
    console.log("Actualizar: ", color, id);
    const updatedTeams = teams.map((team) => {
      if (team.id === id) {
        team.primaryColor = color;
      }
      return team;
    });
    setTeams(updatedTeams);
  };

  const createTeam = (newTeam) => {
    console.log(newTeam);
    setTeams([...teams, { ...newTeam, id: uuidv4() }]);
  };

  const like = (id) => {
    console.log("like", id);
    const updatedCollaborators = collaborators.map((collaborator) => {
      if (collaborator.id === id) collaborator.fav = !collaborator.fav;
      return collaborator;
    });
    setCollaborators([...updatedCollaborators]);
  };

  //mi lista de equipos

  return (
    <div>
      <Header />
      {/* {showForm ? <Form /> : <></>} */}
      {/* {showForm ? <Form /> : <Fragment />} */}
      {showForm && (
        <Form
          teams={teams.map((team) => team.title)}
          registerCollaborator={registerCollaborator}
          createTeam={createTeam}
        />
      )}

      <MyOrg changeShowForm={changeShowForm} />

      {teams.map((team) => (
        <Team
          key={team.title}
          data={team}
          collaborators={collaborators.filter((collaborator) => collaborator.team === team.title)}
          deleteCollaborator={deleteCollaborator}
          updateTeamColor={updateTeamColor}
          like={like}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
