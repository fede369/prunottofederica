import React from "react";
import styled from "@emotion/styled";

const Title = styled.h1`
  font-family: "Khula", sans-serif;
  align-self: baseline;
  font-size: 60px;
  font-weight: 800;
  letter-spacing: 0.25px;
  color: #eca72c;
  margin: 0;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  @media (min-width: 569px) and (max-width: 1279px) {
    font-size: 34px;
    letter-spacing: 1.5px;
  }
  @media (max-width: 568.99px) {
    font-size: 24px;
    letter-spacing: 0px;
  }
`;

function TitleVertical(props) {
  return <Title> {props.name}</Title>;
}

export default TitleVertical;
