// Keeping things DRY - reusable variants
import tw from 'twin.macro';

export const uniformTransition = tw`transition-all duration-300`;
export const navTransition = tw`transition-all duration-100`;

export const bgColorVariants = {
  teal: tw`bg-accent-teal`,
  olive: tw`bg-accent-olive`,
  pink: tw`bg-accent-pink`,
  purple: tw`bg-accent-purple`,
  blue: tw`bg-accent-blue`,
  gray: tw`bg-accent-gray`,
  dark: tw`bg-primary-dark`,
  darkest: tw`bg-primary-darkest`,
  light: tw`bg-primary-light`,
  white: tw`bg-white`,
  white50: tw`bg-white/50`,
};

export const textColorVariants = {
  teal: tw`text-accent-teal`,
  olive: tw`text-accent-olive`,
  pink: tw`text-accent-pink`,
  purple: tw`text-accent-purple`,
  blue: tw`text-accent-blue`,
  gray: tw`text-accent-gray`,
  dark: tw`text-primary-dark`,
  darkest: tw`text-primary-darkest`,
  light: tw`text-primary-light`,
  white: tw`text-white`,
};

export const maxWidthVariants = {
  sm: tw`max-w-screen-sm`,
  md: tw`max-w-screen-md`,
  lg: tw`max-w-screen-lg`,
  xl: tw`max-w-screen-xl`,
  max: tw`max-w-screen-2xl`,
};

export const textAlignVariants = {
  left: tw`text-left`,
  center: tw`text-center`,
  right: tw`text-right`,
  justify: tw`text-justify`,
};

export const fontStyleVariants = {
  normal: tw`font-normal`,
  bold: tw`font-bold`,
  'semi-bold': tw`font-semibold`,
  'extra-bold': tw`font-extrabold`,
  italic: tw`italic`,
  'italic-bold': tw`font-bold italic`,
};

export const headingVariants = {
  page: tw`text-5xl md:text-8xl`,
  sm: tw`text-4xl md:text-6xl`,
};

export const sectionVariants = {
  default: tw`border-t border-b`,
  top: tw`border-t`,
};

export const layoutVariants = {
  grid: tw`grid grid-cols-4 gap-x-5 md:gap-x-7 md:grid-cols-12 xl:gap-x-10`,
};

export const gridColVariants = {
  'span-2': tw`md:col-span-2`, // 12/2
  'span-3': tw`md:col-span-3`, // 12/3
  'span-4': tw`md:col-span-4`, // third 12/4
  'span-5': tw`md:col-span-5`, // 12/5
  'span-6': tw`md:col-span-6`, // half 12/6
  'span-7': tw`md:col-span-7`, // 12/7
  'span-8': tw`md:col-span-8`, // 12/8
  'span-9': tw`md:col-span-9`, // 12/9
  'span-10': tw`md:col-span-10`, // 12/10
};

export const gridColStartVariants = {
  'start-1': tw`col-start-1`,
  'start-2': tw`col-start-2`,
  'start-3': tw`col-start-3`,
  'start-4': tw`col-start-4`,
  'start-5': tw`col-start-5`,
  'start-6': tw`col-start-6`,
  'start-7': tw`col-start-7`,
  'start-8': tw`col-start-8`,
  'start-9': tw`col-start-9`,
  'start-10': tw`col-start-10`,
  'start-11': tw`col-start-11`,
  'start-12': tw`col-start-12`,
};
