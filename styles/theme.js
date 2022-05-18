/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

const breakpoints = ["1em", "30em", "45em", "64em", "80em", "86em", "100em"];

const [xs, sm, md, xm, lg, ml, xl] = breakpoints;
breakpoints.xs = xs;
breakpoints.sm = sm;
breakpoints.md = md;
breakpoints.xm = xm;
breakpoints.lg = lg;
breakpoints.ml = ml;
breakpoints.xl = xl;

// #endregion
// #region typography

const fonts = {
  primary: "Nunito",
};
// #endregion
// #region colors
const colorSets = [
  {
    name: "primary", // blue default
    colors: [
      { name: 500, hex: "#204ECF" },
      { name: 600, hex: "#15389A" },
      { name: 700, hex: "#0D2978" },
    ],
  },
  {
    name: "secondary",
    colors: [
      { name: 100, hex: "#DCE5FF" },
      { name: 500, hex: "#92ECD6" },
      { name: 1000, hex: "#535765" },
    ],
  },
  {
    name: "background",
    colors: [
      { name: 50, hex: "#FAFAFA" },
      { name: 300, hex: "#996BFF" },
      { name: 100, hex: "#EDF5FE" },
    ],
  },

  {
    name: "blue",
    colors: [
      { name: 100, hex: "#DCE5FF" },
      { name: 200, hex: "#8DA3E3" },
      { name: 300, hex: "#403BCB" },
    ],
  },
  {
    name: "purple",
    colors: [
      { name: 200, hex: "#7A1BC5" },
      { name: 300, hex: "#867BFF" },
    ],
  },

  {
    name: "red",
    colors: [
      { name: 100, hex: "rgba(253, 120, 61, 1)" },
      { name: 300, hex: "#E34444" },
      { name: 500, hex: "#f44336" },
    ],
  },
  {
    name: "blue",
    colors: [
      { name: 10, hex: "#DCE5FF" },
      { name: 50, hex: "#EDF5FE" },
      { name: 100, hex: "#92ECD6" },
      { name: 300, hex: "#403BCB" },
    ],
  },
  {
    name: "yellow",
    colors: [
      { name: 100, hex: "#FFC955" },
      { name: 600, hex: "#F2CB00" },
      { name: 700, hex: "#D4A373" },
    ],
  },

  {
    name: "gray",
    colors: [
      { name: 50, hex: "#E2E2E2" },
      { name: 100, hex: "#828694" },
      { name: 200, hex: "#333C54" },
      { name: 300, hex: "#535765" },
      { name: 400, hex: "#E9E9E9" },
      { name: 500, hex: "#F5F5F5" },
      { name: 700, hex: "#697173" },
      { name: 800, hex: "#E7E7E7" },
      { name: 900, hex: "#F0F0F0" },
    ],
  },
  {
    name: "darkblue",
    colors: [{ name: 500, hex: "#050E29" }],
  },
  {
    name: "darkgray",
    colors: [{ name: 500, hex: "#0F1935" }],
  },
];

export const colors = colorSets.reduce(
  (colorMap, { name, alias = name, colors: colorSet }) => {
    const color = {};
    const cm = colorMap;
    for (let colorIndex = 0; colorIndex < colorSet.length; colorIndex++) {
      const { name: colorName, hex } = colorSet[colorIndex];
      color[colorIndex] = hex;
      color[colorName] = hex;
    }
    cm[name] = color;
    cm[alias] = color;
    return cm;
  },
  {
    // ...defaultTheme.colors,
    white: "#FFFFFF",
    "white.0": "#FFFFFF",
    black: "#000000",
    "black.0": "#000000",
  }
);

// #endregion
const radii = {
  small: "0.125rem",
  normal: "0.1875rem",
  large: "0.375rem",
  full: "10rem",
  square: 0,
};
const zIndices = {
  modal: 2000,
  tooltip: 5000,
  toast: 7000,
};

const shadows = [
  { name: "none", shadow: undefined },
  { name: "sm", shadow: "0 .075rem .15rem rgba(0,0,0,.15)" },
  { name: "xl", shadow: "0 0 1rem rgba(0,0,0,.15)" },
].reduce((shadowSet, { name, shadow }, index) => {
  const s = shadowSet;
  s[name] = shadow;
  s[index] = shadow;
  return s;
});

export const theme = {
  // ...defaultTheme,
  breakpoints,
  radii,
  colors,
  zIndices,
  shadows,
  fonts,
};
