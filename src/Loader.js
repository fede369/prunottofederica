import React from "react";
import styled from "@emotion/styled";

const Page = styled.div`
  background: #0a063b;
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-self: center;

  div {
    :first-child {
      animation: show 1.5s linear infinite;
    }

    :nth-child(2) {
      animation: show 1.5s linear infinite;
      animation-delay: 1s;
      opacity: 0;
    }

    :nth-child(3) {
      animation: show 1.5s linear infinite;
      animation-delay: 2s;
      opacity: 0;
    }

    @keyframes show {
      0% {
        opacity: 0;
        transform: translateY(0);
      }
      30% {
        opacity: 0.5;
      }
      40% {
        opacity: 0.75;
        transform: translateY(20px);
      }
      50% {
        opacity: 1;
        transform: translateY(0px);
      }
      70% {
        opacity: 0.75;
        transform: translateY(-20px);
      }
      80% {
        opacity: 0.5;
      }
      100% {
        opacity: 0;
        transform: translateY(0);
      }
    }
  }
`;

const Ball = styled.div`
  margin: 10px;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  background: #eca72c;
  border-radius: 50%;
  @media (min-width: 569px) and (max-width: 1280px) {
    width: 40px;
    height: 40px;
  }
  @media (max-width: 568.99px) {
    width: 20px;
    height: 20px;
  }
`;

export default function Loader() {
  return (
    <Page>
      <Container>
        <Ball></Ball>
        <Ball></Ball>
        <Ball></Ball>
      </Container>
    </Page>
  );
}
