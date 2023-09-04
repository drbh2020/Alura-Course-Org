import OptionList from "../OptionList";
import InputText from "../InputText";
import Button from "../Button";
import "./Form.css";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [photo, setPhoto] = useState("");
  const [team, setTeam] = useState("");

  const handleSubmit = (e) => {
    console.log("Manjear el envio", e);
    e.preventDefault();

    let newCollaboratorData = {
      name,
      job,
      photo,
      team
    }
    console.log(newCollaboratorData)
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <InputText
          title="Nombre"
          placeholder="Ingresa nombre"
          required
          value={name}
          setValue={setName}
        />
        <InputText
          title="Puesto"
          placeholder="Ingresa puesto"
          required
          value={job}
          setValue={setJob}
        />
        <InputText
          title="Foto"
          placeholder="Ingresa enlace de foto"
          required
          value={photo}
          setValue={setPhoto}
        />
        <OptionList value={team} setTeam={setTeam}/>
        <Button>Crear</Button>
      </form>
    </section>
  );
};

export default Form;
