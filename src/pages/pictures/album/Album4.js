import React from "react";
import styled from "@emotion/styled";
import AlbumPictures from "./layout/AlbumPictures";
import TextAlbum from "./layout/TextAlbum";
import PictureCard from "../../../element/PictureCard";
import { Link } from "react-router-dom";

const pics = [
  require("../../../assets/images/album4/6.jpg"),
  require("../../../assets/images/album4/5.jpg"),
  require("../../../assets/images/album4/4.jpg"),
  require("../../../assets/images/album4/3.jpg"),
  require("../../../assets/images/album4/2.jpg"),
  require("../../../assets/images/album4/1.jpg")
];

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #0a063b;
  padding: 0;
  overscroll-behavior: none;
`;

const ContainerAlbum = styled.div`
  z-index: 1px;
  width: 100%;
  height: 100vh;
  overscroll-behavior-y: contain;
  user-select: none;
  position: fixed;
  background: #0a063b;
`;
const ContainerMenuAlbum = styled.div`
  position: absolute;
  top: 100vh;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-right: 500px;
  padding-left: 500px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  background: #0a063b;

  @media (min-width: 1280px) and (max-width: 1871px) {
    padding-right: 300px;
    padding-left: 300px;
  }
  @media (min-width: 569px) and (max-width: 1279px) {
    padding: 40px 190px;
  }
  @media (max-width: 568.99px) {
    padding: 100px 20px;
  }
`;

const MyLink = styled(Link)`
  text-decoration: none;
  margin: 20px;
`;

export default function Album4() {
  return (
    <Container>
      <ContainerAlbum>
        <AlbumPictures pics={pics} />
      </ContainerAlbum>
      <ContainerMenuAlbum>
        <MyLink to="/album1">
          <PictureCard
            title="Cantina Viticoltori Rodello"
            year="2016"
            description="Picture of the Viticoltori Rodello winery"
            backgroundImage={require("../../../assets/images/album1/2.jpg")}
          />
        </MyLink>
        <MyLink to="/album2">
          <PictureCard
            title="Festival della Felicità"
            year="2016"
            description="“Little Festival of Happiness” in Monticello d’Alba"
            backgroundImage={require("../../../assets/images/album2/1.jpg")}
          />
        </MyLink>
        <MyLink to="/album3">
          <PictureCard
            title="Vintage"
            year="2017"
            description="'Vintage' a project for an exposition"
            backgroundImage={require("../../../assets/images/album3/6.jpg")}
          />
        </MyLink>
      </ContainerMenuAlbum>
      <TextAlbum
        title="Noto Fior di Foto"
        description="Photographs used in the “Noto fior di foto” competition of 2018 on the theme of bloom, in this case the flowering of the girl."
      />
    </Container>
  );
}
