import { Fragment, useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import MyOrg from "./components/MyOrg";

function App() {
  const [showForm, setShowForm] = useState(true);

  // Ternario ---> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  const changeShowForm = () => {
    setShowForm(!showForm);
  }

  return (
    <div>
      <Header />
      {/* {showForm ? <Form /> : <></>} */}
      {/* {showForm ? <Form /> : <Fragment />} */}
      {showForm && <Form />}
      <MyOrg changeShowForm={changeShowForm}/>
    </div>
  );
}

export default App;
