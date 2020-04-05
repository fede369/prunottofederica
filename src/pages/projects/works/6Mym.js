import React from "react";
import styled from "@emotion/styled";
import AboutLayout from "./layout/AboutLayout";
import MenuProjects from "./layout/MenuProjects";

const pics = [
  require("../../../assets/images/project6/page1.png"),
  require("../../../assets/images/project6/video.gif")
];
const cover = [require("../../../assets/images/project6/cover.png")];

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
  @media (max-width: 568.99px) {
    margin-top: 30px;
  }
`;

const Image1 = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh;
  width: 100%;
  margin-top: 60px;
  @media (min-width: 569px) and (max-width: 1279px) {
    height: 60vh;
    margin-top: 50px;
  }
  @media (max-width: 568.99px) {
    height: 40vh;
    margin: 0;
  }
`;

export default function Mym() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Container>
        <AboutLayout
          cover={cover[0]}
          title="MYM"
          year="2019"
          info="Course"
          course="Project carried out with Maria Anghileri"
          tags="UI, graphic design"
          about="MYM is the graphical interface for a training application. 
        The project was carried out in collaboration with Maria Anghileri. 
        The idea is to offer the choice between training programs based on mood. 
        A few minutes of training with instructions shown in nice illustrations 
        that help you better understand the performance of the exercise."
        />
        <Gallery>
          <Image1
            style={{ backgroundImage: `url(${pics[1]})`, height: "80vh" }}
          />
          <Image1
            style={{ backgroundImage: `url(${pics[0]})`, marginTop: "150px" }}
          />
        </Gallery>
        <MenuProjects />
      </Container>
    </div>
  );
}
