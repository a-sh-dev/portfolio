import { Sticker } from '..';

const MainHero = () => {
  return (
    <section>
      <h1>Main Hero Component</h1>
      <h1 className="font-mono uppercase text-6xl text-primary-dark bg-slate-200 p-5">
        Hello, World~
      </h1>
      <h1>I am Angie.</h1>
      <p>
        An experienced graphic designer who fell in love with coding and is
        pursuing a front-end developer career.
      </p>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <Sticker text="It is me you're looking for~" />
    </section>
  );
};

export default MainHero;
