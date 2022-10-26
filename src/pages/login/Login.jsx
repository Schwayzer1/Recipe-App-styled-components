import React from "react";
import StyledLogin, {
  FormDiv,
  StyledButton,
  StyledInput,
  Title,
} from "../login/Login.styled";
import meal2 from "../../assets/meal2.svg";
import { useNavigate } from "react-router-dom";

const Login = ({ setLogin }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    console.log(username.value, password.value);

    if (username.value === "user" && password.value === "password") {
      setLogin(true);
      navigate("/");
    } else {
      alert("Invalid username or password.");
    }
  };
  return (
    <StyledLogin>
      <FormDiv>
        <img src={meal2} width="100px" alt="" />
        <Title>RECIPE</Title>
        <form onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
          <StyledInput
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <StyledButton type="submit">LOGIN</StyledButton>
        </form>
      </FormDiv>
    </StyledLogin>
  );
};

export default Login;
