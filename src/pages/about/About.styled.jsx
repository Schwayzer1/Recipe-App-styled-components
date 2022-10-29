import styled from "styled-components";

const StyledAbout = styled.div`
  background-color: #f2b263;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ParAbout = styled.p`
  font-size: 1.1rem;
  margin-top: 1.5rem;
  font-weight: 600;
`;

export const SpanAbout = styled.span`
  font-weight: bold;
  color: whitesmoke;
`;

export const InfoDiv = styled.div`
  margin: 0 auto 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  border: 2px solid white;
  width: 75vw;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export default StyledAbout;
