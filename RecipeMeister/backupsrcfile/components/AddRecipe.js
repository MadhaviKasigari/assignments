// AddRecipe Component
import React, { useState } from "react";
import InputTags from "./InputTags";
import Select from "./Select";
import Text from "./Text";
import List from "./List";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { getByTitle } from "@testing-library/react";

const AddRecipe = (onAdd, onExit) => {
  
  const [state, setState] = React.useState({
    title: "",
    description: "",
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });

    console.log("Title:", state.title);

    console.log("Description:", state.description);
  }
  const onSaveHandler = () => {
    const validate = Object.values(state)
      .map((elem) => {
        if (typeof elem === "string" && elem === "") {
          return false;
        }
        if (
          typeof elem === "object" &&
          Array.isArray(elem) &&
          elem.length === 0
        ) {
          return false;
        }
        return true;
      })
      .reduce((prev, curr) => prev && curr);
    if (validate) {
      onAdd({ ...state, id: uuidv4() });
    }
  };
  const navigate = useNavigate();
  const handleImageClick = (onExit) => {
    console.log(onExit);
    navigate(`/`);
  };
  return (
    <>
      <div className="add-recipe">
        <h1>Add a Recipe</h1>
        <div className="input-box">
          <label for="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            value={state.title}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <label for="description">Description</label>
          <input
            type="text"
            name="description"
            value={state.description}
            onChange={handleChange}
          />
        </div>
        <InputTags />
        {/* <InputTags
          label="Keywords"
          onUpdate={(tags) =>
            dispatch({ type: "update", payload: { keywords: tags } })
          }
          value={state.keywords}
        /> */}
        <Select />
        <List />
        <Text />
        <div className="buttons">
          <button className=" btn small-btn" onClick={onSaveHandler}>
            Save
          </button>
          <button
            className=" btn btn-black small-btn"
            onClick={() => handleImageClick(onExit)}
          >
            Exit
          </button>
        </div>
      </div>
    </>
  );
};
export default AddRecipe;
