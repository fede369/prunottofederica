import React from "react";
import styled from "@emotion/styled";
import TitleVertical from "./TitleVertical";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: auto;
  height: auto;
  @media (max-width: 700px) {
    margin-left: -50px;
  }
  
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }
`;

const MyLink = styled(Link)`
  text-decoration: none;
`;

const Image = styled.img`
border: 3px solid white;
background-color: rgba(255, 255, 255, 0.2);
width: 520px;
height: 300px;
margin-left: -30px;
  z-index: 0;
  @media (min-width: 700px) and (max-width: 1279px) {
    width: 293px;
    height: 168px;
    margin-left: -20px;
  }
  @media (max-width: 699.99px) {
    width: 267px;
    height: 158px;
    margin-left: 0;
    margin-top: -15px;
  }
`;

function ProjectCardTitleLeft(props) {
  return (
    <Container>
      <TitleVertical {...props} />
      <InnerContainer>
        <MyLink to={props.to} style={{ zIndex: "4" }}>
          <ProjectCard {...props} />
        </MyLink>
        <Image src={props.src} />
      </InnerContainer>
    </Container>
  );
}

export default ProjectCardTitleLeft;
