import tw, { styled } from 'twin.macro';
import { Icon, Line, Table } from '..';
import { GridColumn, GridContainer, Section } from '../layout';
import { Heading } from '../typography';
import { HiOutlineCode, HiOutlineColorSwatch } from 'react-icons/hi';

const Skill = styled.div(() => [
  tw`
    relative
    first:mt-0
    mt-10
  `,
]);

const SkillHeader = styled.header(() => [
  tw`
    md:border-primary-dark
    md:border-t
    md:py-4
    
  `,
]);

const Skills = () => {
  return (
    <Section variant="clean">
      <Skill>
        <GridContainer>
          <GridColumn col="span-2">
            <SkillHeader>
              <Heading variant="monoBold" align="left" noMargin>
                Core Tech skills
              </Heading>
            </SkillHeader>
          </GridColumn>

          <GridColumn col="span-2" align="center" relative>
            <div className="hidden md:z-20 md:block md:relative md:-top-2 xl:-top-4">
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

      <Skill>
        <GridContainer>
          <GridColumn col="span-2">
            <SkillHeader>
              <Heading variant="monoBold" align="left" noMargin>
                <span className="break-words">Capabilities</span>
              </Heading>
            </SkillHeader>
          </GridColumn>

          <GridColumn col="span-2" align="center" relative>
            <div className="hidden md:z-20 md:block md:relative md:-top-2 xl:-top-4">
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
    </Section>
  );
};

export default Skills;
