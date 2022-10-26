import styled from "styled-components";

const LoginStyled = styled.div`
  width: 100%;
  height: 98vh;
  background-image: url("https://picsum.photos/1600/900");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 400px;
  height: 400px;
  border: 2px solid white;
  border-radius: 50%;
  background-color: rgba(76, 179, 200, 0.5);
`;

export const StyledInput = styled.input`
  display: block;
  margin: 1rem auto;
  width: 250px;
  height: 30px;
  background-color: #0f3945;
  color: #fefefe;
`;

export const StyledButton = styled.button`
  background-color: #0f3945;
  color: #fefefe;
  font-size: 1rem;
  padding: 0.5rem 2rem;
  cursor: pointer;
`;

export const Title = styled.h1`
  color: #0f3945;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export default LoginStyled;
