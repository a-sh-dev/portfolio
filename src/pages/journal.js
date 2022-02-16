import { Meta } from '../components';
import { Container } from '../components/layout';
import {
  JournalHeader,
  JournalList,
  JournalQuote,
} from '../components/journal';

export default function Journal() {
  return (
    <>
      <Meta title="journal" />
      <Container>
        <JournalHeader />
        <JournalList />
        <JournalQuote />
      </Container>
    </>
  );
}
