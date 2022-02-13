import tw, { styled } from 'twin.macro';
import { Header } from '../layout';
import { BodyIntro, Em, Paragraph, TextIcon } from '../typography';
import { FaRegGrinStars } from 'react-icons/fa';

const Wrapper = styled.div(() => [
  tw`
  
  `,
]);

const ProjectHeader = () => {
  return (
    <Header
      sticker="My pressciousss~!"
      title="Selected Projects"
      color="purple"
    >
      <BodyIntro noMargin>
        Once upon a time, building websites for me involved integrating Adobe
        Photoshop and Dreamweaver.
      </BodyIntro>
      <Paragraph>
        I would first &apos;slice&apos; the design mock-up then bring it to
        Dreamweaver to convert it to codes automatically
        <Em size="base"> (voila, tables everywhere!).</Em> . Then, finally
        published it on the web with a few HTML and CSS tweaks.
      </Paragraph>
      <Paragraph>
        Fast forward, here are some selected projects built with care and heaps
        of caffeine since I started my formal coding journey. I look forward to
        adding more soon!{' '}
        <TextIcon noMargin>
          <FaRegGrinStars aria-hidden="true" />
        </TextIcon>
      </Paragraph>
    </Header>
  );
};

export default ProjectHeader;
