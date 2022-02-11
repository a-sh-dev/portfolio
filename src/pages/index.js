import Image from 'next/image';
import 'twin.macro';
import {
  DevLife,
  Facts,
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
        <Facts />
        <Skills />
        <Quote />
      </Container>
    </>
  );
}
