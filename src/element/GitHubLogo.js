import React from "react";
import styled from "@emotion/styled";
import logo from "../assets/icon/GitHub.svg";

const Icon = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  height: 50px;
  width: 50px;
  margin-top: 20px;
  margin-left: 52%;
  @media (min-width: 569px) and (max-width: 1279px) {
    margin-bottom: 20px;
  }
  @media (max-width: 568.99px) {
    height: 40px;
    width: 40px;
    margin-left: 0;
    padding-left: 20px;
  }
`;

export default function GitHubLogo(props) {
  return (
    <div>
      <a href={props.href}>
        <Icon style={{ backgroundImage: `url(${logo})` }} />
      </a>
    </div>
  );
}
