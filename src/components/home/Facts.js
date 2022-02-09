import tw, { styled } from 'twin.macro';
import { GridColumn, GridContainer, Section } from '../layout';
import { Heading } from '../typography';

const IconWrapper = styled.div(() => [
  tw`
  
  `,
]);

const Facts = () => {
  return (
    <Section variant="clean">
      <GridContainer>
        <GridColumn>
          <Heading variant="xs" align="autoL">
            Some of a-sh&apos;s random (fun) facts
          </Heading>
        </GridColumn>
        <div>
          <GridColumn>Card</GridColumn>
          <GridColumn>Card</GridColumn>
        </div>
      </GridContainer>
    </Section>
  );
};

export default Facts;
