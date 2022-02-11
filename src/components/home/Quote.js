import tw, { styled } from 'twin.macro';
import { SloganSticker } from '..';
import { GridColumn, Section } from '../layout';
import { BlockQuote, Heading, Paragraph } from '../typography';

const SloganWrapper = tw.div`

`;

const Quote = () => {
  return (
    <Section relative noTopMargin>
      <SloganWrapper>
        <SloganSticker withLogo />
      </SloganWrapper>

      <BlockQuote>
        I enjoy problem-solving by integrating the visual communication and
        technical aspects of achieving purposeful, systematic UI and effective
        UX of every project.
      </BlockQuote>
      <Paragraph>
        All projects are crafted with care and (powered by lots of) caffeine.
      </Paragraph>
    </Section>
  );
};

export default Quote;
