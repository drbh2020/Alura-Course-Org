import { useState } from "react";
import "./Input.css";

const Input = ({ title, placeholder, required, value, setValue, type = "text" }) => {
  const placeholderModificado = `${placeholder}...`;

  console.log(type);

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className={`input ${ type === "color" ? "input-color" : ""}` }>
      <label htmlFor="">{title}</label>
      <input 
        type={type} 
        placeholder={placeholderModificado} 
        required={required} 
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
