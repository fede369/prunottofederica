import React from "react";
import styled from "@emotion/styled";
import TitlePage from "../../element/TitlePage";
import UncontrolledLottieLetter from '../../element/AnimationLetter';
import UncontrolledLottieNotification from '../../element/AnimationNotification';
import UncontrolledLottieLight from '../../element/AnimationLight';
import UncontrolledLottiePhoto from '../../element/AnimationPhoto';
import UncontrolledLottieMovie from '../../element/AnimationMovie';
import UncontrolledLottieDownload from '../../element/AnimationDownload';
import UncontrolledLottieBin from '../../element/AnimationBin';
import UncontrolledLottieAddItem from '../../element/AnimationAddItem';
import UncontrolledLottieGraph from '../../element/AnimationGraph';
import UncontrolledLottieMusic from '../../element/AnimationMusic';

const Container = styled.div`
  width: auto;
  height: auto;
  background: #0a063b;
  padding-top: 100px;
  padding-bottom: 100px;
  @media (min-width: 569px) and (max-width: 1279px) {
    padding-top: 80px;
    padding-bottom: 80px;
    min-height: 100vh;
  }
  @media (max-width: 568.99px) {
    padding-top: 60px;
    padding-bottom: 150px;
  }
`;
const ContainerTitlePage = styled.div`
  position: fixed;
  left: 100px;
  z-index: 1;
  bottom: 150px;
  @media (min-width: 569px) and (max-width: 1279px) {
    bottom: 100px;
    left: 50px;
  }
  @media (max-width: 568.99px) {
    bottom: 50px;
    left: 20px;
  }
`;

const ContainerAnimation = styled.div`
  width: auto;
  height: 100%;
  z-index: 0;
  background: #0a063b;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-right: 250px;
  padding-left: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 569px) and (max-width: 1279px) {
    padding-top: 0;
    padding-bottom: 80px;
    padding-right: 50px;
    padding-left: 50px;
  }
  @media (max-width: 568.99px) {
    padding-top: 0;
    padding-bottom: 60px;
    padding-right: 20px;
    padding-left: 20px;
  }
`;


const ContainerRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 50px;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }
`;
const ContainerRow1 = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 50px;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    justify-content: center;
    margin-bottom: 10px;
  }
`;

const Description = styled.h5`
font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0px;
  margin: 15px;
  text-align: center;
  color: white;
  @media (min-width: 569px) and (max-width: 1279px) {
    font-size: 16px;
    letter-spacing: 0.25px;
  }
  @media (max-width: 568.99px) {
    font-size: 14px;
    letter-spacing: 0.25px;
  }
`;

export default function Animations() {
  return (
    <Container>
      <ContainerTitlePage>
        <TitlePage
          style={{ color: "white" }}
          title1="A selection"
          title2="of animations"
        />
      </ContainerTitlePage>
      <ContainerAnimation>
        <ContainerRow>
          <Description>
            Animations created in After Effects and thanks to LottieFiles Plugin exported in json files.
        </Description>
        </ContainerRow>
        <ContainerRow>
          <UncontrolledLottieLetter />
          <UncontrolledLottieNotification />
          <UncontrolledLottieLight />
        </ContainerRow>
        <ContainerRow1>
          <UncontrolledLottiePhoto />
          <UncontrolledLottieMovie />
        </ContainerRow1>
        <ContainerRow>
          <UncontrolledLottieDownload />
          <UncontrolledLottieBin />
          <UncontrolledLottieAddItem />
        </ContainerRow>
        <ContainerRow1>
          <UncontrolledLottieGraph />
          <UncontrolledLottieMusic />
        </ContainerRow1>
      </ContainerAnimation>
    </Container>
  );
}
