import tw, { styled } from 'twin.macro';
import { LinkButton, SloganSticker } from '..';
import { GridColumn, GridContainer, Section } from '../layout';
import { BlockQuote, TextIcon } from '../typography';
import { GiCoffeePot } from 'react-icons/gi';

const Wrapper = tw.main`
  // adjust spacing in mobile
  py-5
  md:p-0
`;

const SloganWrapper = tw.div`
  hidden
  relative
  md:flex
  md:flex-col
  md:h-full
  md:justify-end
  md:items-center
  md:bottom-0
  md:right-10
  xl:-bottom-8
`;

const SublineWrapper = tw.div`
  text-primary-dark
  text-lg
  font-medium
  pt-6
  pb-10
  pr-10
  md:pr-20
  md:pt-10
  md:text-xl
  xl:text-2xl
`;

const CTA = tw.footer`
  md:mt-6
`;

const ProjectQuote = () => {
  return (
    <Section>
      <Wrapper>
        <GridContainer noGap>
          <GridColumn col="span-10">
            <BlockQuote noMargin subline="Dave Gray (@yesdavidgray)">
              Strive for Progress, Not Perfection.
            </BlockQuote>
          </GridColumn>
        </GridContainer>
      </Wrapper>
    </Section>
  );
};

export default ProjectQuote;
