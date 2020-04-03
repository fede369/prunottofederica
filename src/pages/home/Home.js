import React from "react";
import styled from "@emotion/styled";
import IntroPic from "../../element/IntroPic";
import TextIntro from "./sections/TextIntro";
import ProjectsSection from "./sections/ProjectsSection";
import PicturesSection from "./sections/PicturesSection";
import AnimationSection from "./sections/AnimationSection";

const Container = styled.div`
  overflow-x: hidden;
  width: 100vw;
  height: auto;
  background: #0a063b;
  margin: 0;
`;
const ContainerElement = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  display-flow: column;
  justify-content: center;
  align-items: center;
  margin: 0;
`;
const ContainerImage = styled.div`
  opacity: 1;
  animation: image 2s 1s ease-out forwards;

  @keyframes image {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

const ContainerText = styled.div`
  opacity: 0;
  width: 50%;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: end;
  animation: fade-in-item 2s 1s ease-out forwards;
  margin-left: 180px;

  @keyframes fade-in-item {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 0.5;
    }
    60% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
  @media (min-width: 1025px) and (max-width: 1279px) {
    width: 55%;
    margin-left: 30%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 65%;
    margin-left: 33%;
  }
  @media (min-width: 569px) and (max-width: 768px) {
    width: 75%;
    margin-left: 23%;
  }
  @media (max-width: 568.99px) {
    width: 80%;
    margin-left: 17%;
  }
`;

function Home() {
  return (
    <Container>
      <ContainerElement>
        <ContainerImage>
          <IntroPic />
        </ContainerImage>
        <ContainerText>
          <TextIntro />
        </ContainerText>
      </ContainerElement>
      <ProjectsSection />
      <PicturesSection />
      <AnimationSection />
    </Container>
  );
}

export default Home;
