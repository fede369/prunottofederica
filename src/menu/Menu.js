import React, { useState } from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

import ButtonMenu from "./ButtonMenu";
import FooterMenu from "./FooterMenu";
import Logo from "../element/Logo";

const Container = styled.div`
  z-index: 99;
  position: ${({ open }) => (open ? "fixed" : "relative")};
  overflow: ${({ open }) => (open ? "hidden" : "")};
  background-color: ${({ open }) => (open ? "#0A063B" : "rgb(0,0,0,0)")};
`;

const Navbar = styled.nav`
  background: #0a063b;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: ${({ open }) => (open ? "100vh" : "auto")};
`;

const ContainerButtonLogo = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
`;
const LogoLink = styled(NavLink)`
  color: white;
  cursor: pointer;
  text-decoration: none;
  padding-right: 100px;
  padding-left: 100px;
  outline: 0;
  border: none;
  :hover {
    color: #eca72c;
  }
  @media (min-width: 569px) and (max-width: 1279px) {
    padding-right: 50px;
    padding-left: 50px;
  }
  @media (max-width: 568.99px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`;
const DivLink = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-flow: column;
  align-items: flex-end;
  padding-top: 100px;
  background: #0a063b;
  @media (min-width: 569px) and (max-width: 1279px) {
    padding-top: 80px;
  }
  @media (max-width: 568.99px) {
    padding-top: 60px;
  }
`;

const ContainerLink = styled.ul`
  padding-right: 100px;

  @media (min-width: 569px) and (max-width: 1279px) {
    padding-right: 50px;
  }
  @media (max-width: 568.99px) {
    padding-right: 20px;
  }
`;

const LiItem = styled.li`
  list-style: none;
  text-align: right;
  margin: 0;
  opacity: 0;

  :first-child {
    animation: fadeIn ease 0.8s forwards;
    animation-delay: 0.1s;
  }

  :nth-child(2) {
    animation: fadeIn ease 0.8s forwards;
    animation-delay: 0.2s;
  }

  :nth-child(3) {
    animation: fadeIn ease 0.8s forwards;
    animation-delay: 0.3s;
  }

  :nth-child(4) {
    animation: fadeIn ease 0.8s forwards;
    animation-delay: 0.4s;
  }

  :nth-child(5) {
    animation: fadeIn ease 0.8s forwards;
    animation-delay: 0.5s;
  }
  :nth-child(6) {
    animation: fadeIn ease 0.8s forwards;
    animation-delay: 0.6s;
  }
  :nth-child(7) {
    animation: fadeIn ease 0.8s forwards;
    animation-delay: 0.7s;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      margin-right: -700px;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
      margin-right: 0;
    }
  }
`;
const NavItem = styled(NavLink)`
  padding: 0 12px;
  text-decoration: none;
  font-family: "Khula", sans-serif;
  font-size: 48px;
  font-weight: 800;
  letter-spacing: 0px;
  color: #ffffff;
  outline: 0;
  border: none;
  &:hover {
    color: #eca72c;
  }
  @media (min-width: 569px) and (max-width: 1279px) {
    font-size: 48px;
  }
  @media (max-width: 568.99px) {
    font-size: 30px;
    padding: 10px 0;
  }
`;

const ContainerFooter = styled.div`
  margin-top: 50px;
  opacity: 0;
  display: ${({ open }) => (open ? "inline" : "none")};
  animation: fadeIn ease 0.8s forwards;
  animation-delay: 0.6s;
  padding-right: 100px;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      margin-right: -700px;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
      margin-right: 0;
    }
  }
  @media (min-width: 569px) and (max-width: 1279px) {
    margin-top: 150px;
    padding-right: 50px;
  }
  @media (max-width: 568.99px) {
    margin-top: 100px;
    padding-right: 20px;
  }
`;

export default function Menu() {
  const [open, setOpen] = useState(false);

  function handleChildClick() {
    setOpen(!open);
  }
  function handleLogoClick() {
    if (open === true) {
      setOpen(false);
    }
  }

  return (
    <Container open={open} style={{ width: "100%" }}>
      <Navbar open={open}>
        <ContainerButtonLogo>
          <LogoLink to="/" onClick={handleLogoClick}>
            <Logo />
          </LogoLink>
          <ButtonMenu open={open} onChildClick={handleChildClick} />
        </ContainerButtonLogo>

        <DivLink open={open} onClick={handleChildClick}>
          <ContainerLink>
            <LiItem>
              <NavItem to="/">Home</NavItem>
            </LiItem>
            <LiItem>
              <NavItem to="/projects">My Projects</NavItem>
            </LiItem>
            <LiItem>
              <NavItem to="/pictures">My Pictures</NavItem>
            </LiItem>
            <LiItem>
              <NavItem to="/animations">My Animations</NavItem>
            </LiItem>
            <LiItem>
              <NavItem to="/components">My Components</NavItem>
            </LiItem>
            <LiItem>
              <NavItem to="/about">About Me</NavItem>
            </LiItem>
            <LiItem>
              <NavItem to="/whereiam">Where I Am</NavItem>
            </LiItem>
          </ContainerLink>
          <ContainerFooter open={open}>
            <FooterMenu />
          </ContainerFooter>
        </DivLink>
      </Navbar>
    </Container>
  );
}
