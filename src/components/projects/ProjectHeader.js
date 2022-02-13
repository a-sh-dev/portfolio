import tw, { styled } from 'twin.macro';
import { Header } from '../layout';
import { BodyIntro, Paragraph, TextIcon } from '../typography';
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
      <BodyIntro>
        Once upon a time, building websites for me consisted of utilising Adobe
        Photoshop to slice down the design mock-up.
      </BodyIntro>
      <Paragraph>
        Then I would convert it to codes automatically in Dreamweaver and then
        publish it on the web with a few tweaks of HTML and CSS. Fast forward,
        here are some selected projects built with care and heaps of caffeine
        since I started my formal coding journey. I look forward to adding more
        soon!
        <TextIcon>
          <FaRegGrinStars aria-hidden="true" />
        </TextIcon>
      </Paragraph>
    </Header>
  );
};

export default ProjectHeader;
