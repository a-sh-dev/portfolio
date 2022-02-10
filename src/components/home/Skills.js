import tw, { styled } from 'twin.macro';
import { Icon, Table } from '..';
import { GridColumn, GridContainer, Section } from '../layout';
import { Heading } from '../typography';
import { HiOutlineCode, HiOutlineColorSwatch } from 'react-icons/hi';

const Skill = styled.div(() => [
  tw`
  
  `,
]);

const Skills = () => {
  return (
    <Section variant="clean">
      <Skill>
        <GridContainer>
          <GridColumn col="span-2">
            <Heading variant="monoBold" align="left" noMargin>
              Core Tech skills
            </Heading>
          </GridColumn>

          <GridColumn col="span-2" align="center" relative>
            <div className="hidden md:block md:relative md:-top-2 xl:-top-4">
              <Icon>
                <HiOutlineCode aria-hidden="true" />
              </Icon>
            </div>
          </GridColumn>

          <GridColumn col="span-8">
            <Table />
            <Table />
          </GridColumn>
        </GridContainer>
      </Skill>

      <GridContainer>
        <GridColumn col="span-2">
          <Heading variant="monoBold" align="left" noMargin>
            <span className="break-words">Capabilities</span>
          </Heading>
        </GridColumn>

        <GridColumn col="span-2" align="center" relative>
          <div className="hidden md:block md:relative md:-top-2 xl:-top-4">
            <Icon>
              <HiOutlineColorSwatch aria-hidden="true" />
            </Icon>
          </div>
        </GridColumn>

        <GridColumn col="span-8">
          <Table />
          <Table />
        </GridColumn>
      </GridContainer>
    </Section>
  );
};

export default Skills;
