import React from "react";
import styled from "@emotion/styled";
import TitleVertical from "./TitleVertical";
import PictureCard from "./PictureCard";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const MyLink = styled(Link)`
  text-decoration: none;
`;

function PictureCardTitleLeft(props) {
  return (
    <Container>
      <TitleVertical {...props} />
      <MyLink to={props.to}>
        <PictureCard {...props} />
      </MyLink>
    </Container>
  );
}

export default PictureCardTitleLeft;
