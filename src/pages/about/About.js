import React from "react";
import styled from "@emotion/styled";
import ButtonResume from "./ButtonResume";
import PassionCircle from "./PassionCircle";

const Container = styled.div`
  width: auto;
  height: auto;
  background: #0a063b;
  padding: 150px 150px 200px;
  overflow-x: hidden;
  color: white;
  @media (min-width: 569px) and (max-width: 1280px) {
    padding: 80px 100px 200px;
  }
  @media (max-width: 568.99px) {
    padding: 60px 40px;
  }
`;
const ContainerTitlePage = styled.div`
  z-index: 9;
  position: fixed;
  left: 100px;
  bottom: 100px;
  display: block ruby;
  @media (min-width: 569px) and (max-width: 1280px) {
    left: 50px;
  }
  @media (max-width: 568.99px) {
    bottom: 50px;
    left: 20px;
  }
`;
const TitleKhula = styled.h2`
  font-family: "Khula", sans-serif;
  font-size: 48px;
  font-weight: 800;
  letter-spacing: 0.5px;
  margin: 0;
  line-height: 50px;
  bottom: 0;
  @media (min-width: 569px) and (max-width: 1280px) {
    font-size: 34px;
    letter-spacing: 1.5px;
  }
  @media (max-width: 568.99px) {
    font-size: 24px;
    letter-spacing: 0px;
  }
`;
const TitleMontserrat = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 48px;
  font-weight: 400;
  letter-spacing: 0.5px;
  margin: 0;
  line-height: 50px;
  bottom: 0;
  @media (min-width: 569px) and (max-width: 1280px) {
    font-size: 34px;
    letter-spacing: 1.5px;
  }
  @media (max-width: 568.99px) {
    font-size: 24px;
    letter-spacing: 0px;
  }
`;

const ContainerLayout = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  @media (min-width: 569px) and (max-width: 1280px) {
    margin-top: 50px;
  }

  @media (max-width: 568.99px) {
    flex-direction: column;
    margin-top: 60px;
    margin-bottom: 0;
  }
`;

const ColumnLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 568.99px) {
    width: 100%;
  }
  animation: fadeIn ease 2s forwards;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ColumnRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 568.99px) {
    width: 100%;
  }
  animation: fadeIn ease 2s forwards;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: "Khula", sans-serif;
  font-size: 96px;
  font-weight: 800;
  letter-spacing: 0px;
  margin: 0;
  line-height: 100px;
  margin-left: -4px;
  @media (min-width: 569px) and (max-width: 1280px) {
    font-size: 48px;
    letter-spacing: 0.5px;
    line-height: 52px;
  }
  @media (max-width: 568.99px) {
    font-size: 34px;
    letter-spacing: 1.5px;
    line-height: 38px;
  }
`;

const Line = styled.div`
  display: flex;
  flex-flow: row;
`;

const ContainerDescription = styled.div`
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
  @media (min-width: 569px) and (max-width: 1280px) {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  @media (max-width: 568.99px) {
    margin-bottom: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
const Description = styled.h5`
  font-family: "Ubuntu", sans-serif;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0px;
  margin: 0;
  line-height: 40px;
  @media (max-width: 1280px) {
    font-size: 14px;
    letter-spacing: 0.25px;
    line-height: 25px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: end;
  @media (max-width: 568.99px) {
    margin-top: 50px;
  }
`;
const ImageMe = styled.img`
  width: 80%;
  opacity: 1;
  animation: image 2.2s ease-out forwards;

  @keyframes image {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

const TitlePassion = styled.h2`
  font-family: "Khula", sans-serif;
  font-size: 60px;
  font-weight: 800;
  letter-spacing: 0.25px;
  margin: 0 0 50px 0;
  align-self: baseline;
  @media (min-width: 569px) and (max-width: 1280px) {
    font-size: 34px;
    letter-spacing: 1.5px;
  }
  @media (max-width: 568.99px) {
    font-size: 24px;
    letter-spacing: 0px;
    margin: 0 0 30px 0;
  }
`;

const ContainerPassions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px 0 100px;
  width: 80%;
  @media (min-width: 569px) and (max-width: 1280px) {
    margin: 30px 0 100px;
    width: 100%;
    align-items: baseline;
  }
  @media (max-width: 568.99px) {
    margin: 30px 0 100px;
    width: 100%;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 569px) and (max-width: 1280px) {
    align-items: baseline;
  }
  @media (max-width: 568.99px) {
    align-items: center;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 568.99px) {
    justify-content: center;
  }
`;

const ContainerButton = styled.div`
  margin-top: 50px;
`;

const Img = styled.img`
  height: 80%;
  width: 80%;
  @media (min-width: 569px) and (max-width: 1280px) {
    height: 70%;
    width: 70%;
  }
  @media (max-width: 568.99px) {
    height: 60%;
    width: 60%;
  }
`;

const ContainerWork = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  @media (min-width: 569px) and (max-width: 1280px) {
    margin-top: 0;
    margin-left: 30px;
  }
  @media (max-width: 568.99px) {
    margin-top: 0;
    margin-bottom: 100px;
    margin-left: 0;
  }
`;
const Link = styled.a`
  color: white;
  outline: 0;
  border: none;
  margin-top: 25px;
  margin-bottom: 25px;
  &:hover {
    color: #eca72c;
  }
  @media (min-width: 569px) and (max-width: 1280px) {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  @media (max-width: 568.99px) {
    margin-bottom: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
const H5Medium = styled.h5`
  font-family: "Ubuntu", sans-serif;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0px;
  margin: 0;
  @media (max-width: 1280px) {
    font-size: 14px;
    letter-spacing: 0.25px;
  }
`;
const LinkBox = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (min-width: 569px) and (max-width: 1280px) {
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  @media (max-width: 568.99px) {
    margin-bottom: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export default function About() {
  return (
    <Container>
      <ContainerTitlePage>
        <TitleKhula>About</TitleKhula>
        <TitleMontserrat>me</TitleMontserrat>
      </ContainerTitlePage>

      <ContainerLayout>
        <ColumnLeft>
          <ContainerTitle>
            <Title>Nice to</Title>
            <Line>
              <Title>meet&nbsp;</Title>
              <Title style={{ color: "#ECA72C" }}> you</Title>
              <Title>!</Title>
            </Line>
          </ContainerTitle>
          <ContainerDescription>
            <Description>
              Hi, I’m Federica Prunotto! I was born in Alba, and for study
              reasons in 2016 I moved to Milan, where I attended the
              Communication Design course at the Politecnico. I’m interested in
              gaining experience in graphic design, editorial communication, web
              design, interface design and implementation. In my portfolio you
              can find some projects realized in these 3 years of university and
              a section dedicated to some photographic projects.
            </Description>
          </ContainerDescription>
        </ColumnLeft>

        <ColumnRight>
          <ImageContainer>
            <ImageMe src={require("../../assets/images/about.png")}></ImageMe>
          </ImageContainer>
        </ColumnRight>
      </ContainerLayout>

      <ContainerLayout style={{ marginBottom: "0" }}>
        <ColumnLeft>
          <ContainerPassions>
            <TitlePassion>My passions</TitlePassion>
            <Box>
              <Row>
                <PassionCircle
                  src={require("../../assets/icon/photo.svg")}
                  text="Take pictures"
                />
                <PassionCircle
                  src={require("../../assets/icon/travel.svg")}
                  text="Travel"
                />
              </Row>
              <Row>
                <PassionCircle
                  src={require("../../assets/icon/combat.svg")}
                  text="Combat"
                />
                <PassionCircle
                  src={require("../../assets/icon/ski.svg")}
                  text="Ski"
                />
              </Row>
              <Row>
                <PassionCircle
                  src={require("../../assets/icon/music.svg")}
                  text="Alternative music"
                />
                <PassionCircle
                  src={require("../../assets/icon/chill.svg")}
                  text="TV show and chilling"
                />
              </Row>
              <Row style={{ alignSelf: "center" }}>
                <ContainerButton>
                  <ButtonResume />
                </ContainerButton>
              </Row>
            </Box>
          </ContainerPassions>
        </ColumnLeft>

        <ColumnRight>
          <ContainerWork>
            <ContainerTitle>
              <Title>Let's Work</Title>
              <Title>Together</Title>
            </ContainerTitle>
            <ContainerDescription>
              <Description>
                I'm actively seeking opportunities.
                <br />
                Feel free to reach out for collaborations or just a friendly
                hello
              </Description>
            </ContainerDescription>
            <Link
              href="mailto: federica.prunotto@gmail.com"
              style={{ color: "#ECA72C" }}
            >
              <H5Medium>federica.prunotto@gmail.com</H5Medium>
            </Link>
            <LinkBox>
              <Link
                style={{
                  textDecoration: "none",
                  height: "55px",
                  width: "55px",
                  marginRight: "15px"
                }}
                href="https://www.linkedin.com/in/federica-prunotto-3a6b0513a/"
              >
                <Img src={require("../../assets/icon/linkedin.svg")} />
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  height: "55px",
                  width: "55px",
                  marginRight: "15px"
                }}
                href="https://www.instagram.com/camouflagedesignstudio/"
              >
                <Img src={require("../../assets/icon/insta.svg")} />
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  height: "55px",
                  width: "55px",
                  marginRight: "15px"
                }}
                href="https://dribbble.com/federicaprunotto"
              >
                <Img src={require("../../assets/icon/dribble.svg")} />
              </Link>
            </LinkBox>
          </ContainerWork>
        </ColumnRight>
      </ContainerLayout>
    </Container>
  );
}
