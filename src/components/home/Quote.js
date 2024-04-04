import tw from 'twin.macro';
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

const Quote = () => {
  return (
    <Section>
      <Wrapper>
        <GridContainer noGap>
          <GridColumn col="span-10" relative>
            <BlockQuote noMargin>
              I enjoy problem-solving by integrating the visual and technical
              aspects of achieving purposeful, systematic UI and effective UX in
              every project.
            </BlockQuote>

            <SublineWrapper>
              <p>
                All projects are crafted with care and (powered by lots of)
                <span className="whitespace-nowrap">
                  {' '}
                  caffeine.
                  <TextIcon>
                    <GiCoffeePot />
                  </TextIcon>
                </span>
              </p>
            </SublineWrapper>
          </GridColumn>

          <GridColumn col="span-2">
            <SloganWrapper>
              <SloganSticker withLogo lg />
            </SloganWrapper>
          </GridColumn>
        </GridContainer>
        <CTA>
          <LinkButton url="/projects">Projects</LinkButton>
        </CTA>
      </Wrapper>
    </Section>
  );
};

export default Quote;
