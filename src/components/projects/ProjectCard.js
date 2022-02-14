import Image from 'next/image';
import tw, { styled } from 'twin.macro';
import { LinkButton, Table, TableRow } from '..';
import { GridColumn, GridContainer } from '../layout';
import { BodyIntro, Heading, Paragraph, SubHeading, Tag } from '../typography';

const Wrapper = styled.article(() => [
  tw`
    
  `,
]);

const PicColumn = styled.div(() => [
  tw`
    relative
    col-span-full
    md:col-span-6
    // p-4
    // md:pl-10
  `,
]);

const DescColumn = styled.div(() => [
  tw`
    col-span-full
    md:col-span-6
    pt-4
  `,
]);

const Category = styled.div(() => [
  tw`
    md:border-primary-dark
    md:border-t
    md:py-4
  `,
]);

const LinkContainer = styled.div(() => [
  tw`
    p-4
  `,
]);

const ProjectCard = () => {
  return (
    <Wrapper>
      <GridContainer>
        <PicColumn>
          <Image
            src="/images/projects/project_hyd.png"
            alt="project name"
            layout="responsive"
            width={1200}
            height={1160}
          />
          <LinkContainer>
            <LinkButton url="/">Github</LinkButton>
          </LinkContainer>
        </PicColumn>
        <DescColumn>
          <Category>
            <BodyIntro variant="monoBold">RUBY</BodyIntro>
          </Category>
          <Heading variant="sm">How You Doin? (HYD)</Heading>
          <SubHeading>Command Line Terminal App</SubHeading>
          <TableRow subtitle="About the project">
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              accusantium tempore illum numquam quidem nam cupiditate, cum
              distinctio reprehenderit ab, culpa fugiat exercitationem sapiente
              quas possimus similique, autem nulla obcaecati!
            </Paragraph>
          </TableRow>
          <TableRow subtitle="Tech stack">
            <Tag>HTML5</Tag>
            <Tag>CSS3</Tag>
          </TableRow>
        </DescColumn>
      </GridContainer>
    </Wrapper>
  );
};

export default ProjectCard;
