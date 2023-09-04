import { useState } from "react";
import "./MyOrg.css";
const MyOrg = ({changeShowForm}) => {
  //estado - hooks
  //useState
  //useState()
  //const [nombreVariable, funcionActualiza] = useState(valorInicial)

  /*const [show, setShow] = useState(true);

  const handleClick = () => {
    console.log("Mostrar/Ocultar elemento", show);
    setShow(!show);
  } */

  return (
    <section className="orgSection">
      <h3 className="title">Mi organización</h3>
      <img src="/img/add.png" alt="add" onClick={changeShowForm}/>
    </section>
  );
};

export default MyOrg;