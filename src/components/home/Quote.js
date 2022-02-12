import tw, { styled } from 'twin.macro';
import { MainButton, SloganSticker } from '..';
import { GridColumn, GridContainer, Section } from '../layout';
import { BlockQuote, Heading, Paragraph } from '../typography';

const Wrapper = tw.main`
  border-2
  border-red-400
`;

const SloganWrapper = tw.div`
  relative
  flex
  md:flex-col
  w-full
  h-full
  justify-end
  md:justify-end
  items-center
  bottom-14
  md:bottom-0

  bg-blue-200/50
`;

const Quote = () => {
  return (
    <Section>
      <Wrapper>
        <GridContainer noGap>
          <GridColumn col="span-10">
            <div className="bg-red-300/20">
              <BlockQuote noMargin>
                I enjoy problem-solving by integrating the visual and technical
                aspects of achieving purposeful, systematic UI and effective UX
                in every project.
              </BlockQuote>
            </div>
          </GridColumn>

          <GridColumn col="span-2">
            <SloganWrapper>
              <SloganSticker withLogo />
            </SloganWrapper>
          </GridColumn>
        </GridContainer>
      </Wrapper>
      <MainButton label="Projects"></MainButton>
    </Section>
  );
};

export default Quote;
