import React from "react";
import styled from "@emotion/styled";

const Image = styled.img`
  width: 464px;
  height: 568px;
  animation: fadeIn ease 5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (min-width: 569px) and (max-width: 1024.99px) {
    width: 340px;
    height: 416.33px;
  }

  @media (max-width: 568.99px) {
    width: 240px;
    height: 294.08px;
  }
`;

export default function IntroPic() {
  return <Image src={require("../assets/images/home/me.jpg")} />;
}
