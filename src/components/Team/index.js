import Collaborator from "../Collaborator";
import hexToRgba from "hex-to-rgba";
import "./Team.css";

const Team = ({ data: { title, primaryColor, secondaryColor, id}, collaborators, deleteCollaborator, updateTeamColor, like  }) => {
  return (
    <>
      {collaborators.length > 0 && (
        <section className="team" style={{ backgroundColor: hexToRgba(primaryColor,0.4) }}>
          <input 
            type="color"
            className="input-color"
            value={primaryColor}
            onChange={(e) => {
              updateTeamColor(e.target.value, id)
            }}  
          />
          <h3 style={{ borderColor: primaryColor }}>{title}</h3>
          <div className="collaborators">
            {collaborators.map((collaborator, index) => (
              <Collaborator 
                data={collaborator} 
                key={index}
                primaryColor={primaryColor}
                deleteCollaborator={deleteCollaborator}
                like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Team;
