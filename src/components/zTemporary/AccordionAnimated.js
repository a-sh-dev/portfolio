import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import tw, { styled } from 'twin.macro';
import { HiOutlinePlusSm, HiOutlineMinusSm } from 'react-icons/hi';
import { Button } from '.';
import { bgColorVariants } from '../../styles/stylesData';
import { Heading } from './typography';

const uniformPadding = tw`p-6 pb-10 md:p-10`;

const AccordionContainer = styled.article((showInfo) => [
  tw`
    relative
    border-b
    border-primary-dark
  `,
  ({ color = 'light' }) => bgColorVariants[color],

  showInfo && tw`border-b-0`,
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
    py-4
    md:py-6
    hover:bg-black/5
  `,
  showInfo && tw`border-dashed`,
]);

const AccordionContent = styled.main`
  ${uniformPadding};
  padding: ${tw`md:(px-12 pt-14 pb-16) xl:(px-16)`};
`;

const Accordion = ({ color, title, children }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [contentHeight, setContentHeight] = useState();

  const heightRef = useRef();

  useEffect(() => {
    console.log('--HEIGHT');
    setContentHeight(`${heightRef.current.scrollHeight}px`);
  }, [contentHeight]);

  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <AccordionContainer color={color} {...{ showInfo }}>
      <div onClick={handleClick} className="cursor-pointer">
        <AccordionHeader {...{ showInfo }}>
          <Heading variant="mono" noMargin noGutter>
            {showInfo ? 'Hide' : ''} {title}
          </Heading>
          <Button icon>
            {showInfo ? <HiOutlineMinusSm /> : <HiOutlinePlusSm />}
          </Button>
        </AccordionHeader>
      </div>

      <div
        className={
          showInfo ? 'accordion-content content-visible' : 'accordion-content'
        }
        ref={heightRef}
        style={{ height: showInfo ? `${contentHeight}` : '0px' }}
      >
        <AccordionContent {...{ showInfo }}>{children}</AccordionContent>
      </div>
    </AccordionContainer>
  );
};

export default Accordion;
