import React from "react";
import styled from "@emotion/styled";

const ContainerTitlePage = styled.div`
  z-index: 999px;
  width: 20%;
  height: auto;
  position: fixed;
  color: white;
  left: 100px;
  bottom: 100px;
  display: flex;
  flex-direction: column;
  @media (min-width: 569px) and (max-width: 1279px) {
    left: 50px;
    bottom: 50px;
    width: 40%;
  }
  @media (max-width: 568.99px) {
    left: 20px;
    top: 80vh;
    width: 80%;
  }
`;

const TitlePage = styled.h1`
  font-family: "Khula", sans-serif;
  font-size: 60px;
  font-weight: 800;
  letter-spacing: 0.25px;
  line-height: 65px;
  margin: 0;
  @media (max-width: 1279px) {
    font-size: 24px;
    letter-spacing: 0px;
    line-height: 35px;
  }
`;

const Details = styled.h5`
  font-family: "Ubuntu", sans-serif;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  margin: 0 0 15px;
  line-height: 30px;
  @media (max-width: 1279px) {
    font-size: 14px;
    letter-spacing: 0.25px;
    margin: 0 0 5px;
  }
`;
export default function TextAlbum(props) {
  return (
    <ContainerTitlePage>
      <TitlePage>{props.title}</TitlePage>
      <Details>{props.description}</Details>
    </ContainerTitlePage>
  );
}
