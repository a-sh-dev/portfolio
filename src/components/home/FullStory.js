import Image from 'next/image';
import { Accordion } from '..';
import { GridColumn, GridContainer } from '../layout';
import { Heading, Icon, Paragraph, SubHeading2 } from '../typography';
import { FaRegGrinSquint } from 'react-icons/fa';

const FullStory = () => {
  return (
    <>
      <Accordion color="teal" title="about a-sh.">
        <GridContainer>
          <GridColumn col="span-4">
            <div className="text-center my-4 md:my-0 w-full md:grid">
              <Image
                src="/images/ash_profile_smile.svg"
                alt="a-sh profile illustration"
                width={250}
                height={250}
              />
            </div>
          </GridColumn>
          <GridColumn col="span-8">
            <div className="hidden md:block">
              <Heading variant="sm" align="autoL">
                The story of a-sh.
              </Heading>
            </div>
            <div className="my-2 md:hidden">
              <Heading variant="sm" align="autoL">
                The story of <br />
                a-sh.
              </Heading>
            </div>
            <SubHeading2 align="autoL">The journey so far...</SubHeading2>
            <Paragraph>
              <strong>a-sh</strong> is <em>Angeline S Hentri</em>, who prefers
              to be called Angie SH.
            </Paragraph>
            <Paragraph>
              <strong>a-sh</strong> is <em>a small human</em>, literally. Due to
              her not-so-tall physique, she may be shy at the first meeting.
              However, people say she is very approachable, friendly, and great
              to work with.
            </Paragraph>
            <Paragraph>
              In addition to the newly gained coding skills,{' '}
              <strong>a-sh</strong> has been <em>a skilful helper</em> with 10+
              years of solid experience working in multidisciplinary design
              agencies. She loves branding, illustration, typography and can be
              a little bit nerdy with typesetting and file management. She is
              recognised as a dedicated team player who appreciates being
              challenged to adapt to various demands to improve mutual growth
              and success.
            </Paragraph>
            <Paragraph>
              Last but not least, <strong>a-sh</strong> is naturally{' '}
              <em>a shy human</em>. Although not a sweet tooth,{' '}
              <strong>a-sh</strong> is <em>a sweet-heart.</em>
              <Icon nudgeTop>
                <FaRegGrinSquint />
              </Icon>
            </Paragraph>
          </GridColumn>
        </GridContainer>
      </Accordion>
    </>
  );
};

export default FullStory;
