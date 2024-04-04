import tw from 'twin.macro';
import { GridColumn, GridContainer, Section } from '../layout';
import { AHref, BlockQuote, Paragraph } from '../typography';

const Wrapper = tw.main`
  // adjust spacing in mobile
  py-5
  md:p-0
`;

const Subline = tw.div`
  space-y-6
  lg:space-y-14
  mt-2
  lg:mt-4
`;

const ContactQuote = () => {
  return (
    <Section variant="bottom">
      <Wrapper>
        <GridContainer noGap>
          <GridColumn col="span-8">
            <BlockQuote noMargin>
              How did pirates collaborate before computers?
            </BlockQuote>
            <Subline>
              <Paragraph size="2xl">Pier to pier networking.</Paragraph>
              <Paragraph size="sm" noMargin>
                Source<span className="em-dash">---</span>
                <AHref
                  href="https://www.reddit.com/r/ProgrammerDadJokes/comments/51wqd2/how_did_pirates_collaborate_before_computers/"
                  noBold
                >
                  Reddit/ProgrammerDadJokes
                </AHref>
              </Paragraph>
            </Subline>
          </GridColumn>
        </GridContainer>
      </Wrapper>
    </Section>
  );
};

export default ContactQuote;
