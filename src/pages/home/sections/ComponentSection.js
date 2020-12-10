import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const video = [
  require("../../../assets/component.mp4"),
];


const Container = styled.div`
  width: auto;
  height: 100%;
  background: #0a063b;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-right: 250px;
  padding-left: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 569px) and (max-width: 1279px) {
    padding-top: 0;
    padding-bottom: 80px;
    padding-right: 50px;
    padding-left: 50px;
  }
  @media (max-width: 568.99px) {
    padding-top: 0;
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

const MyLink = styled(Link)`
  text-decoration: none;
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


function AnimationSection() {
  return (
    <Container>
      <Title>My Components</Title>
      <MyLink to="/components">
        <Video autoPlay loop>
          <source src={video[0]} type="video/mp4" />
        </Video>
      </MyLink>
    </Container>
  );
}

export default AnimationSection;
