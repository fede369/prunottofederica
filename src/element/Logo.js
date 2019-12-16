import React from "react";
import styled from "@emotion/styled";

const LogoContainer = styled.div`
  width: 210px;
  padding: 30px 0;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  @media (min-width: 569px) and (max-width: 1280px) {
    padding: 20px 0;
  }
  @media (max-width: 568.99px) {
    padding: 10px 0;
    width: 40px;
  }
`;
const ContainerWebTablet = styled.div`
  display: flex;
  flex-flow: row;
  @media (max-width: 569px) {
    display: none;
  }
`;
const ContainerMobile = styled.div`
  flex-flow: row;
  display: none;
  @media (max-width: 569px) {
    display: flex;
  }
`;
const H5 = styled.h5`
  font-family: "Khula", sans-serif;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 0px;
  margin: 0;
`;
const H5Light = styled.h5`
  font-family: "Khula", sans-serif;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0px;
  margin: 0;
`;

export default function Logo() {
  return (
    <LogoContainer>
      <ContainerWebTablet>
        <H5>Federica</H5>
        <H5Light>Prunotto</H5Light>
      </ContainerWebTablet>
      <ContainerMobile>
        <H5>F</H5>
        <H5Light>P</H5Light>
      </ContainerMobile>
    </LogoContainer>
  );
}
