import tw, { styled } from 'twin.macro';
import JournalCard from './JournalCard';

const Wrapper = styled.div(() => [
  tw`
  
  `,
]);

const JournalList = () => {
  return (
    <div>
      <JournalCard />
    </div>
  );
};

export default JournalList;
