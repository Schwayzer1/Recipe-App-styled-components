import React from "react";
import coding from "../../assets/coding.svg";
import { Anchor } from "../../components/navbar/Navbar.styled";
import StyledAbout, { InfoDiv, ParAbout, SpanAbout } from "./About.styled";

const About = () => {
  return (
    <StyledAbout>
      <img src={coding} width="350px" alt="" />
      <ParAbout>
        About Full Stack Developer
        <Anchor
          href="https://github.com/Schwayzer1/Recipe-App-styled-components"
          target="_blank"
        >
          <SpanAbout>SCHWAYZER</SpanAbout>
        </Anchor>
      </ParAbout>
      <InfoDiv>
        <h4>I'm Furkan.</h4>
        <p>I'm currently learning Full-Stack Development Languages.</p>
        <p>I've already known JS,ReactJS,Linux,Git,HTML,CSS.</p>
        <p>
          <SpanAbout>Send email</SpanAbout> : furkann.onay@gmail.com
        </p>
      </InfoDiv>
    </StyledAbout>
  );
};

export default About;
