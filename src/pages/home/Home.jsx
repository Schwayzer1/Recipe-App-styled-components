import React from "react";
import { useState } from "react";
import Header from "../../components/header/Header";
import StyledHeader from "./Home.styled";
import RecipeCard from "./RecipeCard";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  return (
    <StyledHeader>
      <Header setRecipes={setRecipes} />
      <RecipeCard recipes={recipes} />
    </StyledHeader>
  );
};

export default Home;
