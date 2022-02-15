import tw, { styled } from 'twin.macro';
import { layoutVariants, sectionVariants } from '../../../styles/stylesData';

const StyledSection = styled.section(
  ({ relative, noTopMargin, noBottomMargin, halfMargin }) => [
    tw`
    py-14
    md:py-28
    xl:py-44
    border-primary-dark
  `,
    relative && tw`relative`,
    noTopMargin && tw`pt-0 md:pt-0 xl:pt-0`,
    noBottomMargin && tw`pb-0 md:pb-0 xl:pb-0`,
    halfMargin && tw`md:py-14 xl:py-20`,
    ({ variant = 'default' }) => sectionVariants[variant],
    ({ layout = '' }) => layoutVariants[layout],
  ],
);

const Section = ({
  variant,
  layout,
  relative,
  noTopMargin,
  noBottomMargin,
  halfMargin,
  children,
}) => {
  return (
    <StyledSection
      variant={variant}
      layout={layout}
      {...{ relative, noTopMargin, noBottomMargin, halfMargin }}
    >
      {children}
    </StyledSection>
  );
};

export default Section;
