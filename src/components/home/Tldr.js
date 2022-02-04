import { Section } from '../layout';
import { Heading } from '../typography';

const Tldr = () => {
  return (
    <Section>
      <Heading align="center" variant="sm">
        TL;DR
      </Heading>
      <h2>(long story short...)</h2>
    </Section>
  );
};

export default Tldr;
