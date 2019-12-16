import React from "react";
import styled from "@emotion/styled";
import AboutLayout from "./layout/AboutLayout";
import MenuProjects from "./layout/MenuProjects";

const pics = [
  require("../../../assets/images/project1/page1.png"),
  require("../../../assets/images/project1/page2.png"),
  require("../../../assets/images/project1/page3.png"),
  require("../../../assets/images/project1/page4.png")
];
const cover = [require("../../../assets/images/project1/cover.png")];

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

export default function Remikks() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Container>
        <AboutLayout
          cover={cover[0]}
          title="Remikks"
          year="2017"
          course="Metadesign – Studio"
          tags="UX, UI, design research"
          about="“REMIKKS” is an application concerning musical events, 
        which allows the user to receive invitations related to his interests. 
        The app was created in response to the need to have a means of communication 
        capable of filtering information based on user interests, enhancing the event. 
        This is possible thanks to targeted profiling in the registration phase."
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
