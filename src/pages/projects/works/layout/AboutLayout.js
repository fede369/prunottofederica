import React from "react";
import styled from "@emotion/styled";

const ProjectCover = styled.div`
  background: no-repeat center center fixed;
  background-size: cover;
  background-color: #dbdbdb;
  height: 700px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: end;
`;
const TextBox = styled.div`
  color: white;
  padding-left: 100px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  just-content: center;
  @media (min-width: 569px) and (max-width: 1279px) {
    padding-left: 50px;
  }
  @media (max-width: 568.99px) {
    padding-left: 20px;
  }
`;
const TitleProject = styled.h1`
  font-family: "Khula", sans-serif;
  font-size: 96px;
  font-weight: 800;
  letter-spacing: 0px;
  margin: 0;
  @media (min-width: 569px) and (max-width: 1279px) {
    font-size: 48px;
    letter-spacing: 0.5px;
  }
  @media (max-width: 568.99px) {
    font-size: 24px;
    letter-spacing: 1.5px;
  }
`;

const Info = styled.h5`
  font-family: "Khula", sans-serif;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 0px;
  margin: 0;
  @media (max-width: 1279px) {
    font-size: 14px;
    letter-spacing: 0.25px;
  }
`;

const Text = styled.h5`
  font-family: "Ubuntu", sans-serif;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0px;
  margin: 0 0 10px;
  @media (max-width: 1279px) {
    font-size: 14px;
    letter-spacing: 0.25px;
  }
`;
const AboutContainer = styled.div`
  position: relative;
  margin-left: 52%;
  padding-right: 100px;
  padding-top: 100px;
  @media (min-width: 800px) and (max-width: 1500px) {
    margin-left: 42%;
  }
  @media (max-width: 799.99px) {
    margin-left: 0;
    position: relative;
    padding-right: 70px;
    padding-left: 70px;
    width: auto;
  }
`;
const TitleAbout = styled.h2`
  font-family: "Khula", sans-serif;
  font-size: 60px;
  font-weight: 800;
  letter-spacing: 0.25px;
  margin: 0;
  color: #eca72c;
  @media (min-width: 800px) and (max-width: 1279px) {
    font-size: 34px;
    letter-spacing: 1.5px;
  }
  @media (max-width: 799.99px) {
    font-size: 24px;
    letter-spacing: 0px;
  }
`;

const TextAbout = styled.h5`
  font-family: "Ubuntu", sans-serif;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  margin: 0;
  line-height: 40px;
  @media (max-width: 1500px) {
    font-size: 14px;
    letter-spacing: 0.25px;
    line-height: 30px;
  }
`;
export default function AboutLayout(props) {
  return (
    <div>
      <ProjectCover style={{ backgroundImage: `url(${props.cover})` }}>
        <TextBox>
          <TitleProject>{props.title}</TitleProject>
          <Info>Year</Info>
          <Text>{props.year}</Text>
          <Info>Course</Info>
          <Text>{props.course}</Text>
          <Info>Tags</Info>
          <Text>{props.tags}</Text>
        </TextBox>
      </ProjectCover>
      <AboutContainer>
        <TitleAbout>About</TitleAbout>
        <TextAbout>{props.about}</TextAbout>
      </AboutContainer>
    </div>
  );
}
