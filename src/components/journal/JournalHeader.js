import tw, { styled } from 'twin.macro';
import { Header } from '../layout';
import { BodyIntro, Paragraph, TextIcon } from '../typography';

const Wrapper = styled.div(() => [
  tw`
  
  `,
]);

const JournalHeader = () => {
  return (
    <Header
      sticker="The journey so far..."
      title="The Journey of Perpetual Learning"
      color="pink"
    >
      <BodyIntro>
        Keeping up with the technology can easily be overwhelming.
      </BodyIntro>{' '}
      However, new frameworks, libraries and even programming languages are
      consistently being developed for improvement. Therefore, I like to record
      my learning progress and milestones for self-motivation that hopefully can
      also motivate and encourage others.
    </Header>
  );
};

export default JournalHeader;
