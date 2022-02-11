import tw, { styled } from 'twin.macro';
import { MainButton, SloganSticker } from '..';
import { GridColumn, Section } from '../layout';
import { BlockQuote, Heading, Paragraph } from '../typography';

const SloganWrapper = tw.div`
  // absolute
  flex
  w-full
  justify-center
  // -bottom-16
  // md:-bottom-20

  bg-blue-200/20
`;

const Quote = () => {
  return (
    <Section relative noTopMargin layout="grid">
      <GridColumn col="span-10">
        <BlockQuote>
          I enjoy problem-solving by integrating the visual and technical
          aspects of achieving purposeful, systematic UI & effective UX in every
          project.
        </BlockQuote>
      </GridColumn>
      <GridColumn col="span-2">
        <SloganWrapper>
          <SloganSticker withLogo />
        </SloganWrapper>
      </GridColumn>
      <GridColumn>
        <MainButton label="Projects"></MainButton>
      </GridColumn>
    </Section>
  );
};

export default Quote;
