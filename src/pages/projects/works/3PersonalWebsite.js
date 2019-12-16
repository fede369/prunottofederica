import React from "react";
import styled from "@emotion/styled";
import AboutLayout from "./layout/AboutLayout";
import MenuProjects from "./layout/MenuProjects";
import covervid from "../../../assets/images/project3/video.mp4";
import GitHubLogo from "../../../element/GitHubLogo";

const pics = [
  require("../../../assets/images/project3/page1.png"),
  require("../../../assets/images/project3/page2.png"),
  require("../../../assets/images/project3/page3.png"),
  require("../../../assets/images/project3/page4.png"),
  require("../../../assets/images/project3/page5.png"),
  require("../../../assets/icon/GitHub.svg")
];
const cover = [require("../../../assets/images/project3/cover2.png")];

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
  margin-top: 100px;
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

export default function PersonalWebsite() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Container>
        <AboutLayout
          cover={cover[0]}
          title="Personal Website"
          year="2018"
          course="Principles of Computer Science and Networking"
          tags="Web design"
          about="The aim of the project is to create a personal web page. 
        In this way a website with different pages was designed to show the 
        different shots and photo projects. At first it was thought about the 
        layout of the interface and then moved on to implementing it through 
        the use of computer languages such as html, css and javascript. "
        />
        <GitHubLogo href={"https://fede369.github.io/fede/"} />
        <Gallery>
          <Video autoPlay="true" controls>
            <source src={covervid} type="video/mp4" />
          </Video>
          <Image1 style={{ backgroundImage: `url(${pics[0]})` }} />
          <Image1 style={{ backgroundImage: `url(${pics[1]})` }} />
          <Image1 style={{ backgroundImage: `url(${pics[2]})` }} />
          <Image1 style={{ backgroundImage: `url(${pics[3]})` }} />
          <Image1 style={{ backgroundImage: `url(${pics[4]})` }} />
        </Gallery>
        <MenuProjects />
      </Container>
    </div>
  );
}
