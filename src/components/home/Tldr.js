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
`;

const Tldr = () => {
  return (
    <Section layout="grid">
      <HeaderWrapper>
        <Heading variant="sm" align="center">
          TL; DR
        </Heading>
        <SubHeading align="center">(sort of...)</SubHeading>
        <BlockQuote align="center">
          Learning to code changed my life.
        </BlockQuote>
      </HeaderWrapper>
      <GridColumn col="span-10" start="start-md-2">
        <BodyIntro>
          For over a decade, I thrived as a graphic designer. I loved creating
          stunning branding and layouts that captured the essence of a business
          or product. But deep down, I knew there was more to the digital world
          that I wanted to explore.
        </BodyIntro>
      </GridColumn>
      <GridColumn col="span-5" start="start-md-2">
        <Paragraph align="justify-xl">
          Driven by the prospect of expanding my skills, I embarked on a{' '}
          <AHref href="https://www.coderacademy.edu.au">coding boot camp</AHref>{' '}
          journey. Little did I know that the path ahead would challenge me in
          ways I never imagined. Let&apos;s just say it wasn&apos;t exactly
          &quot;easy-peasy&quot; as advertised. There were moments of
          frustration, nights battling syntax errors, and a healthy dose of
          self-doubt and panic attacks. I even questioned if I should have stuck
          with design work.
        </Paragraph>
        <Paragraph align="justify-xl">
          However, through the struggles, I realised that coding was not just a
          skill but a passion waiting to be unleashed. The frustrations turned
          into problem-solving satisfactions, and the late nights became
          exhilarating journeys of discovery. I found myself captivated by the
          constant learning, the thrill of seeing my code come to life (
          <em>&quot;Woohooo, it works!!&quot;</em> moments) and being part of
          the supportive developer community drove me forward.
        </Paragraph>
      </GridColumn>
      <GridColumn col="span-5" start="start-7">
        <Paragraph align="justify-xl" smMargin>
          Since then, working as a professional software engineer has been a
          fulfilling experience for me. I appreciate the constant learning that
          comes with this career path. I am surrounded by talented colleagues
          who inspire me to push my boundaries and challenge myself in new ways.
          Collaborating with bright minds and contributing my skills to
          meaningful projects is a thrilling experience I look forward to each
          day.
        </Paragraph>
        <Paragraph align="justify-xl" smMargin>
          Although the tech industry can be challenging, I am grateful for every
          experience, good and bad, as it has contributed to my self-discovery,
          growth, and resilience. I believe that with the right mindset and
          attitude, anyone can thrive in this industry and make a real impact on
          the world. That&apos;s why I want to encourage more women considering
          a leap into coding to embrace the challenges because they are
          empowering. The learning is endless, and the impact you can make is
          limitless!
        </Paragraph>
      </GridColumn>
    </Section>
  );
};

export default Tldr;
