// Keeping things DRY - reusable variants
import tw from 'twin.macro';

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

export const headingVariants = {
  page: tw`text-5xl md:text-8xl`,
  sm: tw`text-4xl md:text-6xl`,
};

export const sectionVariants = {
  default: tw`border-t border-b`,
  top: tw`border-t`,
};

export const layoutVariants = {
  grid: tw`grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6`,
};
