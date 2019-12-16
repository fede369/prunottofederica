import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.div`
  background: #0a063b;
  height: auto;
  width: auto;
`;
const Title = styled.h4`
  font-family: "Khula", sans-serif;
  font-size: 34px;
  font-weight: 800;
  letter-spacing: 1.5px;
  margin: 0;
  color: white;
  text-align: right;
  opacity: 0.6;
  margin-bottom: 15px;
  @media (min-width: 569px) and (max-width: 1279px) {
    font-size: 24px;
    letter-spacing: 0px;
    margin-bottom: 12px;
  }
  @media (max-width: 568.99px) {
    font-size: 20px;
    letter-spacing: 0.25px;
    margin-bottom: 8px;
  }
`;
const Email = styled.a`
  color: white;
  outline: 0;
  border: none;
  &:hover {
    color: #eca72c;
  }
`;
const EmailText = styled.h5`
  font-family: "Ubuntu", sans-serif;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0px;
  margin: 0;
  text-align: right;
  @media (max-width: 1279px) {
    font-size: 14px;
    letter-spacing: 0.25px;
  }
`;
const Caption = styled.p`
  font-family: "Ubuntu", sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.4px;
  margin: 0;
  color: white;
  text-align: right;
  opacity: 0.38;
  margin-top: 25px;
`;

export default function FooterMenu() {
  return (
    <FooterContainer>
      <Title>Let's Work Together!</Title>
      <Email href="mailto: federica.prunotto@gmail.com">
        <EmailText>federica.prunotto@gmail.com</EmailText>
      </Email>
      <Caption>© 2019 Federica Prunotto, all right reserved.</Caption>
    </FooterContainer>
  );
}
