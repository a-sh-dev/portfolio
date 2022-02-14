import tw, { styled } from 'twin.macro';
import { GridColumn, GridContainer, Section } from '../layout';
import { BlockQuote } from '../typography';

const Wrapper = tw.main`
  // adjust spacing in mobile
  py-5
  md:p-0
`;

const ProjectQuote = () => {
  return (
    <Section relative>
      <Wrapper>
        <GridContainer noGap>
          <GridColumn col="span-10">
            <BlockQuote noMargin subline="Dave Gray">
              Strive for Progress, <br />
              Not Perfection.
            </BlockQuote>
          </GridColumn>
        </GridContainer>
      </Wrapper>
    </Section>
  );
};

export default ProjectQuote;
