import React from "react";
import styled from "@emotion/styled";
import AboutLayout from "./layout/AboutLayout";
import MenuProjects from "./layout/MenuProjects";

const pics = [
  require("../../../assets/images/project9/page1.png"),
];
const cover = [require("../../../assets/images/project9/cover.png")];

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
  height: 500vh;
  width: 100%;
  margin-top: 60px;
  @media (min-width: 569px) and (max-width: 1279px) {
    height: 280vh;
    margin-top: 50px;
  }
  @media (max-width: 568.99px) {
    height: 200vh;
    margin-top: 20px;
  }
`;

export default function Saccisica() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Container>
        <AboutLayout
          cover={cover[0]}
          title="Saccisica"
          year="2020"
          info="Contest"
          course='Project carried out with Maria Anghileri'
          tags="Visul design, graphic design"
          about='Saccisica means splendid villas, towers, churches, cloisters and walls, but also canals and bodies of water which, 
          together with a typical nature of the lagoon environment and a traditional cuisine rich in simple and genuine flavors linked to the rhythms of nature, 
          offer a absolutely unique experience for the traveler.
We thus wondered which graphic element could effectively symbolically enclose itself
the different experiential opportunities offered by the Saccisica territory. The first thing we thought of was the stylized representation of the 
territory, therefore, considering where History, culture and traditions of the places have stratified, condensing, transforming themselves to emerge renewed today, we have
imagined the Municipalities as vital ganglia of the territory itself, which, connected by pulsating arteries, make up
that living and vital entity that is Saccisics.
So ganglia and arteries as points and lines or, also, as castles and walls, or villas and canals, to symbolize the
strength, industriousness and union of the territory.
To create the logo, we therefore started from the project of a framework that acts as an optimal support
for the various communication mediums, for this purpose we have used the geographical positions of the Municipalities, identified with squares, to 
symbolize the entrance doors to the Saccisica territory, doors then joined between
of them from thick lines to represent both the geography of the territory and the strength with which history and culture
shared unite, like solid walls, the different territorial realities.
Finally, to recall one of the elements characterizing the territory, the water, the different shades of blue were chosen to paint the "walls".
We have thus created a symbolic representation of the territory which, in a modern and evocative key,
respected the stylistic premises of essentiality and simplicity, avoiding the rigidity of a storied generalization
reotyped in favor of representative flexibility. Next to the graphic element was the writing
"Welcome Saccicica" made with a simple and easily readable font, the Bahnschrift.
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
