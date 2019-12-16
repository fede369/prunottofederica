import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleKhula = styled.h2`
  font-family: "Khula", sans-serif;
  font-size: 48px;
  font-weight: 800;
  letter-spacing: 0.5px;
  margin: 0;
  @media (min-width: 569px) and (max-width: 1279px) {
    font-size: 34px;
    letter-spacing: 1.5px;
  }
  @media (max-width: 568.99px) {
    font-size: 24px;
    letter-spacing: 0px;
  }
`;
const TitleMontserrat = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 48px;
  font-weight: 400;
  letter-spacing: 0.5px;
  margin-top: -15px;
  @media (min-width: 569px) and (max-width: 1279px) {
    font-size: 34px;
    letter-spacing: 1.5px;
  }
  @media (max-width: 568.99px) {
    font-size: 24px;
    letter-spacing: 0px;
  }
`;

export default function TitlePage(props) {
  return (
    <Container style={props.style}>
      <TitleKhula>{props.title1}</TitleKhula>
      <TitleMontserrat>{props.title2}</TitleMontserrat>
    </Container>
  );
}
