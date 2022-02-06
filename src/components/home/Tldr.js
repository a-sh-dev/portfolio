import tw, { styled } from 'twin.macro';
import { GridColumn, Section } from '../layout';
import {
  BodyIntro,
  BodyText,
  Heading,
  Icon,
  SubHeading,
  SubHeading2,
} from '../typography';
import { FaRobot } from 'react-icons/fa';

const HeaderWrapper = tw.header`
  col-span-full
  mx-auto
  text-center
  md:mb-6
`;
const ContentWrapper = tw.main`
  // col-span-full
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
        <BodyIntro>
          They said coding was easy-peasy, and in 10 months, I could get
          certified with an IT Diploma. So, I jumped into the Coder Academy
          Fullstack Bootcamp and began my journey... Well, it was not easy at
          all!
        </BodyIntro>
      </GridColumn>
      <GridColumn col="span-6">
        <BodyText>
          However, surprisingly, despite its challenges, I came to really,
          really, really enjoy it. The coding passion has grown so much that I
          want to pursue this career, not (just) as a graphic designer who can
          code but as a developer who understands visual design communication.
          Furthermore, I hope to gain professional experience and learn beyond
          web development. I hope to make a meaningful difference in the tech
          world for humanity one day!{' '}
          <span className="text-sm font-mono italic">
            (and not be intimidated by robots!
          </span>
          <Icon nudgeTop>
            <FaRobot />
          </Icon>
          ).
        </BodyText>
      </GridColumn>
    </Section>
  );
};

export default Tldr;
