import React from "react";
import styled from "@emotion/styled";
import TitlePage from "../../element/TitlePage";
import ProjectCard from "../../element/ProjectCard";
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
    min-height: 100vh;
  }
  @media (max-width: 568.99px) {
    padding-top: 60px;
    padding-bottom: 150px;
  }
`;
const ContainerTitlePage = styled.div`
  position: fixed;
  left: 100px;
  bottom: 150px;
  @media (min-width: 569px) and (max-width: 1279px) {
    bottom: 100px;
    left: 50px;
  }
  @media (max-width: 568.99px) {
    bottom: 50px;
    left: 20px;
  }
`;

const ContainerProjectCard = styled.div`
  margin-top: 50px;
  margin-right: 250px;
  margin-left: 250px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  @media (min-width: 569px) and (max-width: 1279px) {
    margin: 40px 190px 0;
  }
  @media (max-width: 568.99px) {
    margin: 30px 20px 0;
  }
`;
const MyLink = styled(Link)`
  text-decoration: none;
  margin: 10px;
`;

export default function Projets() {
  return (
    <Container>
      <ContainerTitlePage>
        <TitlePage
          style={{ color: "white" }}
          title1="A selection"
          title2="of projects"
        />
      </ContainerTitlePage>
      <ContainerProjectCard>
        <MyLink to="/remikks">
          <ProjectCard
            title="Remikks"
            year="2017"
            description="A concept of an application concerning musical events"
            backgroundImage={require("../../assets/images/project1/cover.png")}
          />
        </MyLink>
        <MyLink to="/langaexperince">
          <ProjectCard
            title="LangaExperience"
            year="2018"
            description="A business plan project"
            backgroundImage={require("../../assets/images/project2/cover.png")}
          />
        </MyLink>
        <MyLink to="/personalwebsite">
          <ProjectCard
            title="Personal Website"
            year="2018"
            description="A website created for my pictures"
            backgroundImage={require("../../assets/images/project3/cover.png")}
          />
        </MyLink>
        <MyLink to="/affidoanziani">
          <ProjectCard
            title="Affido Anziani"
            year="2019"
            description="A communication system for a service of Milan"
            backgroundImage={require("../../assets/images/project4/cover.png")}
          />
        </MyLink>
        <MyLink to="/darkdreams">
          <ProjectCard
            title="Dark Dreams"
            year="2019"
            description="An interactive interface provides the experience of a blind man’s dreams"
            backgroundImage={require("../../assets/images/project5/cover.png")}
          />
        </MyLink>
        <MyLink to="/mym">
          <ProjectCard
            title="MYM"
            year="2019"
            description="A graphical interface for a training application"
            backgroundImage={require("../../assets/images/project6/cover.png")}
          />
        </MyLink>
        <MyLink to="/mise">
          <ProjectCard
            title="MISE"
            year="2020"
            description="An identity project to enhance the Ministry of Economic Development"
            backgroundImage={require("../../assets/images/project7/cover.png")}
          />
        </MyLink>
        <MyLink to="/consemi">
          <ProjectCard
            title="Consemi"
            year="2020"
            description="An iconic visual element that represents the values and identity of CONSEMI - Seed House of the Veneto"
            backgroundImage={require("../../assets/images/project8/cover.png")}
          />
        </MyLink>
        <MyLink to="/saccisica">
          <ProjectCard
            title="Saccisica"
            year="2020"
            description="Ideation and creation of the logo and the visual identity of Saccisica"
            backgroundImage={require("../../assets/images/project9/cover.png")}
          />
        </MyLink>
        <MyLink to="/posterhero">
          <ProjectCard
            title="Poster Heroes"
            year="2020"
            description='Realization of a poster for the Posterheroes contest on the theme of "decent work"'
            backgroundImage={require("../../assets/images/project10/cover.png")}
          />
        </MyLink>
        <MyLink to="/dreamboard">
          <ProjectCard
            title="Dreamboard"
            year="2020"
            description='Creation of the home page for the Dreamboard application'
            backgroundImage={require("../../assets/images/project11/cover.png")}
          />
        </MyLink>
      </ContainerProjectCard>
    </Container>
  );
}
