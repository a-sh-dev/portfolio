const defaultTheme = require('tailwindcss/defaultTheme');

// For custom color variables
function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
        mono: ['Space Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        // transparent: 'transparent',
        // current: 'currentColor',
        'primary-light': withOpacityValue('--color-primary-light'),
        'primary-dark': withOpacityValue('--color-primary-dark'),
        'accent-teal': withOpacityValue('--color-accent-teal'),
        'accent-olive': withOpacityValue('--color-accent-olive'),
        'accent-gray': withOpacityValue('--color-accent-gray'),
        'accent-pink': withOpacityValue('--color-accent-pink'),
        'accent-blue': withOpacityValue('--color-accent-blue'),
        'accent-purple': withOpacityValue('--color-accent-purple'),
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
