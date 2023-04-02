
const Select = ({set}) =>{
    const handleSelect =(e) =>{
        set(e.target.value)
    }
    return(

   <select onChange={handleSelect} className="form-select border-primary m-2 w-50">
  <option value={"small"} className="border fw-bold rounded text-blue">S</option>
  <option value={"medium"} className="border fw-bold rounded text-blue">M</option>
  <option value={"large"} className="border fw-bold rounded text-blue">L</option>
</select>

      
    )
}
export default Select
