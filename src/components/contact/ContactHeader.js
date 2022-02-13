import tw, { styled } from 'twin.macro';
import { Header } from '../layout';
import { BodyIntro, Paragraph, TextIcon } from '../typography';
import { FaRegGrinStars } from 'react-icons/fa';

const Wrapper = styled.div(() => [
  tw`
  
  `,
]);

const ContactHeader = () => {
  return (
    <Header
      title="Let's Get"
      subline="in Touch!"
      sticker="Email me, maybe?"
      color="yellow"
    >
      <BodyIntro noMargin>
        I would love to chat with you about anything!
      </BodyIntro>
      <Paragraph>
        So, please fill out the form below, and I will get back to you as soon
        as possible!
      </Paragraph>
    </Header>
  );
};

export default ContactHeader;
