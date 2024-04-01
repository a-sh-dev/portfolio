import {
  DevLife,
  Facts,
  FullStory,
  MainHero,
  Quote,
  Skills,
  Tldr,
} from '../components/home';
import { Container, PageTransition } from '../components/layout';

export default function Home() {
  return (
    <PageTransition>
      <MainHero />
      <Container>
        <Tldr />
        <FullStory />
        <DevLife />
        <Facts />
        <Skills />
        <Quote />
      </Container>
    </PageTransition>
  );
}
