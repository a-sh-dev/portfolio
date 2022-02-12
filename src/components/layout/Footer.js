import Link from 'next/link';
import tw, { styled } from 'twin.macro';
import { Container } from '.';
import { AshLogo } from '../svgs';
import { BsArrowRight } from 'react-icons/bs';
import { Button, Line, Sticker, VLineBg } from '..';
import { TextIcon } from '../typography';
import { copyright, socialMediaLinks } from '../../data';
import { currentYear } from '../../utils';

const flexCenter = tw`flex items-center gap-2`;

const Wrapper = styled.footer(() => [
  tw`
    // where background is placed at the bottom
    bg-footer-blue
    bg-no-repeat
    bg-center
    bg-cover

    text-primary-dark
    relative
    // -bottom-20
    // md:bottom-0

    h-full
    md:pb-12
    overflow-hidden
    border-2
    border-green-500
    flex
    flex-col
    justify-between
  `,
]);

const MenuBar = styled.div(() => [
  tw`
    flex
    md:items-center
    text-xs
    flex-col
    uppercase
    md:flex-row
    md:justify-between
    md:font-medium
    md:tracking-widest
    md:pt-6
    md:text-sm
  `,
]);

const SocialLinks = styled.div(() => [
  flexCenter,
  tw`    
    
  `,
]);

const SocialIcon = styled.a(() => [
  tw`
    pl-4
  `,
]);

const Copyright = styled.div(() => [
  tw`
    flex
    items-center
    // flex-col
    gap-2
    // md:flex-row
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

const StickerWrapper = styled.div(() => [
  tw`
    flex
    flex-col
    // items-end
    // bottom-0
    md:h-28
    border-2
    border-green-500
  `,
]);

const ContactLink = styled.a(() => [
  tw`
    text-3xl
    font-extrabold
    tracking-tight
    py-6
    flex
    items-center
    md:text-9xl
    md:py-10
  `,
]);

const LineWrapper = tw.div`
  hidden
  md:block
  md:mx-2.5
  flex-1
`;

const Footer = ({ currentPage }) => {
  const isContactPage = currentPage === '/contact';

  return (
    <Wrapper>
      <Container maxWidth="max">
        {!isContactPage && (
          <ContactCTA>
            <VLineBg>
              <StickerWrapper>
                <Sticker text="Email me, maybe?" noMargin />
              </StickerWrapper>
            </VLineBg>
            <Link href="/contact" passHref>
              <ContactLink>
                Let&apos;s get in touch.<Button icon> + </Button>
              </ContactLink>
            </Link>
          </ContactCTA>
        )}

        <MenuBar>
          <SocialLinks>
            <span className="hidden md:block">
              Connect now
              <TextIcon>
                <BsArrowRight aria-hidden="true" />
              </TextIcon>
            </span>
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
            {copyright?.footer} by
            <div className="text-5xl">
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
