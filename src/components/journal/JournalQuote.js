import tw from 'twin.macro';
import { GridColumn, GridContainer, Section } from '../layout';
import { BlockQuote } from '../typography';

const Wrapper = tw.main`
  // adjust spacing in mobile
  py-5
  md:p-0
`;

const JournalQuote = () => {
  return (
    <Section relative>
      <Wrapper>
        <GridContainer noGap>
          <GridColumn col="span-10">
            <BlockQuote noMargin subline="Atomic Habits">
              Changes that seem small and unimportant at first will compound
              into remarkable results if you&apos;re willing to stick with them
              for years.
            </BlockQuote>
          </GridColumn>
        </GridContainer>
      </Wrapper>
    </Section>
  );
};

export default JournalQuote;
