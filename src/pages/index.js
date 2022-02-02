import Image from 'next/image';
import 'twin.macro';
import { AshLogo, CareRingIcon, EnvelopeIcon } from '../components/svgs';
import { MainHero, Quote, Skills, Tldr } from '../components/home';
import { Container } from '../components/layout';

export default function Home() {
  return (
    <>
      <section>
        <MainHero />
      </section>
      <Container>
        <section>
          <Tldr />
        </section>
        <section>Full Story - Accordion Bar</section>
        <section>Life as a Developer - Accordion Bar</section>
        <section>Life outside Coding - Accordion Bar</section>
        <section>
          <Skills />
        </section>
        <section>
          <Quote />
        </section>
      </Container>
    </>
  );
}
