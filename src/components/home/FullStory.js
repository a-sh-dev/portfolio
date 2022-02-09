import Image from 'next/image';
import { Accordion } from '..';
import { GridColumn, GridContainer } from '../layout';
import { Heading, Paragraph, SubHeading2 } from '../typography';

const FullStory = () => {
  return (
    <>
      <Accordion color="teal" title="full story">
        <GridContainer>
          <GridColumn col="span-4">
            <div className="text-center">
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
              <Heading variant="sm">The story of a-sh.</Heading>
            </div>
            <div className="my-2 md:hidden">
              <Heading variant="sm">
                The story of <br />
                a-sh.
              </Heading>
            </div>
            <SubHeading2>The journey so far...</SubHeading2>
            <Paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate eius sunt praesentium voluptates pariatur, ipsa maiores
              nesciunt adipisci incidunt ipsum repudiandae corporis perspiciatis
              sequi assumenda dolores accusamus repellendus deleniti eveniet?
            </Paragraph>
          </GridColumn>
        </GridContainer>
      </Accordion>
    </>
  );
};

export default FullStory;
