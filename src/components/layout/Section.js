import tw, { styled } from 'twin.macro';
import { layoutVariants, sectionVariants } from '../../../styles/stylesData';

const StyledSection = styled.section(() => [
  tw`
    py-14
    md:py-20
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
