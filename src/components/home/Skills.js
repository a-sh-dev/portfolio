import tw, { styled } from 'twin.macro';
import { Icon, Table } from '..';
import { GridColumn, GridContainer, Section } from '../layout';
import { Heading } from '../typography';
import { HiOutlineCode } from 'react-icons/hi';

const IconWrapper = styled.div(() => [
  tw`
  
  `,
]);

const Skills = () => {
  return (
    <Section variant="clean">
      <GridContainer>
        <GridColumn col="span-3">
          <Heading variant="monoBold" align="left" noMargin>
            Core Tech skills
          </Heading>
        </GridColumn>
        <GridColumn col="span-2" align="center">
          <div className="hidden md:block">
            <Icon>
              <HiOutlineCode aria-hidden="true" />
            </Icon>
          </div>
        </GridColumn>
        <GridColumn col="span-7">
          <Table />
          <Table />
        </GridColumn>
      </GridContainer>
    </Section>
  );
};

export default Skills;
