export const defaultTheme = {
    colorBlackForText: "#333333",
    colorWhite: "#ffffff",
    colorGray: "#f6f6f6",
    colorForLightBackground: "#fff6d9",
    colorForDarkBackground: "#ffeead",
    colorForButton: "#ff732B",
    colorForButtonHover: "#F35714",
    pagePadding: "90px",
    indent: "20px",
    fontFamily: '"Roboto", "Arial", sans-serif',
    fontSizeDefault: "18px",
    footerHeight: "80px",
    pageWidth: "1280px"
  };

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
};