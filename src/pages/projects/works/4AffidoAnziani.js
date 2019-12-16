import React from "react";
import styled from "@emotion/styled";
import AboutLayout from "./layout/AboutLayout";
import MenuProjects from "./layout/MenuProjects";

const pics = [
  require("../../../assets/images/project4/page1.png"),
  require("../../../assets/images/project4/page2.png"),
  require("../../../assets/images/project4/page3.png"),
  require("../../../assets/images/project4/page4.png"),
  require("../../../assets/images/project4/video.gif")
];
const cover = [require("../../../assets/images/project4/cover2.png")];

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
  height: 200vh;
  width: 100%;
  margin-top: 60px;
  @media (min-width: 569px) and (max-width: 1279px) {
    height: 80vh;
    margin-top: 50px;
  }
  @media (max-width: 568.99px) {
    height: 60vh;
    margin-top: 30px;
  }
`;
const TitleSection = styled.h2`
  font-family: "Khula", sans-serif;
  font-size: 60px;
  font-weight: 800;
  letter-spacing: 0.25px;
  margin-top: 100px;
  margin-bottom: 0;
  padding-left: 100px;
  color: #0a063b;
  align-self: start;
  @media (min-width: 569px) and (max-width: 1279px) {
    margin-top: 50px;
    font-size: 34px;
    letter-spacing: 1.5px;
    padding-left: 50px;
  }
  @media (max-width: 568.99px) {
    margin-top: 30px;
    font-size: 24px;
    letter-spacing: 0px;
    padding-left: 20px;
  }
`;

export default function AffidoAnziani() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Container>
        <AboutLayout
          cover={cover[0]}
          title="Affido Anziani"
          year="2019"
          course="Final Synthesis Design Studio"
          tags="Communication system​"
          about="The “Affido anziani” project involves the realization of a communication 
        campaign for the service of the Municipality of Milan. In a first phase, two communicative 
        and informative artifacts were carried out. Later, in the second phase, three types of artefacts 
        were conceived for different purposes and aimed at the same target, the elderly. As a first objective, 
        we wanted to make fragile people aware of loneliness and two posters were created for this. Pursued with 
        postcards the service was promoted, little known in the city. And finally, thanks to the creation of 
        personalized playing cards, an attempt was made to stimulate the relationship between the person in charge 
        and the custodian."
        />
        <Gallery>
          <TitleSection>1. Communicate and inform</TitleSection>
          <Image1 style={{ backgroundImage: `url(${pics[0]})` }} />
          <TitleSection>2. Raising awareness</TitleSection>
          <Image1 style={{ backgroundImage: `url(${pics[1]})` }} />
          <TitleSection>3. Promote</TitleSection>
          <Image1 style={{ backgroundImage: `url(${pics[2]})` }} />
          <TitleSection>4. Stimulate</TitleSection>
          <Image1 style={{ backgroundImage: `url(${pics[3]})` }} />
          <Image1
            style={{ backgroundImage: `url(${pics[4]})`, height: "80vh" }}
          ></Image1>
        </Gallery>
        <MenuProjects />
      </Container>
    </div>
  );
}
