import { Section } from '../layout';
import { Heading } from '../typography';
import { FaRobot } from 'react-icons/fa';

const Tldr = () => {
  return (
    <Section>
      <div>
        <Heading variant="sm">TL; DR</Heading>
        <h2>(long story short...)</h2>
      </div>
      <div>
        <p>
          Learning to code was meant to expand my skillsets as a graphic
          designer.
        </p>
        <p>
          So, I jumped into the Coder Academy Fullstack Bootcamp to get my IT
          Diploma in 10 months. They said coding was easy peasy... I beg to
          differ! But, surprisingly, despite its challenges, I came to really
          enjoy it. The coding passion has grown so much that I want to pursue
          this career, not (just) as a graphic designer who can code but as a
          developer who understands visual design communication.
        </p>
        <p>
          Furthermore, I hope to gain professional experience and learn beyond
          web development. I hope to make a meaningful difference in the tech
          world for humanity one day! (...and not be intimidated by robots!
          <span className="text-primary-darkest">
            <FaRobot />
          </span>
          ).
        </p>
      </div>
    </Section>
  );
};

export default Tldr;
