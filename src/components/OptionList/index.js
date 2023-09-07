import './OptionList.css'

const OptionList = ({teams, value, setTeam}) => {

  const handleChange = (e) => {
    setTeam(e.target.value)
  }

  return (
    <div className='option-list'>
      <label htmlFor="">Equipos</label>
      <select value={value} onChange={handleChange}>
        <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
        {
          teams.map((title, index) => <option key={index} value={title}>{title}</option>)
        }
      </select>
    </div>
  )
}

export default OptionList