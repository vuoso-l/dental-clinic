import styled from "styled-components";

import { device } from "../styleAux/deviceSize";
import { displayFlex } from "../styleAux/theme";

export const ContainerStyle = styled.div`
  ${displayFlex("flex", "column", "center", "center")};
  max-width: 100%;
  width: 100%;
  padding: 20px 0px;
  @media ${device.tablet} {
    padding: 40px 0px;
  }
`;
