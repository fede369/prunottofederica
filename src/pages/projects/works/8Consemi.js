import React from "react";
import styled from "@emotion/styled";
import AboutLayout from "./layout/AboutLayout";
import MenuProjects from "./layout/MenuProjects";

const pics = [
  require("../../../assets/images/project8/page1.png"),
];
const cover = [require("../../../assets/images/project8/cover1.png")];

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
  height: 400vh;
  width: 100%;
  margin-top: 60px;
  @media (min-width: 569px) and (max-width: 1279px) {
    height: 200vh;
    margin-top: 50px;
  }
  @media (max-width: 568.99px) {
    height: 150vh;
    margin-top: 30px;
  }
`;

export default function Consemi() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Container>
        <AboutLayout
          cover={cover[0]}
          title="Consemi"
          year="2020"
          info="Contest"
          course='Competition of ideas for the creation of the logo CONSEMI'
          tags="Visul design, graphic design"
          about='The project aims to create an iconic visual element that represents the
values and identity of CONSEMI - Seed house of the Veneto.
To this end, it was decided to create a graphic element that reflects in a key
the values of biodiversity, health and economic sustainability are modern
with a view to connecting and integrating the different skills of the
territorial supply chains in agriculture.
The basic consideration that inspired the work was the delicate balance
which binds agricultural activity, the environment and human health, a balance that, for
be respected, cannot be separated from the territory in which the activity itself takes place
develops. The characterizing elements of the logo were color and symbolism according to the following criteria:
The green color, declined in its different shades, wants to be a clear
reference to nature and its biodiversity.
The ellipse shape of the graphic symbol which dynamically expands, represents
feel, stylizing it, both the shape of the seed and its growth.
The letter "S", turned upside down, recalling the symbol of infinity, recalls the
cyclical succession of the seasons and the evolution of the seed to fruit and again
in addition, the upward-facing concavity in which the seed received and kept becomes fruit symbolizes the hand of the caretaker man aware of the
nature.
'
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
