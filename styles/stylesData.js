// Keeping things DRY - reusable variants
import tw from 'twin.macro';

export const uniformTransition = tw`transition-all delay-75 duration-300 ease-out hover:(ease-in duration-200)`;

export const paragraphMargin = '1.25rem';

export const sectionPaddingY = tw`py-14 md:py-28 xl:py-44`;
export const sectionPaddingB = tw`pb-14 md:pb-28 xl:pb-44`;
export const sectionPaddingT = tw`pt-14 md:pt-28 xl:pt-44`;

export const pagesHeroMax = tw`lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl lg:mx-auto`;

export const bgColorVariants = {
  teal: tw`bg-accent-teal`,
  olive: tw`bg-accent-olive`,
  pink: tw`bg-accent-pink`,
  purple: tw`bg-accent-purple`,
  blue: tw`bg-accent-blue`,
  gray: tw`bg-accent-gray`,
  yellow: tw`bg-accent-yellow`,
  dark: tw`bg-primary-dark`,
  darkest: tw`bg-primary-darkest`,
  light: tw`bg-primary-light`,
  white: tw`bg-white`,
  white50: tw`bg-white/50`,
  black5: tw`bg-black/5`,
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

export const roundVariants = {
  pill: tw`rounded-full`,
  square: tw`rounded-sm`,
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
  'justify-md': tw`text-left md:text-justify`,
  'justify-xl': tw`text-left xl:text-justify`,
  autoL: tw`text-center md:text-left`,
  autoR: tw`text-center md:text-right`,
};

export const fontStyleVariants = {
  light: tw`font-light`, // 300
  normal: tw`font-normal`, // 400
  medium: tw`font-medium`, // 500
  semibold: tw`font-semibold`, //600
  bold: tw`font-bold`, // 700
  extrabold: tw`font-extrabold`, // 800
  black: tw`font-black`, // 900
  italic: tw`italic`,
  'italic-bold': tw`font-bold italic`,
};

export const fontSizeVariants = {
  paragraph: tw`text-base leading-relaxed md:text-lg xl:text-xl xl:leading-9`,
  base: tw`text-sm md:text-base`, // 1rem
  sm: tw`text-sm`, // 0.875rem
  xs: tw`text-xs`, // 0.75rem
  lg: tw`text-lg`, // 1.125rem
  xl: tw`text-xl`, // 1.25rem
  '2xl': tw`text-2xl`, // 1.5rem
  '3xl': tw`text-3xl`, // 1.875rem
  '4xl': tw`text-4xl`, // 2.25rem
  '5xl': tw`text-5xl`, // 3rem
};

const monoBase = `font-mono uppercase text-base tracking-widest md:text-xl xl:text-2xl`;

export const headingVariants = {
  page: tw`text-5xl md:text-[5.5rem] lg:text-8xl xl:text-9xl`,
  sm: tw`text-4xl md:text-6xl`,
  xs: tw`font-bold text-2xl md:text-3xl xl:text-4xl`,
  card: tw`font-bold text-xl xl:text-2xl`,
  mono: tw`${monoBase} font-normal`,
  monoBold: tw`${monoBase} font-bold`,
};

export const sectionVariants = {
  default: tw`border-t border-b`,
  top: tw`border-t`,
  clean: tw`border-0`,
};

const gridGap = `gap-x-5 md:gap-x-8 xl:gap-x-10`;

export const layoutVariants = {
  grid: tw`grid grid-cols-4 md:grid-cols-12 ${gridGap}`,
  'grid-xy': tw`grid grid-cols-4 gap-x-5 md:grid-cols-12 md:gap-8 xl:gap-10`,
  'grid-cols-8': tw`grid md:grid-cols-8 ${gridGap}`,
  'subgrid-cols-3': tw`grid grid-cols-1 md:grid-cols-3 gap-4`,
};

export const gridRowVariants = {
  'rows-1': tw`grid-rows-1`,
  'rows-2': tw`grid-rows-2`,
  'rows-3': tw`grid-rows-3`,
  'rows-4': tw`grid-rows-4`,
  'rows-5': tw`grid-rows-5`,
  'rows-6': tw`grid-rows-6`,
  'rows-none': tw`grid-rows-none`,
};

export const gridColVariants = {
  'span-1': tw`col-span-1`,
  'span-2': tw`md:col-span-2`, // 12/2
  'span-3': tw`md:col-span-3`, // 12/3
  'span-4': tw`md:col-span-4`, // third 12/4
  'span-5': tw`md:col-span-5`, // 12/5
  'span-6': tw`md:col-span-6`, // half 12/6
  'span-7': tw`md:col-span-7`, // 12/7
  'span-8': tw`md:col-span-8`, // 12/8
  'span-8-6': tw`md:col-span-8 2xl:col-span-6`,
  'span-9': tw`md:col-span-9`, // 12/9
  'span-9-7': tw`md:col-span-9 lg:col-span-7 `, // 12/9
  'span-10': tw`md:col-span-10`, // 12/10
  'span-10-8': tw`md:col-span-10 xl:col-span-8`, // 12/10
  auto: tw`md:col-auto`,
  full: tw`md:col-span-full`,
};

export const gridColStartVariants = {
  'start-1': tw`col-start-1`,
  'start-2': tw`col-start-2`,
  'start-md-2': tw`col-start-1 md:col-start-2`,
  'start-3': tw`col-start-3`,
  'start-md-3': tw`col-start-1 md:col-start-3`,
  'start-4': tw`col-start-2 md:col-start-4`,
  'start-md-4': tw`col-start-1 md:col-start-4`,
  'start-5': tw`col-start-1 md:col-start-5`,
  'start-6': tw`col-start-1 md:col-start-6`,
  'start-7': tw`col-start-1 md:col-start-7`,
  'start-8': tw`col-start-1 md:col-start-8`,
  'start-9': tw`col-start-1 md:col-start-9`,
  'start-10': tw`col-start-1 md:col-start-10`,
  'start-11': tw`col-start-1 md:col-start-11`,
  'start-12': tw`col-start-1 md:col-start-12`,
};

export const gridColAlignVariants = {
  left: tw`justify-self-start`,
  right: tw`justify-self-end`,
  center: tw`justify-self-center`,
};

export const iconSizeVariants = {
  normal: tw`text-4xl w-20 h-20 md:text-5xl md:w-24 md:h-24 xl:text-6xl xl:w-36 xl:h-36`,
  sm: tw`text-2xl w-14 h-14 xl:text-3xl xl:w-20 xl:h-20`,
  lg: tw`text-4xl w-20 h-20 md:text-6xl md:w-36 md:h-36 lg:text-7xl lg:w-44 lg:h-44 xl:text-8xl xl:w-56 xl:h-56 `,
};
