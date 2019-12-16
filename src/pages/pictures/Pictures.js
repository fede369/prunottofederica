import React from "react";
import styled from "@emotion/styled";
import TitlePage from "../../element/TitlePage";
import PictureCard from "../../element/PictureCard";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: auto;
  height: auto;
  background: #0a063b;
  padding-top: 100px;
  padding-bottom: 100px;
  @media (min-width: 569px) and (max-width: 1279px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  @media (max-width: 568.99px) {
    padding-top: 60px;
    padding-bottom: 60px;
    min-height: 100vh;
  }
`;
const ContainerTitlePage = styled.div`
  z-index: 999px;
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

const ContainerPictureCard = styled.div`
  margin-top: 50px;
  padding-right: 500px;
  padding-left: 500px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  @media (min-width: 1281px) and (max-width: 1871px) {
    padding-right: 300px;
    padding-left: 300px;
  }
  @media (min-width: 569px) and (max-width: 1279px) {
    margin-top: 40px;
    padding-right: 190px;
    padding-left: 190px;
  }
  @media (max-width: 568.99px) {
    margin-bottom: 60px;
    margin-top: 30px;
    padding-right: 20px;
    padding-left: 20px;
  }
`;

const MyLink = styled(Link)`
  text-decoration: none;
  margin: 20px;
`;

export default function Pictures() {
  return (
    <Container>
      <ContainerTitlePage>
        <TitlePage
          style={{ color: "white" }}
          title1="Check out"
          title2="my album"
        />
      </ContainerTitlePage>
      <ContainerPictureCard>
        <MyLink to="/album1">
          <PictureCard
            title="Cantina Viticoltori Rodello"
            year="2016"
            description="Picture of the Viticoltori Rodello winery"
            backgroundImage={require("../../assets/images/album1/2.jpg")}
          />
        </MyLink>
        <MyLink to="/album2">
          <PictureCard
            title="Festival della Felicità"
            year="2016"
            description="“Little Festival of Happiness” in Monticello d’Alba"
            backgroundImage={require("../../assets/images/album2/1.jpg")}
          />
        </MyLink>
        <MyLink to="/album3">
          <PictureCard
            title="Vintage"
            year="2017"
            description="'Vintage' a project for an exposition"
            backgroundImage={require("../../assets/images/album3/6.jpg")}
          />
        </MyLink>
        <MyLink to="/album4">
          <PictureCard
            title="Noto Fior di Foto"
            year="2018"
            description="Competition of 2018 on the theme Bloom"
            backgroundImage={require("../../assets/images/album4/2.jpg")}
          />
        </MyLink>
      </ContainerPictureCard>
    </Container>
  );
}
