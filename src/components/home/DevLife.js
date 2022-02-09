import Image from 'next/image';
import { Accordion } from '..';
import { GridColumn, GridContainer } from '../layout';
import { Heading, Paragraph, SubHeading2 } from '../typography';

const DevLife = () => {
  return (
    <>
      <Accordion color="blue" title="life as a developer">
        <GridContainer flowCol>
          <GridColumn col="span-4" start="start-9">
            <div className="text-center mb-4">
              <Image
                src="/images/des_dev_duality.svg"
                alt="a-sh profile illustration"
                width={250}
                height={250}
              />
            </div>
          </GridColumn>
          <GridColumn col="span-8" start="start-1">
            <Heading variant="sm">
              Designer<span className="em-dash-title">---</span>Developer
              Duality
            </Heading>
            <SubHeading2>The good and the bad?</SubHeading2>
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

export default DevLife;
