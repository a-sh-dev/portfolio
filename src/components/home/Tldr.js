import tw, { styled } from 'twin.macro';
import { GridColumn, Section } from '../layout';
import {
  BodyIntro,
  Paragraph,
  Heading,
  TextIcon,
  BlockQuote,
  SubHeading,
  AHref,
  Em,
} from '../typography';
import { FaRobot } from 'react-icons/fa';

const HeaderWrapper = tw.article`
  col-span-full
  mx-auto
  text-center
  // md:px-4
`;

const Tldr = () => {
  return (
    <Section layout="grid">
      <HeaderWrapper>
        <Heading variant="sm" align="center">
          TL; DR
        </Heading>
        <SubHeading align="center">(long story short...)</SubHeading>
        <BlockQuote align="center">
          Learning to code was meant to expand my skillsets as a graphic
          designer.
        </BlockQuote>
      </HeaderWrapper>
      <GridColumn col="span-10" start="start-md-2">
        <BodyIntro>
          They said, <em>&quot;Coding is easy-peasy&quot;</em>, and in 10
          months, I could get certified with an IT Diploma. So, I jumped into
          the{' '}
          <AHref href="https://www.coderacademy.edu.au">
            Coder Academy Fullstack Bootcamp
          </AHref>{' '}
          and began my journey... But, honestly, it was not easy at all!
        </BodyIntro>
      </GridColumn>
      <GridColumn col="span-5" start="start-md-2">
        <Paragraph align="justify-xl">
          Surprisingly, despite its challenges, I came to
          <em> really, really, really </em>
          enjoy coding. Especially the learning part. The passion has grown so
          much that I want to pursue this career
          <span className="em-dash">-----</span>not (just) as a graphic designer
          who can code but as a developer who understands visual communication
          design.
        </Paragraph>
      </GridColumn>
      <GridColumn col="span-5" start="start-7">
        <Paragraph align="justify-xl">
          Furthermore, I hope to gain professional experience while learning
          beyond web development. With the dream of making a meaningful
          difference in the tech world for humanity one day, especially as a
          woman! <Em size="base">(and not be intimidated by robots!</Em>
          <TextIcon>
            <FaRobot aria-hidden="true" />
          </TextIcon>
          ).
        </Paragraph>
      </GridColumn>
    </Section>
  );
};

export default Tldr;
