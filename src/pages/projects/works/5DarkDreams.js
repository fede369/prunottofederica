import React from "react";
import styled from "@emotion/styled";
import AboutLayout from "./layout/AboutLayout";
import MenuProjects from "./layout/MenuProjects";
import GitHubLogo from "../../../element/GitHubLogo";

const pics = [
  require("../../../assets/images/project5/page1.png"),
  require("../../../assets/icon/GitHub.svg")
];
const cover = [require("../../../assets/images/project5/cover.png")];
const video = [
  require("../../../assets/images/project5/video1.mp4"),
  require("../../../assets/images/project5/video2.mp4")
];

const Container = styled.div`
  width: 100vw;
  height: auto;
  padding-bottom: 100px;
  @media (min-width: 569px) and (max-width: 1279px) {
    padding-bottom: 80px;
  }
  @media (max-width: 568.99px) {
    padding-bottom: 60px;
  }
`;

const Gallery = styled.div`
  height: auto;
  width: 100vw;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image1 = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh;
  width: 100%;
  margin-top: 60px;
  @media (min-width: 569px) and (max-width: 1279px) {
    height: 50vh;
    margin-top: 50px;
  }
  @media (max-width: 568.99px) {
    height: 40vh;
    margin: 0;
  }
`;
const Video = styled.video`
  height: 80vh;
  width: auto;
  margin-top: 60px;
  @media (min-width: 801px) and (max-width: 1279px) {
    height: 50vh;
    margin-top: 50px;
  }

  @media (max-width: 800px) {
    width: 100%;
    height: 40vh;
    margin: 0;
  }
`;

export default function DarkDreams() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Container>
        <AboutLayout
          cover={cover[0]}
          title="Dark Dreams"
          year="2019"
          info="Course"
          course="Creative Coding"
          tags="UI, UX, development"
          about="The aim of the project is to provide the experience of a blind man’s dreams. 
        An interactive interface was therefore designed for the smartphone, in order to 
        exploit different and interesting interactions. The user will move around a maze to 
        reach the target and the only clues available are the sounds. The path is contextualized 
        in a city, in an attempt to evoke the most recurring nightmare of the blind: losing 
        your guide dog."
        />
        <GitHubLogo
          href={"https://github.com/drawwithcode/2018-group-work-group-06"}
        />
        <Gallery>
          <Video autoPlay controls>
            <source src={video[0]} type="video/mp4" />
          </Video>
          <Video controls>
            <source src={video[1]} type="video/mp4" />
          </Video>
          <Image1 style={{ backgroundImage: `url(${pics[0]})` }} />
        </Gallery>
        <MenuProjects />
      </Container>
    </div>
  );
}
