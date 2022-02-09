import Image from 'next/image';
import { useState } from 'react';
import tw, { styled } from 'twin.macro';
import { Heading, Paragraph } from './typography';
import { HiOutlinePlusSm, HiOutlineMinusSm } from 'react-icons/hi';
import { MainButton } from '.';
import { GridColumn, GridContainer } from './layout';
import { bgColorVariants } from '../../styles/stylesData';

const uniformPadding = tw`p-4 md:p-6`;

const AccordionContainer = styled.article(() => [
  tw`
    relative
    border-b
    border-primary-dark
  `,
  ({ color = 'light' }) => bgColorVariants[color],
]);

const AccordionHeader = styled.header(({ showInfo }) => [
  uniformPadding,
  tw`
    flex
    items-center
    justify-between
    uppercase
    border-b
    border-primary-dark
  `,
  showInfo && tw`border-dashed`,
]);

const Title = styled.h1(() => [
  tw`
    font-mono
    uppercase
    text-primary-dark
    font-bold
    tracking-widest
    md:text-xl
  `,
]);

const AccordionContent = styled.main(() => [
  uniformPadding,
  tw`
    
  `,
]);

const Accordion = ({ color }) => {
  const [showInfo, setShowInfo] = useState(true);

  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <AccordionContainer color="teal">
      <AccordionHeader {...{ showInfo }}>
        <Title>Read full story</Title>
        <MainButton icon onClick={handleClick}>
          {showInfo ? <HiOutlineMinusSm /> : <HiOutlinePlusSm />}
        </MainButton>
      </AccordionHeader>
      <AccordionContent>
        <GridContainer>
          <GridColumn col="span-4">
            <div className="text-center ">
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
            <div className="my-4 md:hidden">
              <Heading variant="sm">
                The story of <br />
                a-sh.
              </Heading>
            </div>
            <Paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate eius sunt praesentium voluptates pariatur, ipsa maiores
              nesciunt adipisci incidunt ipsum repudiandae corporis perspiciatis
              sequi assumenda dolores accusamus repellendus deleniti eveniet?
            </Paragraph>
          </GridColumn>
        </GridContainer>
      </AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
