import Image from 'next/image';
import tw, { styled } from 'twin.macro';
import { LinkButton, Table, TableRow } from '..';
import { GridColumn, GridContainer } from '../layout';
import { BodyIntro, Heading, Paragraph, SubHeading, Tag } from '../typography';

const Wrapper = styled.article(() => [
  tw`
    text-primary-dark
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

const Header = styled.header(() => [
  tw`
    
    border-t
    border-primary-dark

    col-span-full
    md:col-span-6
    md:border-t-0
  `,
]);

const Title = styled.h1(() => [
  tw`
    tracking-tight
    font-bold
    text-3xl
    mb-1
    md:text-5xl
    md:mb-4
  `,
]);

const Type = styled.h2(() => [
  tw`
    font-mono
    italic
    text-lg
    mb-4
  `,
]);

const DescColumn = styled.div(() => [
  tw`
    col-span-full
    md:col-span-8
    xl:col-span-10
    pt-4
  `,
]);

const Category = styled.div(() => [
  tw`
    uppercase
    font-mono
    font-bold
    tracking-widest
    pt-8
    pb-2

    md:mt-1
    md:border-primary-dark
    md:border-t
    md:py-4
    xl:mt-4
    xl:text-lg
    2xl:text-xl
  `,
]);

const LinkContainer = styled.div(() => [
  tw`
    col-span-full
  `,
]);

const ProjectCard = () => {
  return (
    <Wrapper>
      <GridContainer>
        <Header>
          <Category>Ruby</Category>
          <Title>How You Doin? (HYD)</Title>
          <Type>Command Line Terminal App</Type>
        </Header>
        <PicColumn>
          <Image
            src="/images/projects/project_hyd.png"
            alt="project name"
            layout="responsive"
            width={1200}
            height={1160}
          />
        </PicColumn>
        <DescColumn>
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
        <LinkContainer>
          <LinkButton url="/">Github</LinkButton>
        </LinkContainer>
      </GridContainer>
    </Wrapper>
  );
};

export default ProjectCard;
