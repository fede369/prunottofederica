import React from "react";
import styled from "@emotion/styled";
import ProjectCardTitleLeft from "../../../element/ProjectCardTitleLeft";
import ProjectCardTitleRight from "../../../element/ProjectCardTitleRight";

const Container = styled.div`
  width: auto;
  height: 100%;
  background: #0a063b;
  padding-top: 150px;
  padding-bottom: 100px;
  padding-right: 200px;
  padding-left: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) and (max-width: 1279px) {
    padding-top: 50px;
    padding-bottom: 80px;
    padding-right: 50px;
    padding-left: 50px;
  }
  @media (max-width: 699.99px) {
    padding-top: 60px;
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
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;

`;


function ProjectsSection() {
  return (
    <Container>
      <Title>My Projects</Title>
      <ContainerRow>
        <ProjectCardTitleLeft
          to="/remikks"
          name="Project 1"
          title="Remikks"
          year="2017"
          description="A concept of an application concerning musical events"
          backgroundImage={require("../../../assets/images/project1/cover.png")}
          src={require("../../../assets/images/home/remikks.png")}
        />
      </ContainerRow>
      <ContainerRow>
        <ProjectCardTitleRight
          to="/langaexperince"
          name="Project 2"
          title="LangaExperience"
          year="2018"
          description="A business plan project"
          backgroundImage={require("../../../assets/images/project2/cover.png")}
          src={require("../../../assets/images/home/langaexperience.png")}
        />
      </ContainerRow>
      <ContainerRow>
        <ProjectCardTitleLeft
          to="/personalwebsite"
          name="Project 3"
          title="Personal Website"
          year="2018"
          description="A website created for my pictures"
          backgroundImage={require("../../../assets/images/project3/cover.png")}
          src={require("../../../assets/images/home/personalwebsite.png")}
        />
      </ContainerRow>
      <ContainerRow>
        <ProjectCardTitleRight
          to="/affidoanziani"
          name="Project 4"
          title="Affido Anziani"
          year="2019"
          description="A communication system for a service of Milan"
          backgroundImage={require("../../../assets/images/project4/cover.png")}
          src={require("../../../assets/images/home/affidoanziani.png")}
        />
      </ContainerRow>
      <ContainerRow>
        <ProjectCardTitleLeft
          to="/darkdreams"
          name="Project 5"
          title="Dark Dreams"
          year="2019"
          description="An interactive interface provides the experience of a blind man’s dreams"
          backgroundImage={require("../../../assets/images/project5/cover.png")}
          src={require("../../../assets/images/home/darkdreams.png")}
        />
      </ContainerRow>
      <ContainerRow>
        <ProjectCardTitleRight
          to="/mym"
          name="Project 6"
          title="MYM"
          year="2019"
          description="A graphical interface for a training application"
          backgroundImage={require("../../../assets/images/project6/cover.png")}
          src={require("../../../assets/images/home/mym.png")}
        />
      </ContainerRow>
      <ContainerRow>
        <ProjectCardTitleLeft
          to="/mise"
          name="Project 7"
          title="MISE"
          year="2020"
          description="An identity project to enhance the Ministry of Economic Development"
          backgroundImage={require("../../../assets/images/project7/cover.png")}
          src={require("../../../assets/images/home/mise.png")}
        />
      </ContainerRow>
      <ContainerRow>
        <ProjectCardTitleRight
          to="/consemi"
          name="Project 8"
          title="Consemi"
          year="2020"
          description="An iconic visual element that represents the values and identity of CONSEMI - Seed House of the Veneto"
          backgroundImage={require("../../../assets/images/project8/cover.png")}
          src={require("../../../assets/images/home/consemi.png")}
        />
      </ContainerRow>
      <ContainerRow>
        <ProjectCardTitleLeft
          to="/saccisica"
          name="Project 9"
          title="Saccisica"
          year="2020"
          description="Ideation and creation of the logo and the visual identity of Saccisica"
          backgroundImage={require("../../../assets/images/project9/cover.png")}
          src={require("../../../assets/images/home/saccisica.png")}
        />
      </ContainerRow>
      <ContainerRow>
        <ProjectCardTitleRight
          to="/posterhero"
          name="Project 10"
          title="Poster Heroes"
          year="2020"
          description='Realization of a poster for the Posterheroes contest on the theme of "decent work"'
          backgroundImage={require("../../../assets/images/project10/cover.png")}
          src={require("../../../assets/images/home/posterhero.png")}
        />
      </ContainerRow>
      <ContainerRow>
        <ProjectCardTitleLeft
          to="/dreamboard"
          name="Project 11"
          title="Dreamboard"
          year="2020"
          description="Creation of the home page for the Dreamboard application"
          backgroundImage={require("../../../assets/images/project11/cover.png")}
          src={require("../../../assets/images/home/dreamboard.png")}
        />
      </ContainerRow>
    </Container>
  );
}

export default ProjectsSection;
