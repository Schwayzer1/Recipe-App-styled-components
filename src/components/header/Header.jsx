import React from "react";
import Form from "./Form";
import { Head } from "./Header.styled";

const Header = ({ setRecipes }) => {
  return (
    <Head>
      <h1>Food App</h1>
      <Form setRecipes={setRecipes} />
    </Head>
  );
};

export default Header;
