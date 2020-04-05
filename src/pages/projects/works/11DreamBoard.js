import React from "react";
import styled from "@emotion/styled";
import AboutLayout from "./layout/AboutLayout";
import MenuProjects from "./layout/MenuProjects";

const pics = [
  require("../../../assets/images/project11/page1.png"),
];
const cover = [require("../../../assets/images/project11/cover1.png")];

const Container = styled.div`
  width: 100vw;
  height: auto;
  padding-bottom: 100px;
  @media (min-width: 569px) and (max-width: 1279px) {
    padding-bottom: 80px;
  }
  @media (max-width: 568.99px) {
    padding-bottom: 60px;
  }
`;

const Gallery = styled.div`
  height: auto;
  width: 100%;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image1 = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  height: 550vh;
  width: 100%;
  margin-top: 60px;
  @media (min-width: 569px) and (max-width: 1350px) {
    height: 280vh;
    margin-top: 50px;
  }
  @media (max-width: 568.99px) {
    height: 200vh;
    margin-top: 5px;
  }
`;

export default function DreamBoard() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Container>
        <AboutLayout
          cover={cover[0]}
          title="Dreamboard"
          year="2020"
          info="Work"
          course='Work commissioned by the Dreamboard team'
          tags="UI, visual design"
          about="The Dreamboard team asked me to create the starting page of their product with their graphics.
          Dreamboard is a web and app based tool that allows you to easily and securely log your dreams."
        />
        <Gallery>
          <Image1
            style={{ backgroundImage: `url(${pics[0]})` }}
          />
        </Gallery>
        <MenuProjects />
      </Container>
    </div>
  );
}
