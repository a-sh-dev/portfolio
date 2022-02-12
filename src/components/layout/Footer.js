import Link from 'next/link';
import tw, { styled } from 'twin.macro';
// import { Container } from '.';
import { AshLogo } from '../svgs';
import { BsArrowRight } from 'react-icons/bs';
import { Button, Line, Sticker, VLineBg } from '..';
import { TextIcon } from '../typography';
import { copyright, socialMediaLinks } from '../../data';
import { currentYear } from '../../utils';
import { uniformTransition } from '../../../styles/stylesData';
import { Container } from '.';

const Wrapper = styled.footer(() => [
  tw`
    // where background is placed at the bottom
    bg-footer-blue
    bg-no-repeat
    bg-center
    bg-cover

    text-primary-dark
    relative

    h-full
    pb-10
    overflow-hidden
    flex
    flex-col
    md:pb-20
    md:px-16
    xl:px-0
  `,
]);

// const Container = styled.div(() => [
//   maxWidthVariants['max'],
//   tw`
//     px-7
//     md:px-0
//     md:mx-auto
//     md:container
//   `,
// ]);

const MenuBar = styled.div(() => [
  tw`
    flex
    text-xs
    flex-col
    uppercase
    font-medium
    tracking-widest
    md:items-center
    md:flex-row
    md:justify-between
    md:pt-6
    md:text-sm
  `,
]);

const SocialLinks = styled.div(() => [
  tw`    
    flex
    items-center
    gap-5
    justify-center
    pb-10
    md:gap-3
    md:py-0
  `,
]);

const SocialIcon = styled.a(() => [
  tw`
    text-lg
    border
    border-primary-dark
    rounded-full
    p-2
    hover:(bg-primary-dark text-white)
    md:p-3
    md:text-xl
  `,
  uniformTransition,
]);

const Copyright = styled.div(() => [
  tw`
    flex
    items-center
    gap-2
    justify-center
  `,
]);

const ContactCTA = styled.div(() => [
  tw`
    relative
    flex
    flex-col
    flex-1
    h-full
    justify-center
    items-center
  `,
]);

const ContactLink = styled.a(() => [
  tw`
    text-3xl
    gap-2
    font-extrabold
    tracking-tight
    py-10
    flex
    items-center
    justify-center
    w-full
    md:gap-6
    md:text-[5.5rem]
    md:py-20
    hover:(text-primary-darkest)
    xl:text-9xl
  `,
  uniformTransition,
]);

const LineWrapper = tw.div`
  hidden
  md:flex-1
  md:block
  md:mx-2.5
`;

const Footer = ({ currentPage }) => {
  const isContactPage = currentPage === '/contact';

  return (
    <Wrapper>
      <Container maxWidth="max" noGutter>
        {!isContactPage && (
          <ContactCTA>
            <VLineBg length="6rem" />
            <Sticker text="Thank you, please come again?" noMargin />
            <Link href="/contact" passHref>
              <ContactLink>
                <p>Let&apos;s get in touch </p>
                <TextIcon color="dark">
                  <BsArrowRight aria-hidden="true" />
                </TextIcon>
              </ContactLink>
            </Link>
          </ContactCTA>
        )}

        <MenuBar>
          <SocialLinks>
            <span className="hidden md:block">Connect now</span>
            {socialMediaLinks.map((link) => {
              const { name, icon, url } = link;
              return (
                <SocialIcon
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon}
                </SocialIcon>
              );
            })}
          </SocialLinks>

          <LineWrapper>
            <Line />
          </LineWrapper>

          <Copyright>
            {copyright?.footer}
            <div className="text-4xl md:text-5xl">
              <AshLogo />
            </div>{' '}
            &copy; {currentYear}
          </Copyright>
        </MenuBar>
      </Container>
    </Wrapper>
  );
};

export default Footer;
