// Keeping things DRY - reusable variants
import tw from 'twin.macro';

export const bgColorVariants = {
  teal: tw`bg-accent-teal`,
  olive: tw`bg-accent-olive`,
  pink: tw`bg-accent-pink`,
  purple: tw`bg-accent-purple`,
  blue: tw`bg-accent-blue`,
};

export const maxWidthVariants = {
  sm: tw`max-w-screen-sm`,
  md: tw`max-w-screen-md`,
  lg: tw`max-w-screen-lg`,
  xl: tw`max-w-screen-xl`,
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
