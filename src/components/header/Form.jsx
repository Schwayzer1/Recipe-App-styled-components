import React from "react";
import Button, { Select } from "./Header.styled";
import axios from "axios";

const Form = ({ setRecipes }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { query, mealType } = e.target;
    try {
      const url = `https://api.edamam.com/api/recipes/v2?type=any&beta=false&q=${query.value}&app_id=bf4c6016&app_key=2b199b85186de3b220c45451443e8396&mealType=${mealType.value}`;
      axios(url).then((res) => {
        console.log(res.data.hits);
        setRecipes(res.data.hits);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="search" name="query" id="search" placeholder="Search" />
        <Button type="submit">Search</Button>
        <Select name="mealType" id="">
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
          <option value="teatime">Teatime</option>
        </Select>
      </form>
    </>
  );
};

export default Form;
