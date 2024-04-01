import { Meta } from '../components';
import { Container, PageTransition } from '../components/layout';
import {
  JournalHeader,
  JournalList,
  JournalQuote,
} from '../components/journal';

export default function Journal() {
  return (
    <>
      <Meta title="journal" />
      <PageTransition>
        <Container>
          <JournalHeader />
          <JournalList />
          <JournalQuote />
        </Container>
      </PageTransition>
    </>
  );
}
