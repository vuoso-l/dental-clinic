import styled, { keyframes } from "styled-components";

import { device } from "../styleAux/deviceSize";

const rotateImage = keyframes`
0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(180deg);
    }
    100% {
      transform: rotateY(360deg);
    }
`;

export const ErrorContainer = styled.div`
  position: relative;
  padding: 20px 0;
  img {
    border-radius: 15px;
    height: 250px;
    animation: ${rotateImage} 3s infinite;
  }
  @media ${device.tablet} {
    padding: 100px 50px;
    img {
      position: inherit;
      top: calc(50% - 125px);
      left: calc(50% - 300px);
    }
  }
`;
