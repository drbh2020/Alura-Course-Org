import OptionList from "../OptionList";
import Input from "../Input";
import Button from "../Button";
import "./Form.css";
import { useState } from "react";

const Form = ({ teams, registerCollaborator, createTeam }) => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [photo, setPhoto] = useState("");
  const [team, setTeam] = useState("");

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Manjear el envio", e);

    let newCollaboratorData = {
      name,
      job,
      photo,
      team,
    };
    registerCollaborator(newCollaboratorData);
  };

  const handleNewTeam = (e) => {
    e.preventDefault();
    createTeam({title, primaryColor: color});
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Input
          title="Nombre"
          placeholder="Ingresa nombre"
          required
          value={name}
          setValue={setName}
        />
        <Input
          title="Puesto"
          placeholder="Ingresa puesto"
          required
          value={job}
          setValue={setJob}
        />
        <Input
          title="Foto"
          placeholder="Ingresa enlace de foto"
          required
          value={photo}
          setValue={setPhoto}
        />
        <OptionList teams={teams} value={team} setTeam={setTeam} />
        <Button>Crear</Button>
      </form>
      <form onSubmit={handleNewTeam}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <Input
          title="Titulo"
          placeholder="Ingresa titulo"
          required
          value={title}
          setValue={setTitle}
        />
        <Input
          title="Color"
          placeholder="Ingresa el color en hex"
          required
          value={color}
          setValue={setColor}
          type="color"
        />
        <Button>Regsitrar Equipo</Button>
      </form>
    </section>
  );
};

export default Form;
