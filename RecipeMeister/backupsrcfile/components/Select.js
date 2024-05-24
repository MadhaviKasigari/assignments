// Select Component
// Select Component
import React from "react";

const Select = () => {
    const options = ['Poultry','Vegetarian', 'Vegan', 'Meat', 'seafood'];
    const onOptionChangeHandler = (event) => {
      console.log("User Selected Value - ", event.target.value)
  }
    return (
    <>
    <div className="select-list">
      <span>
        <label>Type</label>
        <select onChange={onOptionChangeHandler}>
        {options.map((option, index) => {
                          return <option key={index} >
                              {option}
                          </option>
        })}  
        </select>
       </span>
    </div>
  </>
    )
};
export default Select;

