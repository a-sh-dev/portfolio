import tw, { styled } from 'twin.macro';
import { Icon, Line, Table, TableRow } from '..';
import { GridColumn, GridContainer, Section } from '../layout';
import { Heading, Paragraph, Tag, UList } from '../typography';
import { HiOutlineCode, HiOutlineColorSwatch } from 'react-icons/hi';
import { capabilities, coreSkills, features } from '../../data';

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

const SkillIcon = styled.div(() => [
  tw`
    hidden
    md:z-20 md:block md:relative md:-top-2
    xl:-top-4
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
            <SkillIcon aria-hidden="true">
              <Icon>
                <HiOutlineCode aria-hidden="true" />
              </Icon>
            </SkillIcon>
          </GridColumn>

          <GridColumn col="span-8">
            <Table title="Fullstack capable frontend development" clean>
              {coreSkills.map((skill) => {
                const { id, name, skills } = skill;
                return (
                  <TableRow subtitle={name} key={id}>
                    {skills.map((item) => {
                      const { id, name } = item;
                      return <Tag key={id}>{name}</Tag>;
                    })}
                  </TableRow>
                );
              })}
              <TableRow subtitle="Current Exploration">
                <Paragraph>
                  Deepening vanilla JavaScript and React.js fundamentals.
                  Practice and utilise more unit testing (TDD). Additionally,
                  being a designer, I am naturally drawn to CSS. Therefore, I am
                  diving into creative explorations through CSS art and
                  JavaScript animation.
                </Paragraph>
              </TableRow>
            </Table>
          </GridColumn>
        </GridContainer>
      </Skill>

      <Skill>
        <GridContainer>
          <GridColumn col="span-2">
            <SkillHeader>
              <Heading variant="monoBold" align="left" noMargin>
                Other Skills
              </Heading>
            </SkillHeader>
          </GridColumn>

          <GridColumn col="span-2" align="center" relative>
            <SkillIcon aria-hidden="true">
              <Icon>
                <HiOutlineColorSwatch aria-hidden="true" />
              </Icon>
            </SkillIcon>
          </GridColumn>

          <GridColumn col="span-8">
            <Table title="Design skills & tools" clean>
              {capabilities.map((skill) => {
                const { id, name, skills } = skill;
                return (
                  <TableRow subtitle={name} key={id}>
                    {skills.map((item) => {
                      const { id, name } = item;
                      return <Tag key={id}>{name}</Tag>;
                    })}
                  </TableRow>
                );
              })}
            </Table>
          </GridColumn>

          <GridColumn col="span-8" start="start-5">
            <Table title="Soft skills" clean>
              {features.map((skill) => {
                const { id, skills } = skill;
                return (
                  <TableRow key={id} noSub noGutter>
                    <UList>
                      {skills.map((item) => {
                        const { id, name } = item;
                        return (
                          <li key={id}>
                            <Paragraph>{name}</Paragraph>
                          </li>
                        );
                      })}
                    </UList>
                  </TableRow>
                );
              })}
            </Table>
          </GridColumn>
        </GridContainer>
      </Skill>
    </Section>
  );
};

export default Skills;
