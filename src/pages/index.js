import Image from 'next/image';
import 'twin.macro';
import { AshLogo, CareRingIcon, EnvelopeIcon } from '../components/svgs';
import { MainHero, Quote, Skills, Tldr } from '../components/home';

export default function Home() {
  return (
    <>
      <section>
        <MainHero />
      </section>
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
    </>
  );
}
