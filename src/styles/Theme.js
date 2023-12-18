const COLORS = {
  primary: "#100f0f",
  secondary: "#dfa839",
  tertiary: "#ffd174ff",
  bg: "#161514",

  gray: "#9a9082",
  lightGray: "#c8c4c0",
  darkGray: "#363636",

  white: "#f8f6f3",
  lightWhite: "#fcfbfa",
};

const FONTS = {
  VZR: "Vazirmatn-Regular",
  VZM: "Vazirmatn-Medium",
  VZB: "Vazirmatn-Bold",
  Entezar: "Entezar",
  YekanR: 'IR-Yekan-Regular',
  YekanB: 'IR-Yekan-Bold',
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONTS, SIZES, SHADOWS };