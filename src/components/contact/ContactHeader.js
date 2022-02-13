import tw, { styled } from 'twin.macro';
import { Header } from '../layout';
import { BodyIntro, Paragraph, TextIcon } from '../typography';
import { EnvelopeIcon } from '../svgs';
import { sectionPaddingB } from '../../../styles/stylesData';

const Wrapper = styled.div(() => [
  sectionPaddingB,
  tw`
  
  `,
]);

const SubHeader = styled.div(() => [
  tw`
  
  `,
]);

const ContactHeader = () => {
  return (
    <Wrapper>
      <Header
        title="Let's Get"
        subline="in Touch!"
        sticker="Email me, maybe?"
        color="yellow"
      >
        <EnvelopeIcon />
      </Header>
      <SubHeader>
        <BodyIntro noMargin>
          I would love to chat with you about anything!
        </BodyIntro>
        <Paragraph>
          So, please fill out the form below, and I will get back to you as soon
          as possible!
        </Paragraph>
      </SubHeader>
    </Wrapper>
  );
};

export default ContactHeader;
