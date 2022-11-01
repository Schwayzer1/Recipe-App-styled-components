import axios from "axios";
import ReactLoading from "react-loading";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailsDiv, {
  BackButton,
  ImageDiv,
  Nutritions,
  RecipeDiv,
  RecipeHeader,
  RecipeTitle,
} from "./Details.styled";

const Details = () => {
  const [loading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState();
  const params = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  useEffect(() => {
    const load = () => {
      try {
        axios(
          `https://api.edamam.com/api/recipes/v2/${params.id}?type=public&beta=false&app_id=bf4c6016&app_key=2b199b85186de3b220c45451443e8396`
        ).then((res) => {
          setLoading(false);
          console.log(res.data.recipe);
          setRecipe(res.data.recipe);
        });
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    load();
  }, []);

  const createResult = () => {
    if (loading) {
      return <ReactLoading type={"spin"} color="#000" />;
    } else {
      const {
        label,
        ingredientLines,
        image,
        cautions,
        totalTime,
        cuisineType,
        mealType,
        dishType,
        totalNutrients,
      } = recipe;
      const nutritions = Object.values(totalNutrients)
        .sort((a, b) => b.quantity - a.quantity)
        .slice(0, 10);
      return (
        <>
          <RecipeHeader>
            <RecipeTitle>{label}</RecipeTitle>

            {Boolean(cautions.length) && (
              <p>
                <strong>Cautions: </strong>
                {String(cautions)}
              </p>
            )}
            <p>
              <strong>Total time: </strong>
              {totalTime}
            </p>
            <p>
              <strong>Type: </strong>
              {mealType}/{dishType}
            </p>
            <p>
              <strong>Cuisine: </strong>
              {cuisineType}
            </p>
          </RecipeHeader>
          <RecipeDiv>
            <Nutritions>
              {nutritions.map((item) => {
                return (
                  <p>
                    <strong>{item.label}: </strong>
                    {item.quantity.toFixed(2)} {item.unit}
                  </p>
                );
              })}
            </Nutritions>
            <ImageDiv>
              <img src={image} height={"95%"} alt="recipePic" />
            </ImageDiv>

            <div>
              {ingredientLines.map((item) => (
                <p>{item}</p>
              ))}
            </div>
          </RecipeDiv>
        </>
      );
    }
  };

  return (
    <DetailsDiv>
      {createResult()}
      <BackButton onClick={handleClick}>Go Back</BackButton>
    </DetailsDiv>
  );
};

export default Details;
