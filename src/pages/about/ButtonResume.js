import React from "react";
import styled from "@emotion/styled";
import pdf from "../../assets/federica_prunotto_cv.pdf";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-with-gesture";

const Container = styled.div``;

const LinkButton = styled.a`
  text-decoration: none;
`;

const Button = styled(animated.button)`
  width: 105px;
  height: 40px;
  display: inline-block;
  text-align: center;
  color: #0a063b;
  background-color: #eca72c;
  border-style: none;
  font-family: "Ubuntu", sans-serif;
  font-size: 14px;
  font-weight: 800;
  flex-shrink: 0;
  cursor: pointer;
  border: solid 1px #eca72c;
  border-radius: 12px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
`;

export default function ButtonResume() {
  const [{ s }, set] = useSpring(() => ({
    s: [1],
    config: { mass: 1, tension: 800, friction: 5 }
  }));
  const bind = useGesture(({ down }) => {
    set({ s: down ? 1.1 : 1 });
  });

  return (
    <Container>
      <LinkButton href={pdf} download target="_blank">
        <Button
          {...bind()}
          class="fg"
          style={{ transform: s.interpolate(s => `scale(${s})`) }}
        >
          RESUME
        </Button>
      </LinkButton>
    </Container>
  );
}
