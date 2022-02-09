import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import tw, { styled } from 'twin.macro';
import { HiOutlinePlusSm, HiOutlineMinusSm } from 'react-icons/hi';
import { MainButton } from '.';
import { bgColorVariants } from '../../styles/stylesData';

const uniformPadding = tw`p-6 md:p-10`;

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
    py-5
    md:py-6
    hover:bg-black/5
  `,
  showInfo && tw`border-dashed`,
]);

const Title = styled.h1(() => [
  tw`
    font-mono
    uppercase
    text-primary-dark
    tracking-widest
    md:text-2xl
  `,
]);

const AccordionContent = styled.main`
  ${uniformPadding};
  padding: ${tw`pb-10 md:(px-12 pt-14 pb-16) xl:(px-16)`};
`;

const Accordion = ({ color, title, children }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [contentHeight, setContentHeight] = useState();

  const heightRef = useRef();

  useEffect(() => {
    setContentHeight(`${heightRef.current.scrollHeight}px`);
  }, []);

  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <AccordionContainer color={color} {...{ showInfo }}>
      <div onClick={handleClick} className="cursor-pointer">
        <AccordionHeader {...{ showInfo }}>
          <Title>
            {showInfo ? 'Hide' : ''} {title}
          </Title>
          <MainButton icon>
            {showInfo ? <HiOutlineMinusSm /> : <HiOutlinePlusSm />}
          </MainButton>
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
