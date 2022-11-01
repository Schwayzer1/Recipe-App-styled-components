import React from "react";
import { useState } from "react";
import Header from "../../components/header/Header";
import StyledHeader from "./Home.styled";
import RecipeCard from "./RecipeCard";
import ReactLoading from "react-loading";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const createRecipeCards = () => {
    if (loading) {
      return <ReactLoading type={"spin"} color="#000" />;
    } else if (Boolean(recipes.length)) {
      return <RecipeCard recipes={recipes} />;
    }
  };
  return (
    <StyledHeader>
      <Header setRecipes={setRecipes} setLoading={setLoading} />
      {createRecipeCards()}
    </StyledHeader>
  );
};

export default Home;
