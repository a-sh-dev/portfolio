import { Meta } from '../components';
import { Container } from '../components/layout';
import { JournalHeader, JournalList } from '../components/journal';

const journal = () => {
  return (
    <>
      <Meta title="journal" />
      <Container>
        <JournalHeader />
        <JournalList />
      </Container>
    </>
  );
};

export default journal;
