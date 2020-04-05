import React from "react";
import styled from "@emotion/styled";
import AboutLayout from "./layout/AboutLayout";
import MenuProjects from "./layout/MenuProjects";

const pics = [
  require("../../../assets/images/project7/page1.png"),
];
const cover = [require("../../../assets/images/project7/cover.png")];

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
    height: 280vh;
    margin-top: 50px;
  }
  @media (max-width: 568.99px) {
    height: 180vh;
    margin-top: 20px;
  }
`;

export default function Mise() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Container>
        <AboutLayout
          cover={cover[0]}
          title="MISE"
          year="2020"
          info="Contest"
          course='“LOGO-MISE” ideas competition'
          tags="Visul design, graphic design"
          about="The project aims to enhance the image of the Ministry
of Economic Development through a clear and effective representation of the
role played by the same in relation to the four areas of competence: Politics
Industrial, Internationalization Policy, Energy Policy and Policy for
communications. For this purpose, an in-depth search for the functions was carried out
carried out by the Ministry by analyzing the functional correlation in order to identify
effective and original graphic representations of its mission and value proposition.
From the analysis it emerged that the tree, a symbol of growth and transformation, well
represents the role of promoter and catalyst of the fundamental factors for the
economic development of the country covered by the Ministry of Economic Development.
The tree also combines economic development and respect for nature too
often opposed, suggesting a look at a future in which this contrast
position is outdated to protect the well-being of the country and its citizens in
an eco-sustainable perspective. The tree is then chosen as the pictogram representing
the four areas of competence mentioned above and summarized
visually in the four leaves that compose it.
"
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
