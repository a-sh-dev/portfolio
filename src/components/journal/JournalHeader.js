import tw, { styled } from 'twin.macro';
import { Header } from '../layout';
import { BodyIntro, Paragraph, TextIcon } from '../typography';
import { FaRegMeh } from 'react-icons/fa';

const Wrapper = styled.div(() => [
  tw`
  
  `,
]);

const JournalHeader = () => {
  return (
    <Header
      sticker="The journey so far..."
      title="The Journey"
      subline="of Perpetual Learning"
      color="pink"
    >
      <BodyIntro noMargin>
        Keeping up with the technology can easily be overwhelming.{' '}
        <TextIcon noMargin>
          <FaRegMeh aria-hidden="true" />
        </TextIcon>
      </BodyIntro>
      <Paragraph>
        However, new frameworks, libraries and even programming languages are
        consistently being developed for improvement, which is meant to help
        developers. Therefore, I like to record my learning progress and
        milestones for self-motivation that hopefully can also motivate and
        encourage others.
      </Paragraph>
    </Header>
  );
};

export default JournalHeader;
