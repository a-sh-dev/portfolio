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

const PicColumn = styled.div(({ reverse }) => [
  tw`
    relative
    col-span-full
    md:col-span-6
  `,
  reverse && tw`md:col-start-1 md:row-start-1`,
]);

const HeaderColumn = styled.header(({ reverse }) => [
  tw`
    border-t
    border-primary-dark

    col-span-full
    md:col-span-6
    md:border-t-0
    md:border-b
    md:border-dashed
    md:mb-1
    xl:mb-3
  `,
  reverse && tw`md:col-start-7 md:row-start-1`,
]);

const Title = styled.h1(() => [
  tw`
    tracking-tight
    font-extrabold
    text-3xl
    md:text-5xl
    md:mb-4
    md:pt-4
    xl:text-7xl
    2xl:pt-32
    
  `,
]);

const Type = styled.h2(() => [
  tw`
    font-mono
    italic
    text-lg
    mb-6
    lg:text-xl
    xl:text-2xl
    2xl:mb-24
  `,
]);

const DescColumn = styled.div(() => [
  tw`
    col-span-full
    pt-2
  `,
]);

const Category = styled.div(() => [
  tw`
    uppercase
    font-mono
    font-bold
    tracking-widest
    pt-8
    pl-0.5

    md:mt-1
    md:border-primary-dark
    md:border-t
    md:py-4
    xl:mt-4
    xl:text-lg
    2xl:text-xl
  `,
]);

const LinkColumn = styled.div(() => [
  tw`
    col-span-full
    bg-green-200/20
    flex
    justify-center
  `,
]);

const ProjectCard = ({ project, reverse, children }) => {
  // const { id, category, name, type, desc, tech, repo, url, img } = project;
  const copiedSubtitle = 'main technologies';

  return (
    <Wrapper>
      <GridContainer>
        <HeaderColumn {...{ reverse }}>
          <Category>Ruby</Category>
          <Title>How You Doin? (HYD)</Title>
          <Type>Command Line Terminal App</Type>
          <div className="hidden lg:block">
            <TableRow subtitle={copiedSubtitle}>
              <Tag>HTML5</Tag>
              <Tag>CSS3</Tag>
            </TableRow>
          </div>
        </HeaderColumn>

        <PicColumn {...{ reverse }}>
          <Image
            src="/images/projects/project_hyd.png"
            alt="project name"
            layout="responsive"
            width={1200}
            height={1160}
          />
        </PicColumn>

        <DescColumn>
          <TableRow subtitle="About the project" noDashed dense>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              accusantium tempore illum numquam quidem nam cupiditate, cum
              distinctio reprehenderit ab, culpa fugiat exercitationem sapiente
              quas possimus similique, autem nulla obcaecati!
            </Paragraph>
          </TableRow>
          <div className="lg:hidden">
            <TableRow subtitle={copiedSubtitle}>
              <Tag>HTML5</Tag>
              <Tag>CSS3</Tag>
            </TableRow>
          </div>
        </DescColumn>

        <LinkColumn>
          <LinkButton url="https://www.google.com">Github</LinkButton>
        </LinkColumn>
      </GridContainer>
    </Wrapper>
  );
};

export default ProjectCard;
