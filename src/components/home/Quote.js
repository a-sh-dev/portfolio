import tw, { styled } from 'twin.macro';
import { LinkButton, MainButton, SloganSticker } from '..';
import { GridColumn, GridContainer, Section } from '../layout';
import {
  BlockQuote,
  BodyIntro,
  Heading,
  Paragraph,
  TextIcon,
} from '../typography';
import { GiCoffeePot } from 'react-icons/gi';

const Wrapper = tw.main`
  // adjust spacing in mobile
  pt-5
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
`;

const SublineWrapper = tw.div`
  pt-6
  pb-10
  pr-10
  md:pr-20
`;

const CTA = tw.footer`
  mx-auto
  bg-purple-200/50
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
              <BodyIntro style="medium" noMargin>
                All projects are crafted with care and (powered by lots of)
                <span className="whitespace-nowrap">
                  {' '}
                  caffeine.
                  <TextIcon>
                    <GiCoffeePot />
                  </TextIcon>
                </span>
              </BodyIntro>
            </SublineWrapper>
          </GridColumn>

          <GridColumn col="span-2">
            <SloganWrapper>
              <SloganSticker withLogo />
            </SloganWrapper>
          </GridColumn>
        </GridContainer>
        <CTA>
          <LinkButton label="Projects"></LinkButton>
        </CTA>
      </Wrapper>
    </Section>
  );
};

export default Quote;
