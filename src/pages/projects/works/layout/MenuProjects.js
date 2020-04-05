import React from "react";
import styled from "@emotion/styled";
import ProjectCard from "../../../../element/ProjectCard";
import { Link } from "react-router-dom";

const ContainerMenuProjects = styled.div`
  padding-top: 200px;
  padding-bottom: 50px;
  padding-right: 250px;
  padding-left: 250px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  @media (min-width: 569px) and (max-width: 1279px) {
    margin: 100px 190px 40px;
    padding: 0;
  }
  @media (max-width: 568.99px) {
    margin: 50px 10px 30px;
    padding: 0;
  }
`;

const MyLink = styled(Link)`
  text-decoration: none;
  margin: 10px;
`;

export default function MenuProjects() {
  return (
    <ContainerMenuProjects>
      <MyLink to="/remikks">
        <ProjectCard
          title="Remikks"
          year="2017"
          description="A concept of an application concerning musical events"
          backgroundImage={require("../../../../assets/images/project1/cover.png")}
        />
      </MyLink>
      <MyLink to="/langaexperince">
        <ProjectCard
          title="LangaExperience"
          year="2018"
          description="A business plan project"
          backgroundImage={require("../../../../assets/images/project2/cover.png")}
        />
      </MyLink>
      <MyLink to="/personalwebsite">
        <ProjectCard
          title="Personal Website"
          year="2018"
          description="A website created for my pictures"
          backgroundImage={require("../../../../assets/images/project3/cover.png")}
        />
      </MyLink>
      <MyLink to="/affidoanziani">
        <ProjectCard
          title="Affido Anzini"
          year="2019"
          description="An interactive interface provides the experience of a blind man’s dreams"
          backgroundImage={require("../../../../assets/images/project4/cover.png")}
        />
      </MyLink>
      <MyLink to="/darkdreams">
        <ProjectCard
          title="Dark Dreams"
          year="2019"
          description="A communication system for a service of Milan"
          backgroundImage={require("../../../../assets/images/project5/cover.png")}
        />
      </MyLink>
      <MyLink to="/mym">
        <ProjectCard
          title="MYM"
          year="2019"
          description="A graphical interface for a training applicatio"
          backgroundImage={require("../../../../assets/images/project6/cover.png")}
        />
      </MyLink>
      <MyLink to="/mise">
        <ProjectCard
          title="MISE"
          year="2020"
          description="An identity project to enhance the Ministry of Economic Development"
          backgroundImage={require("../../../../assets/images/project7/cover.png")}
        />
      </MyLink>
      <MyLink to="/consemi">
        <ProjectCard
          title="Consemi"
          year="2020"
          description="An iconic visual element that represents the values and identity of CONSEMI - Seed House of the Veneto"
          backgroundImage={require("../../../../assets/images/project8/cover.png")}
        />
      </MyLink>
      <MyLink to="/saccisica">
        <ProjectCard
          title="Saccisica"
          year="2020"
          description="Ideation and creation of the logo and the visual identity of Saccisica"
          backgroundImage={require("../../../../assets/images/project9/cover.png")}
        />
      </MyLink>
      <MyLink to="/posterhero">
        <ProjectCard
          title="Poster Heroes"
          year="2020"
          description='Realization of a poster for the Posterheroes contest on the theme of "decent work"'
          backgroundImage={require("../../../../assets/images/project10/cover.png")}
        />
      </MyLink>
      <MyLink to="/dreamboard">
        <ProjectCard
          title="Dreamboard"
          year="2020"
          description='Creation of the home page for the Dreamboard application'
          backgroundImage={require("../../../../assets/images/project11/cover.png")}
        />
      </MyLink>
    </ContainerMenuProjects>
  );
}
