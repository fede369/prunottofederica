import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  display: inline;
  overflow: hidden;
  color: white;
  animation: move 2s 1s ease-out forwards;
  @keyframes move {
    0% {
      top: 60%;
    }
    50% {
      top: 60%;
    }
    100% {
      top: 50%;
    }
  }
  @media (min-width: 569px) and (max-width: 1279px) {
    @keyframes move {
      0% {
        top: 60%;
      }
      50% {
        top: 60%;
      }
      100% {
        top: 55%;
      }
    }
  }
  @media (max-width: 568.99px) {
    @keyframes move {
      0% {
        top: 60%;
      }
      50% {
        top: 60%;
      }
      100% {
        top: 53%;
      }
    }
  }
`;
const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: "Khula", sans-serif;
  font-size: 96px;
  font-weight: 800;
  letter-spacing: 0px;
  margin: 0;
  line-height: 100px;
  @media (min-width: 569px) and (max-width: 1279px) {
    font-size: 60px;
    letter-spacing: 0.25px;
    line-height: 64px;
  }
  @media (max-width: 568.99px) {
    font-size: 34px;
    letter-spacing: 1.5px;
    line-height: 36px;
  }
`;

const Line = styled.div`
  display: flex;
  flex-flow: row;
`;

const ContainerDescription = styled.div`
  z-index: 4;
  width: 424px;
  opacity: 0;
  animation: fade-in-item 1s 2.4s ease-out forwards;
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
  @media (min-width: 569px) and (max-width: 1279px) {
    width: 300px;
  }
  @media (max-width: 568.99px) {
    width: 210px;
  }
`;
const Description = styled.h5`
font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0px;
  margin: 0;
  @media (min-width: 569px) and (max-width: 1279px) {
    font-size: 16px;
    letter-spacing: 0.25px;
  }
  @media (max-width: 568.99px) {
    font-size: 14px;
    letter-spacing: 0.25px;
  }
`;

function TextIntro() {
  return (
    <Container>
      <ContainerTitle>
        <Title>Hi, I'm</Title>
        <Line>
          <Title>Federica</Title>
          <Title style={{ color: "#ECA72C" }}>.</Title>
        </Line>
      </ContainerTitle>
      <ContainerDescription>
        <Description>
          I am a curious individual, a human observer and a communication
          designer based in Milan. I'd like to create inclusive experiences that
          positively impact people.
        </Description>
      </ContainerDescription>
    </Container>
  );
}

export default TextIntro;
