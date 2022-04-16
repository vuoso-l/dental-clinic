import { H1Style, H2Style } from "../stylesComponents/BasicTagsStyle";
import { HeaderStyle } from "../stylesComponents/HeaderStyle";

import { Navegation } from "./Navegation";

export const Header = () => {
  return (
    <>
      <HeaderStyle>
        <div>
          <H2Style>Dental clinic</H2Style>
          <H1Style>Backend view</H1Style>
        </div>
      </HeaderStyle>
      <Navegation />
    </>
  );
};
