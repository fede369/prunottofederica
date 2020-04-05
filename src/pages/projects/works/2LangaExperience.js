import React from "react";
import styled from "@emotion/styled";
import AboutLayout from "./layout/AboutLayout";
import MenuProjects from "./layout/MenuProjects";

const pics = [
  require("../../../assets/images/project2/logo.png"),
  require("../../../assets/images/project2/pag1.png"),
  require("../../../assets/images/project2/pag2.png"),
  require("../../../assets/images/project2/pag3.png")
];
const cover = [require("../../../assets/images/project2/cover.png")];

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
  width: 100vw;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image1 = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh;
  width: 100%;
  margin-top: 60px;
  @media (min-width: 569px) and (max-width: 1279px) {
    height: 50vh;
    margin-top: 50px;
  }
  @media (max-width: 568.99px) {
    height: 40vh;
    margin: 0;
  }
`;

export default function LangaExperience() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Container>
        <AboutLayout
          cover={cover[0]}
          title="LangaExperience"
          year="2018"
          info="Course"
          course="Strategies and Economic Project"
          tags="UX, UI, business plan"
          about="In the territory of Alba and “le Langhe” there is a very high 
        potential in tourism but is not exploited to its full potential. 
        The solution found is LangaExperience, the project of an application on 
        the territory of Alba and its surroundings, which helps producers, restaurateurs 
        and local companies to make themselves known and increase their earnings in exchange 
        for their contribution in making the tourist participate in the their business. 
        The idea is therefore to offer tourists different packages of experiences typical 
        of “le Langhe”. The goal is to give tourists the opportunity to experience quality
         with the possibility to choose between different areas."
        />
        <Gallery>
          <Image1 style={{ backgroundImage: `url(${pics[0]})` }} />
          <Image1 style={{ backgroundImage: `url(${pics[1]})` }} />
          <Image1 style={{ backgroundImage: `url(${pics[2]})` }} />
          <Image1 style={{ backgroundImage: `url(${pics[3]})` }} />
        </Gallery>
        <MenuProjects />
      </Container>
    </div>
  );
}
