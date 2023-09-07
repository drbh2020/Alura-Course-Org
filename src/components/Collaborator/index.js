import "./Collaborator.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Collaborator = ({ data: { name, job, photo, team, id, fav}, primaryColor, deleteCollaborator, like }) => {
  return (
    <div className="collaborator">
      <AiFillCloseCircle className="delete" onClick={() => deleteCollaborator(id)}/>
      <div className="header" style={{ backgroundColor: primaryColor }}>
        <img src={photo} alt={name} />
      </div>
      <div className="info">
        <h4>{name}</h4>
        <h5>{job}</h5>
        {fav ? <AiFillHeart color="red" onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/>}
      </div>
    </div>
  );
};

export default Collaborator;
