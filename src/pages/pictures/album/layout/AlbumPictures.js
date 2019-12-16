import React, { useState } from "react";
import { useSprings, animated, interpolate } from "react-spring";
import { useGesture } from "react-with-gesture";
import styled from "@emotion/styled";

const ContainerPics = styled(animated.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  will-change: transform;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 0, 0, 0);
`;

const Picture = styled(animated.div)`
  background-color: rgb(0, 0, 0, 0);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  width: 40%;
  height: 70%;
  will-change: transform;
  border-radius: 10px;
  cursor: grab;
  :active {
    cursor: grabbing;
  }
  @media (min-width: 569px) and (max-width: 1279px) {
    width: 50%;
    height: 80%;
  }
  @media (max-width: 568.99px) {
    width: 80%;
    height: 60%;
  }
`;

const to = i => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100
});
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
const trans = (r, s) =>
  `perspective(0) rotateX(30deg) rotateY(${r /
    10}deg) rotateZ(${r}deg) scale(${s})`;

export default function AlbumPictures({ pics = [] }) {
  const [gone] = useState(() => new Set());
  const [props, set] = useSprings(pics.length, i => ({
    ...to(i),
    from: from(i)
  }));
  const bind = useGesture(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity
    }) => {
      const trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1;
      if (!down && trigger) gone.add(index);
      set(i => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;
        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);
        const scale = down ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 }
        };
      });
      if (!down && gone.size === pics.length)
        setTimeout(() => gone.clear() || set(i => to(i)), 600);
    }
  );
  return props.map(({ x, y, rot, scale }, i) => (
    <ContainerPics
      key={i}
      style={{
        transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`)
      }}
    >
      <Picture
        {...bind(i)}
        style={{
          transform: interpolate([rot, scale], trans),
          backgroundImage: `url(${pics[i]})`
        }}
      />
    </ContainerPics>
  ));
}
