import { useState } from "react";
import "./InputText.css";

const InputText = ({ title, placeholder, required, value, setValue }) => {
  const placeholderModificado = `${placeholder}...`;

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className="input-text">
      <label htmlFor="">{title}</label>
      <input 
        type="text" 
        placeholder={placeholderModificado} 
        required={required} 
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputText;
