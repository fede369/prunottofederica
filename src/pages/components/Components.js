import React from "react";
import styled from "@emotion/styled";
import TitlePage from "../../element/TitlePage";


const Container = styled.div`
  width: auto;
  height: auto;
  background: #0a063b;
  padding-top: 100px;
  padding-bottom: 100px;
  @media (min-width: 569px) and (max-width: 1279px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  @media (max-width: 568.99px) {
    padding-top: 60px;
    padding-bottom: 60px;
    min-height: 100vh;
  }
`;
const ContainerTitlePage = styled.div`
  z-index: 999px;
  position: fixed;
  left: 100px;
  bottom: 100px;
  @media (min-width: 569px) and (max-width: 1279px) {
    left: 50px;
  }
  @media (max-width: 568.99px) {
    bottom: 50px;
    left: 20px;
  }
`;

const ContainerIFrame = styled.div`
  margin-top: 50px;
  padding: 0 150px 150px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  @media (min-width: 1281px) and (max-width: 1871px) {
    padding-right: 100px;
    padding-left: 100px;
  }
  @media (min-width: 569px) and (max-width: 1279px) {
    margin-top: 40px;
    padding-right: 50px;
    padding-left: 50px;
  }
  @media (max-width: 568.99px) {
    margin-bottom: 60px;
    margin-top: 30px;
    padding-right: 20px;
    padding-left: 20px;
  }
`;

const IFrame = styled.iframe`
    width: 1280px;
    height: 1000px;
`


export default function Pictures() {
    return (
        <Container>
            <ContainerTitlePage>
                <TitlePage
                    style={{ color: "white" }}
                    title1="Story"
                    title2="book"
                />
            </ContainerTitlePage>
            <ContainerIFrame>
                <IFrame src="https://mycomponents.netlify.com"></IFrame>

            </ContainerIFrame>
        </Container>
    );
}
