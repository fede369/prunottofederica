import React from "react";
import styled from "@emotion/styled";
import UncontrolledLottieLetter from '../../../element/AnimationLetter';
import UncontrolledLottieNotification from '../../../element/AnimationNotification';
import UncontrolledLottieLight from '../../../element/AnimationLight';
import UncontrolledLottiePhoto from '../../../element/AnimationPhoto';
import UncontrolledLottieMovie from '../../../element/AnimationMovie';
import UncontrolledLottieDownload from '../../../element/AnimationDownload';
import UncontrolledLottieBin from '../../../element/AnimationBin';
import UncontrolledLottieAddItem from '../../../element/AnimationAddItem';
import UncontrolledLottieGraph from '../../../element/AnimationGraph';
import UncontrolledLottieMusic from '../../../element/AnimationMusic';
import { Link } from "react-router-dom";


const Container = styled.div`
  width: auto;
  height: 100%;
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
const Title = styled.h1`
  font-family: "Khula", sans-serif;
  font-size: 96px;
  font-weight: 800;
  letter-spacing: 0px;
  margin: 0;
  line-height: 100px;
  color: white;
  margin: 0 0 100px;
  @media (min-width: 569px) and (max-width: 1279px) {
    font-size: 48px;
    letter-spacing: 0.5px;
    line-height: 52px;
  }
  @media (max-width: 568.99px) {
    font-size: 34px;
    letter-spacing: 1.5px;
    line-height: 36px;
    margin: 0 0 50px;
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

const MyLink = styled(Link)`
  text-decoration: none;
`;


function AnimationSection() {
  return (
    <Container>
      <Title>My Animation</Title>
      <MyLink to="/animations">
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
      </MyLink>
    </Container>
  );
}

export default AnimationSection;
