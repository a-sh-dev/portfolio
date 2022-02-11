import Image from 'next/image';
import { Collapsible } from '..';
import { GridColumn, GridContainer } from '../layout';
import { Heading, TextIcon, Paragraph, SubHeading } from '../typography';
import { HiOutlineSparkles } from 'react-icons/hi';

const Facts = () => {
  return (
    <>
      <Collapsible color="purple" title="(Fun) Facts">
        <GridContainer flowCol>
          <GridColumn col="span-8" start="start-1">
            <Paragraph>CARD</Paragraph>
          </GridColumn>
        </GridContainer>
      </Collapsible>
    </>
  );
};

export default Facts;
