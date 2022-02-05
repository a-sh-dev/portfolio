import { Section } from '../layout';
import { Heading } from '../typography';

const Tldr = () => {
  return (
    <Section>
      <div>
        <Heading variant="sm">TL;DR</Heading>
        <h2>(long story short...)</h2>
      </div>
      <div>
        <p>
          Learning to code was meant to expand my skillsets as a graphic
          designer.
        </p>
        <p>
          But, surprisingly, the coding passion has grown so much that I want to
          pursue this career, not as a graphic designer who can code but as a
          developer who understands visual design communication. Furthermore, I
          hope to gain professional experience beyond web development and, one
          day, be able to make a difference in the tech world for humanity!
          (...and not be intimidated by robots! 🤖).
        </p>
      </div>
    </Section>
  );
};

export default Tldr;
