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
    </ContainerMenuProjects>
  );
}
