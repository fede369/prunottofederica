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
  z-index: 4;
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
    flex-direction: column-reverse;
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
margin-right: -30px;
  z-index: 0;
  @media (min-width: 700px) and (max-width: 1279px) {
    width: 293px;
    height: 168px;
    margin-right: -20px;
  }
  @media (max-width: 699.99px) {
    width: 267px;
    height: 158px;
    margin-right: 0;
    margin-top: -15px;
  }
`;

function ProjectCardTitleRight(props) {
  return (
    <Container>
      <InnerContainer>
        <Image src={props.src} />
        <MyLink to={props.to} style={{ zIndex: "4" }}>
          <ProjectCard {...props} />
        </MyLink>
      </InnerContainer>
      <TitleVertical {...props} />
    </Container>
  );
}

export default ProjectCardTitleRight;
