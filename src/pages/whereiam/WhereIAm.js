import React from "react";
import styled from "@emotion/styled";
import TitlePage from "../../element/TitlePage";
import Map from "./map/MapboxGLMap";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #0a063b;
  padding-top: 100px;
  padding-bottom: 100px;
  overscroll: hide;
  display: flex;
  justify-content: center;
  align-items: start;
  position: fixed;
  @media (min-width: 569px) and (max-width: 1279px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  @media (max-width: 568.99px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;
const ContainerTitlePage = styled.div`
  z-index: 4;
  position: fixed;
  left: 100px;
  bottom: 100px;

  @media (min-width: 569px) and (max-width: 1279px) {
    left: 50px;
  }
  @media (max-width: 568.99px) {
    bottom: 50px;
    left: 20px;
  }
`;

const ContainerMap = styled.div`
  width: 65vw;
  height: 70vh;
  margin-top: 50px;
  @media (min-width: 701px) and (max-width: 1279px) {
    width:65vw;
    height: 60vh;
  }
  @media (max-width: 700px) {
    margin-top: 30px;
    width: 75vw;
    height: 75vh;
  }
`;

const Map1 = styled.div`
  margin-top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default function WhereIAm() {
  return (
    <Container>
      <ContainerTitlePage>
        <TitlePage style={{ color: "white" }} title1="Where" title2="I am" />
      </ContainerTitlePage>
      <ContainerMap>
        <Map1>
          <Map />
        </Map1>
      </ContainerMap>
    </Container>
  );
}
