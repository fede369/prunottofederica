import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 552px;
  height: 332px;
  margin: 0;
  background-color: black;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  box-shadow: 0 0 5px #000;
  :hover .overlay {
    opacity: 1;
    background: rgb(236, 167, 44, 0.7);
    & .title {
      transform: translateY(0px);
      margin-bottom: 0;
    }

    & .hr {
      width: 512px;
      transition-delay: 0.4s;
      @media (min-width: 700px) and (max-width: 1279px) {
        width: 283px;
      }
      @media (max-width: 699.99px) {
        width: 267px;
      }
    }

    & .year {
      transform: translateY(0px);
      transition-delay: 0.3s;
      opacity: 1;
    }

    & .description {
      transform: translateY(0px);
      transition-delay: 0.6s;
      opacity: 1;
    }
  }
  @media (min-width: 700px) and (max-width: 1279px) {
    width: 313px;
    height: 188px;
  }
  @media (max-width: 699.99px) {
    width: 287px;
    height: 188px;
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  background: rgba(250, 250, 250, 0.1);
  color: white;
  opacity: 1;
  transition: all 0.5s;
`;
const Item = styled.div`
  width: 512px;
  padding-right: 20px;
  padding-left: 20px;
  text-align: right;
  padding-bottom: 20px;
  @media (min-width: 700px) and (max-width: 1279px) {
    width: 283px;
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: 15px;
  }
  @media (max-width: 699.99px) {
    width: 267px;
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
  }
`;

const Div = styled.div`
  margin: 0;
`;

const Title = styled.h4`
  font-family: "Khula", sans-serif;
  font-size: 34px;
  font-weight: 800;
  letter-spacing: 1.5px;
  opacity: 1;
  transform: translateY(20px);
  transition: all 0.7s;
  margin-bottom: -60px;
  @media (min-width: 700px) and (max-width: 1279px) {
    font-size: 24px;
    letter-spacing: 0px;
  }
  @media (max-width: 699.99px) {
    font-size: 20px;
    letter-spacing: 0.25px;
  }
`;
const Line = styled.hr`
  display: block;
  width: 0;
  border: none;
  position: relative;
  margin-left: 0;
  border-bottom: solid 2px white;
  transition: all 0.4s;
`;

const Text = styled.p`
  font-family: "Ubuntu", sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;
  line-height: 10px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.7s;
  @media (max-width: 1279px) {
    font-size: 14px;
    letter-spacing: 0.25px;
  }
`;

export default function ProjectCard(props) {
  return (
    <Container style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      <Overlay className="overlay">
        <Item>
          <Div>
            <Title className="title">{props.title}</Title>
          </Div>
          <Div>
            <Text className="year">{props.year}</Text>
            <Line className="hr"></Line>
          </Div>
          <Div>
            <Text
              className="description"
              style={{ marginTop: "16px", lineHeight: "17px" }}
            >
              {props.description}
            </Text>
          </Div>
        </Item>
      </Overlay>
    </Container>
  );
}
