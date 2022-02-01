import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>a-sh.{title && ` : ${title}`}</title>
      </Head>
    </>
  );
};

Meta.defaultProps = {
  title: '',
  keywords:
    'designer-developer portfolio, front-end developer, melbourne australia, fullstack developer, programmer, a-sh., a-sh-dev, angie sh, angie hentri',
  description:
    'An experienced graphic designer based in Melbourne, Australia who fell in love with coding and is pursuing a front-end developer career.',
};

export default Meta;
