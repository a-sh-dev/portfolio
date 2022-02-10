import tw, { styled } from 'twin.macro';
import { GridColumn, GridContainer, Section } from '../layout';
import { Heading } from '../typography';

const IconWrapper = styled.div(() => [
  tw`
  
  `,
]);

const Skills = () => {
  return (
    <Section variant="clean">
      <GridContainer>
        <GridColumn col="span-3">
          <Heading variant="monoBold" align="left">
            Core Tech skills
          </Heading>
        </GridColumn>
        <div>
          <GridColumn></GridColumn>
          <GridColumn></GridColumn>
        </div>
      </GridContainer>
    </Section>
  );
};

export default Skills;
