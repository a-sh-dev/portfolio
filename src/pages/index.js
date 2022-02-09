import Image from 'next/image';
import 'twin.macro';
import {
  DevLife,
  FullStory,
  MainHero,
  Quote,
  Skills,
  Tldr,
} from '../components/home';
import { Container } from '../components/layout';

export default function Home() {
  return (
    <>
      <MainHero />
      <Container>
        <Tldr />
        <FullStory />
        <DevLife />
        <section>Random Fun Facts</section>
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
