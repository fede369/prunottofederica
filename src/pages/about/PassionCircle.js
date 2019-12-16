import React from "react";
import styled from "@emotion/styled";
import { useSpring, animated } from "react-spring";

const Container = styled(animated.div)`
  width: 100px;
  height: 100px;
  display: flex;
  margin: 50px;
  flex-direction: column;
  align-items: center;

  @media (min-width: 569px) and (max-width: 1280px) {
    width: 70px;
    height: 70px;
    margin: 30px;
  }
  @media (max-width: 568.99px) {
    width: 65px;
    height: 65px;
    margin: 30px;
  }
`;
const Icon = styled.img`
  width: 100%;
  height: 100%;
  :hover ~ #text {
    display: block;
  }
`;

const IconText = styled.p`
  display: none;
  text-align: center;
  font-family: "Ubuntu", sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0px;
`;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.075
];
const trans = (x, y, s) => `perspective(250px) scale(${s})`;

export default function PassionCircle(props) {
  const [prop, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 600, friction: 40 }
  }));

  return (
    <Container
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: prop.xys.interpolate(trans) }}
    >
      <Icon src={props.src} alt=""></Icon>
      <IconText id="text">{props.text}</IconText>
    </Container>
  );
}
