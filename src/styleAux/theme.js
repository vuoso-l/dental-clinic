export const color = {
  titleHeader: "white",
  titleLightCard: "#161616",
  titleDarkCard: "#FAFAFA",
  bgLightPrimary: "white",
  bgDarkPrimary: "black",
  bgLightCard: "white",
  bgDarkCard: "#161616",
  lightParagraph: "#161616",
  darkParagraph: "#FAFAFA",
  lightButton: "white",
  darkButton: "#161616",
  bgLightButton: "#161616",
  bgDarkButton: "aliceblue",
  buttonHover: "radial-gradient(rgb(61, 61, 240), #3f87a6)",
  aFooter: "#3f87a6",
  bgNavigationHome: "#ffc107",
};

export const displayFlex = (display, direction, justifyContent, alignItem) => {
  return `
    display: ${display};
    flex-direction: ${direction};
    justify-content: ${justifyContent};
    align-items: ${alignItem};
    `;
};

export const backgroundHeader = (url) => {
  return `
    background: ${color.bgLightCard} url(${url}) no-repeat;
    background-size: cover;    
    `;
};
