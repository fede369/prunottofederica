import React from "react";
import styled from "@emotion/styled";

const ButtonContainer = styled.div`
  width: 40px;
  height: 40px;
  padding: 30px 100px;
  @media (min-width: 569px) and (max-width: 1279px) {
    padding: 20px 50px;
  }
  @media (max-width: 568.99px) {
    padding: 10px 20px;
  }
`;

const Circle = styled.span`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  background: rgb(236, 167, 44, 0);
  border-radius: 50%;
  :hover {
    background: #eca72c;
  }
`;

const Button = styled.button`
  outline: 0;
  border: none;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: border-box;
  border-style: none;
  cursor: pointer;
  position: relative;
  width: 24px;
  height: 20px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  overflow: visible;
  background: rgb(250, 250, 250, 0);

  div {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #ffffff;
    border-radius: 3px;
    opacity: 1;
    transition: all 0.3s linear;
    transform-origin: 1px;

    :first-child {
      transform-origin: 0% 0%;
      top: 0;
      transform: ${({ open }) =>
    open
      ? "translateX(15%) rotate(45deg)"
      : "translateX(0) rotate(0)"};
    }

    :nth-child(2) {
      top: 8px;
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    :nth-child(3) {
      transform-origin: 0% 100%;
      top: 16px;
      transform: ${({ open }) =>
    open
      ? "translateX(15%) rotate(-45deg)"
      : "translateX(0) rotate(0)"};
    }
  }
`;

export default function ButtonMenu({ open, onChildClick }) {
  function handleClick(event) {
    onChildClick(event.target.namen);
  }

  return (
    <ButtonContainer>
      <Circle open={open} onClick={handleClick}>
        <Button open={open}>
          <div></div>
          <div></div>
          <div></div>
        </Button>
      </Circle>
    </ButtonContainer>
  );
}
