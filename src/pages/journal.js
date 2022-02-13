import { Meta } from '../components';
import { Container } from '../components/layout';
import { JournalHeader } from '../components/journal';

const journal = () => {
  return (
    <>
      <Meta title="journal" />
      <Container>
        <JournalHeader />
      </Container>
    </>
  );
};

export default journal;
