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

function PictureCardTitleRight(props) {
  return (
    <Container>
      <MyLink to={props.to}>
        <PictureCard {...props} />
      </MyLink>
      <TitleVertical {...props} />
    </Container>
  );
}

export default PictureCardTitleRight;
