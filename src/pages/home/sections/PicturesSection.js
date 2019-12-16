import React from "react";
import styled from "@emotion/styled";
import PictureCardTitleLeft from "../../../element/PictureCardTitleLeft";
import PictureCardTitleRight from "../../../element/PictureCardTitleRight";

const Container = styled.div`
  width: auto;
  height: 100%;
  background: #0a063b;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-right: 250px;
  padding-left: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 569px) and (max-width: 1279px) {
    padding-top: 0;
    padding-bottom: 80px;
    padding-right: 50px;
    padding-left: 50px;
  }
  @media (max-width: 568.99px) {
    padding-top: 0;
    padding-bottom: 60px;
    padding-right: 20px;
    padding-left: 20px;
  }
`;
const Title = styled.h1`
  font-family: "Khula", sans-serif;
  font-size: 96px;
  font-weight: 800;
  letter-spacing: 0px;
  margin: 0;
  line-height: 100px;
  color: white;
  margin: 0 0 100px;
  @media (min-width: 569px) and (max-width: 1279px) {
    font-size: 48px;
    letter-spacing: 0.5px;
    line-height: 52px;
  }
  @media (max-width: 568.99px) {
    font-size: 34px;
    letter-spacing: 1.5px;
    line-height: 36px;
    margin: 0 0 50px;
  }
`;
const ContainerRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 50px;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }
`;
const ContainerRow1 = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 50px;
  @media (max-width: 700px) {
    flex-direction: column-reverse;
    justify-content: center;
    margin-bottom: 10px;
  }
`;
const Image = styled.img`
  width: 400px;
  height: 400px;
  margin: 0 20px;
  @media (min-width: 569px) and (max-width: 1279px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 568.99px) {
    width: 250px;
    height: 250px;
    margin: 20px 0 0;
  }
`;

function PicturesSection() {
  return (
    <Container>
      <Title>My Pictures</Title>
      <ContainerRow>
        <PictureCardTitleLeft
          to="/album1"
          name="Album 1"
          title="Cantina Viticoltori Rodello"
          year="2016"
          description="Picture of the Viticoltori Rodello winery"
          backgroundImage={require("../../../assets/images/album1/2.jpg")}
        />
        <Image src={require("../../../assets/images/home/wine.png")} />
      </ContainerRow>
      <ContainerRow1>
        <Image src={require("../../../assets/images/home/happy.png")} />
        <PictureCardTitleRight
          to="/album2"
          name="Album 2"
          title="Festival della Felicità"
          year="2016"
          description="“Little Festival of Happiness” in Monticello d’Alba"
          backgroundImage={require("../../../assets/images/album2/1.jpg")}
        />
      </ContainerRow1>
      <ContainerRow>
        <PictureCardTitleLeft
          to="/album3"
          name="Album 3"
          title="Vintage"
          year="2017"
          description="'Vintage' a project for an exposition"
          backgroundImage={require("../../../assets/images/album3/6.jpg")}
        />
        <Image src={require("../../../assets/images/home/vintage.png")} />
      </ContainerRow>
      <ContainerRow1>
        <Image src={require("../../../assets/images/home/bloom.png")} />
        <PictureCardTitleRight
          to="/album4"
          name="Album 4"
          title="Noto Fior di Foto"
          year="2018"
          description="Competition of 2018 on the theme Bloom"
          backgroundImage={require("../../../assets/images/album4/2.jpg")}
        />
      </ContainerRow1>
    </Container>
  );
}

export default PicturesSection;
