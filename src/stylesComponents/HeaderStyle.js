import styled from "styled-components";

import { device } from "../styleAux/deviceSize";
import { displayFlex, backgroundHeader } from "../styleAux/theme";

export const HeaderStyle = styled.header`
  ${displayFlex("flex", "column", "space-around", "center")};
  width: 100%;
  height: 200px;
  ${backgroundHeader(
    "https://res.cloudinary.com/lupevu/image/upload/v1650110114/headerImg_xl0krb.jpg",
  )};
  @media ${device.tablet} {
    height: 250px;
  }
  @media ${device.laptop} {
    height: 300px;
  }
  @media ${device.laptopM} {
    height: 350px;
  }
`;
