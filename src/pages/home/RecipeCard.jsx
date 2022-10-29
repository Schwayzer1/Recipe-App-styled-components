import React from "react";
import { useNavigate } from "react-router-dom";
import { RecipeDiv, RecipeCards, Button } from "./Home.styled";

const RecipeCard = ({ recipes }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    navigate("/details");
  };
  return (
    <RecipeDiv>
      {recipes.map((recipe) => {
        const { uri, images, label } = recipe.recipe;
        const recipeID = uri.split("recipe_")[1];
        // console.log(recipeID);
        return (
          <RecipeCards>
            <h3>{label}</h3>
            <img src={images?.SMALL.url} width="200px" alt="recipe" />
            <Button onClick={handleClick} id={recipeID}>
              View More
            </Button>
          </RecipeCards>
        );
      })}
    </RecipeDiv>
  );
};

export default RecipeCard;
