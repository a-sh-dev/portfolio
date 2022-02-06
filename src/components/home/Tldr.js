import tw, { styled } from 'twin.macro';
import { Section } from '../layout';
import { Heading, Icon } from '../typography';
import { FaRobot } from 'react-icons/fa';

const HeaderWrapper = tw.header`
  col-span-full
  mx-auto
  mb-10
  text-center
`;
const ContentWrapper = tw.main`
  col-span-full
`;

const Tldr = () => {
  return (
    <Section layout="grid">
      <HeaderWrapper>
        <Heading variant="sm" align="center">
          TL; DR
        </Heading>
        <h2>(long story short...)</h2>
      </HeaderWrapper>
      <ContentWrapper>
        <p>
          Learning to code was meant to expand my skillsets as a graphic
          designer.
        </p>
        <p className="md:columns-2">
          So, I jumped into the Coder Academy Fullstack Bootcamp to get my IT
          Diploma in 10 months. They said coding was easy peasy... I beg to
          differ! But, surprisingly, despite its challenges, I came to really
          enjoy it. The coding passion has grown so much that I want to pursue
          this career, not (just) as a graphic designer who can code but as a
          developer who understands visual design communication. Furthermore, I
          hope to gain professional experience and learn beyond web development.
          I hope to make a meaningful difference in the tech world for humanity
          one day! (...and not be intimidated by robots!
          <Icon nudgeTop>
            <FaRobot />
          </Icon>
          ).
        </p>
      </ContentWrapper>
    </Section>
  );
};

export default Tldr;
