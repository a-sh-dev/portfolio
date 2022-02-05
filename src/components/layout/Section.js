import tw, { styled } from 'twin.macro';
import { layoutVariants, sectionVariants } from '../../data';

const StyledSection = styled.section(() => [
  tw`
    // container
    bg-accent-olive
    py-8
    border-primary-dark
  `,
  ({ variant = 'default' }) => sectionVariants[variant],
  ({ layout = '' }) => layoutVariants[layout],
]);

const Section = ({ variant, layout, children }) => {
  return (
    <StyledSection variant={variant} layout={layout}>
      {children}
    </StyledSection>
  );
};

export default Section;
