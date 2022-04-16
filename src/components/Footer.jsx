import { FooterStyle } from "../stylesComponents/FooterStyle";

import SocialNetwork from "./SocialNetwork";

export const Footer = () => {
  return (
    <FooterStyle>
      <SocialNetwork
        url="https://www.linkedin.com/in/vuoso-l/"
        socNetName="LinkedIn"
      >
        LinkedIn
      </SocialNetwork>
      <SocialNetwork url="https://github.com/vuoso-l/" socNetName="GitHub">
        GitHub
      </SocialNetwork>
      <p>vuosolucas@gmail.com</p>
    </FooterStyle>
  );
};
