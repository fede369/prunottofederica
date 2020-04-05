import React from "react";
import styled from "@emotion/styled";
import AboutLayout from "./layout/AboutLayout";
import MenuProjects from "./layout/MenuProjects";

const pics = [
  require("../../../assets/images/project10/page1.png"),
];
const cover = [require("../../../assets/images/project10/cover1.png")];

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
  height: 280vh;
  width: 100%;
  margin-top: 30px;
  @media (min-width: 569px) and (max-width: 1279px) {
    height: 130vh;
    margin-top: 20px;
  }
  @media (max-width: 568.99px) {
    height: 80vh;
    margin-top: 10px;
  }
`;

export default function Posterhero() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Container>
        <AboutLayout
          cover={cover[0]}
          title="PosterHeroes"
          year="2020"
          info="Contest"
          course='Contest on the theme of "decent work"'
          tags="Graphic design"
          about="One of the fundamental functions of the work is to define our social identity, 
          a representation of ourselves closely connected with what is called personal identity. 
          The identity characteristics, the result of complex relational processes, find in the workplace 
          a real laboratory in which the processes themselves are activated by what is at the basis of all 
          our perception, the difference. Whether they are gender, age, ethnicity, religion or sexual orientation, 
          it is the differences that activate that complex system of beliefs through which we perceive, judge and label the other from us, the different. 
          Thus the cultural codes through which we perceive and judge each other take shape; stereotypes. 
          But how can we overcome them? And how to establish relationships based on the principle of reality and knowledge 
          rather than on personal beliefs? The best way, perhaps, is to look as an external observer at that domain which generates 
          beliefs which is the culture to which we belong and, with it, to our family and social experiences. Mind you, we don't mean to repudiate them, 
          in them there is what we are, but we simply think that, as in a gedankenexperiment, [UU1] it is useful to try to distance oneself 
          by returning to a state of childish virginity, free from beliefs and prejudices , to be able to relate creatively and playfully with the other, 
          making the most of the diversity. So what we are proposing is a game, a simulation like in 
          counterfactual thinking through which you can get to know each other without prejudice or fear, but, perhaps, 
          the dream, isn't this really? Isn't it simulation? A risk free game in which the aspects censored in daily life are revealed 
          to us in fantastic stories, made of memories and emotions, which show us what hinders our harmonious integration into the surrounding reality. 
          This approach highlights creativity as a key factor in the solution of conflicts originating from diversity, but not only, it also highlights 
          how creativity can represent the new 'competence', if you can call it that, which will make man indispensable for take advantage of the enormous 
          potential of the technological revolution, therefore creativity as a way for self-realization in an increasingly complex and interconnected world."
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
