import tw, { styled } from 'twin.macro';
import { headingVariants, textAlignVariants } from '../../data';

const StyledHeading = styled.h1(() => [
  tw`
    text-primary-dark
    font-extrabold
    tracking-tight
  `,
  ({ align = 'left' }) => textAlignVariants[align],
  ({ variant = 'page' }) => headingVariants[variant],
]);

const Heading = ({ align, variant, children }) => {
  return (
    <StyledHeading align={align} variant={variant}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
