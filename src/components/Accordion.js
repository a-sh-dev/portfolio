import Image from 'next/image';
import { useState } from 'react';
import tw, { styled } from 'twin.macro';
import { Heading, Paragraph } from './typography';
import { HiOutlinePlusSm, HiOutlineMinusSm } from 'react-icons/hi';
import { MainButton } from '.';
import { GridColumn } from './layout';
import { bgColorVariants } from '../../styles/stylesData';

const AccordionContainer = styled.article(() => [
  tw`
    relative
  `,
  ({ color = 'light' }) => bgColorVariants[color],
]);

const Accordion = ({ color }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <AccordionContainer color={color}>
      <GridColumn>PICTURE</GridColumn>
      <GridColumn>
        <header>
          <Heading>Read full story</Heading>
          <MainButton onClick={handleClick}>
            {showInfo ? <HiOutlineMinusSm /> : <HiOutlinePlusSm />}
          </MainButton>
        </header>
        {showInfo && (
          <Paragraph>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            eius sunt praesentium voluptates pariatur, ipsa maiores nesciunt
            adipisci incidunt ipsum repudiandae corporis perspiciatis sequi
            assumenda dolores accusamus repellendus deleniti eveniet?
          </Paragraph>
        )}
      </GridColumn>
    </AccordionContainer>
  );
};

export default Accordion;
