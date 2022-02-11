import Image from 'next/image';
import { FactCard, Collapsible } from '..';
import { randomFacts } from '../../data';
import { GridColumn, GridContainer } from '../layout';
import { Heading, TextIcon, Paragraph, SubHeading } from '../typography';

const Facts = () => {
  return (
    <>
      <Collapsible color="purple" title="(Fun) Facts">
        <GridContainer layout="grid">
          {randomFacts.map((fact) => {
            return (
              <GridColumn key={fact.id} col="span-6">
                <FactCard fact={fact} />
              </GridColumn>
            );
          })}
        </GridContainer>
      </Collapsible>
    </>
  );
};

export default Facts;
