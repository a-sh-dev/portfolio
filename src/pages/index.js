import Image from 'next/image';
import 'twin.macro';
import { FullStory, MainHero, Quote, Skills, Tldr } from '../components/home';
import { Container } from '../components/layout';

export default function Home() {
  return (
    <>
      <MainHero />
      <Container>
        <Tldr />
        <FullStory />

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
