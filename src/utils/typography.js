import Typography from "typography";
import Wordpress2016 from "typography-theme-wordpress-2016";

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: "none",
    },
    "h1, h2, h3, h4, h5": {
    fontFamily: "'Coming Soon', cursive",
    color: "#ff6e37",
 },
    "a": {
      color: "#ff6e37"
    },
    ".title-first": {
      color: "hsla(0,0%,0%,0.85) !important"
    },
  };
};

delete Wordpress2016.googleFonts;

const typography = new Typography(Wordpress2016);

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
