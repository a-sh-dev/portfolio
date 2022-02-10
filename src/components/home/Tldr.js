import tw, { styled } from 'twin.macro';
import { GridColumn, Section } from '../layout';
import {
  BodyIntro,
  Paragraph,
  Heading,
  Icon,
  SubHeading,
  SubHeading2,
  AHref,
  Em,
} from '../typography';
import { FaRobot } from 'react-icons/fa';

const HeaderWrapper = tw.article`
  col-span-full
  mx-auto
  text-center
  md:px-7
`;

const Tldr = () => {
  return (
    <Section layout="grid">
      <HeaderWrapper>
        <Heading variant="sm" align="center">
          TL; DR
        </Heading>
        <SubHeading2 align="center">(long story short...)</SubHeading2>
        <SubHeading align="center">
          Learning to code was meant to expand my skillsets as a graphic
          designer.
        </SubHeading>
      </HeaderWrapper>
      <GridColumn col="span-6">
        <div className="md:pr-6 xl:pr-14">
          <BodyIntro>
            They said, <em>&quot;Coding is easy-peasy&quot;</em>, and in 10
            months, I could get certified with an IT Diploma. So, I jumped into
            the{' '}
            <AHref href="https://www.coderacademy.edu.au">
              Coder Academy Fullstack Bootcamp
            </AHref>{' '}
            and began my journey... But, honestly, it was not easy at all!
          </BodyIntro>
        </div>
      </GridColumn>
      <GridColumn col="span-6">
        <div className="md:pl-6">
          <Paragraph>
            Surprisingly, despite its challenges, I came to
            <em> really, really, really </em>
            enjoy coding. Especially the learning part. The passion has grown so
            much that I want to pursue this career
            <span className="em-dash">-----</span>not (just) as a graphic
            designer who can code but as a developer who understands visual
            communication design.
          </Paragraph>
          <Paragraph>
            Furthermore, I hope to gain professional experience while learning
            beyond web development. With the dream of making a meaningful
            difference in the tech world for humanity one day, especially as a
            woman! <Em size="base">(and not be intimidated by robots!</Em>
            <Icon>
              <FaRobot aria-hidden="true" />
            </Icon>
            ).
          </Paragraph>
        </div>
      </GridColumn>
    </Section>
  );
};

export default Tldr;
