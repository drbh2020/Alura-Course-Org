import './OptionList.css'

const OptionList = ({value, setTeam}) => {

  const equipos = [
    "Programación",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión",
  ]

  const handleChange = (e) => {
    setTeam(e.target.value)
  }

  return (
    <div className='option-list'>
      <label htmlFor="">Equipos</label>
      <select value={value} onChange={handleChange}>
        <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
        {
          equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)
        }
      </select>
    </div>
  )
}

export default OptionList