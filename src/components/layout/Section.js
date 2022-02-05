import tw, { styled } from 'twin.macro';
import { sectionVariants } from '../../data';

const StyledSection = styled.section(() => [
  tw`
    container
    bg-accent-gray
    py-8
    border-primary-dark
  `,
  ({ variant = 'default' }) => sectionVariants[variant],
]);

const Section = ({ variant, children }) => {
  return <StyledSection variant={variant}>{children}</StyledSection>;
};

export default Section;
