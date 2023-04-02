
const SelectColor = ({set}) =>{
    const handleColor =(e) =>{
        set(e.target.value)
    }
    return(
    
          <select onChange={handleColor} className="form-select border-primary m-2 w-50">
          <option value={"blanco"} className="border fw-bold rounded text-blue">Blanco</option>
          <option value={"rojo"} className="border fw-bold rounded text-blue">Rojo</option>
          <option value={"negro"} className="border fw-bold rounded text-blue">Negro</option>
          
      </select>
    )
}
export default SelectColor
