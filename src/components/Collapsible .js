import Image from 'next/image';
import { useState } from 'react';
import tw, { styled } from 'twin.macro';
import {
  HiOutlinePlusSm,
  HiOutlineMinusSm,
  HiOutlineChevronUp,
} from 'react-icons/hi';
import { Button } from '.';
import { bgColorVariants } from '../../styles/stylesData';
import { Heading } from './typography';

const uniformPadding = tw`p-6 pb-10 md:p-10`;

const Container = styled.article((showInfo) => [
  tw`
    border-b
    border-primary-dark
  `,
  ({ color = 'light' }) => bgColorVariants[color],

  showInfo && tw`border-b-0`,
]);

const Header = styled.header(({ showInfo }) => [
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

const Content = styled.main`
  ${uniformPadding};
  padding: ${tw`md:(px-12 pt-14 pb-16) xl:(px-16)`};
  border-bottom: ${({ showInfo }) =>
    showInfo ? tw`border border-b border-primary-dark` : tw`border-b-0`};
`;

const Footer = tw.footer`
  flex
  items-center
  gap-4
  font-mono
  text-sm
  uppercase
  tracking-widest
  text-primary-dark
  mt-6
  md:mt-8
`;

const Collapsible = ({ color, title, children }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <Container color={color} {...{ showInfo }}>
        <Header {...{ showInfo }}>
          <Heading variant="mono" noMargin noGutter>
            {showInfo ? 'Hide' : ''} {title}
          </Heading>
          <Button icon>
            {showInfo ? (
              <HiOutlineMinusSm aria-hidden="true" />
            ) : (
              <HiOutlinePlusSm aria-hidden="true" />
            )}
          </Button>
        </Header>

        {showInfo && (
          <Content {...{ showInfo }}>
            {children}
            <Footer>
              <HiOutlineChevronUp aria-hidden="true" /> Hide
            </Footer>
          </Content>
        )}
      </Container>
    </div>
  );
};

export default Collapsible;
