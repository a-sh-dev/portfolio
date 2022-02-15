import tw, { styled } from 'twin.macro';
import { GridColumn, GridContainer, Section } from '../layout';
import { AHref, BlockQuote, BodyIntro, Paragraph } from '../typography';

const Wrapper = tw.main`
  // adjust spacing in mobile
  py-5
  md:p-0
`;

const ContactQuote = () => {
  return (
    <Section relative>
      <Wrapper>
        <GridContainer noGap>
          <GridColumn col="span-10">
            <BlockQuote noMargin>
              How did pirates collaborate before computers ?
              <BodyIntro variant="semibold" size="intro">
                Pier to pier networking
              </BodyIntro>
              <Paragraph size="sm">
                Source <span className="em-dash">--- </span>
                <AHref href="https://www.reddit.com/r/ProgrammerDadJokes/comments/51wqd2/how_did_pirates_collaborate_before_computers/">
                  Reddit/ProgrammerDadJokes
                </AHref>
              </Paragraph>
            </BlockQuote>
          </GridColumn>
        </GridContainer>
      </Wrapper>
    </Section>
  );
};

export default ContactQuote;
