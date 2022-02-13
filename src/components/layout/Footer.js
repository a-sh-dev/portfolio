import Link from 'next/link';
import tw, { styled } from 'twin.macro';
import { Container } from '.';
import { AshLogo } from '../svgs';
import { AiOutlineSmile } from 'react-icons/ai';
import { FiArrowUpRight } from 'react-icons/fi';
import { HiMusicNote, HiOutlineSparkles } from 'react-icons/hi';
import { Line, Sticker, VLineBg } from '..';
import { TextIcon } from '../typography';
import { copyright, socialMediaLinks } from '../../data';
import { currentYear } from '../../utils';
import { uniformTransition } from '../../../styles/stylesData';

const Wrapper = styled.footer(() => [
  tw`
    // where background is placed at the bottom
    bg-footer-blue
    bg-no-repeat
    bg-center
    bg-cover

    text-primary-dark
    h-full
    pb-10
    overflow-hidden
    flex
    flex-col
    md:pb-14
    xl:pb-20
  `,
]);

const MenuBar = styled.div(() => [
  tw`
    flex
    text-xs
    flex-col
    uppercase
    font-medium
    tracking-widest
    lg:items-center
    lg:flex-row
    lg:justify-between
    lg:pt-6
    lg:text-sm
  `,
]);

const SocialLinks = styled.div(() => [
  tw`    
    flex
    items-center
    gap-5
    justify-center
    pb-5
    md:pb-8
    md:gap-8
    lg:gap-3
    lg:py-0
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
    flex
    flex-col
    h-full
    justify-center
    items-center
  `,
]);

const ContactLink = styled.a(() => [
  tw`
    font-extrabold
    tracking-tight
    py-10
    flex
    items-center
    justify-center
    w-full
    text-3xl
    md:text-[4.25rem]
    md:py-14
    lg:text-[5.8rem]
    xl:py-20
    xl:text-[7.4rem]
    2xl:text-10xl
    hover:(text-primary-darkest)
  `,
  uniformTransition,
]);

const LineWrapper = tw.div`
  hidden
  lg:flex-1
  lg:block
  lg:mx-2.5
`;

const Footer = ({ currentPage }) => {
  const isContactPage = currentPage === '/contact';

  return (
    <Wrapper>
      <Container maxWidth="max">
        <ContactCTA>
          <VLineBg length="6rem" />
          <Sticker text="It is me you're looking for~!" noMargin>
            <HiMusicNote aria-hidden="true" />
          </Sticker>

          <Link href="/contact" passHref>
            <ContactLink>
              <p>{isContactPage ? `Chat soon! ` : `Let's get in touch`}</p>
              <TextIcon color="dark">
                {isContactPage ? (
                  <HiOutlineSparkles aria-hidden="true" />
                ) : (
                  <FiArrowUpRight aria-hidden="true" />
                )}
              </TextIcon>
            </ContactLink>
          </Link>
        </ContactCTA>

        <MenuBar>
          <SocialLinks>
            <span className="hidden lg:block">Connect now</span>
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
