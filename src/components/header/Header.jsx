import React from "react";
import Form from "./Form";
import { Head } from "./Header.styled";

const Header = ({ setRecipes, setLoading }) => {
  return (
    <Head>
      <h1>Food App</h1>
      <Form setRecipes={setRecipes} setLoading={setLoading} />
    </Head>
  );
};

export default Header;
