import Link from 'next/link';
import tw, { styled } from 'twin.macro';
import { Container } from '.';
import { AshLogo } from '../svgs';
import { BsArrowRight } from 'react-icons/bs';
import { Line, Sticker, VLineBg } from '..';
import { Paragraph, TextIcon } from '../typography';
import { socialMediaLinks } from '../../data';

const Wrapper = styled.footer(() => [
  tw`
    // where background is placed at the bottom
  
  `,
]);

const MenuBar = styled.div(() => [
  tw`

  `,
]);

const SocialLinks = styled.div(() => [
  tw`
  
  `,
]);

const SocialIcon = styled.a(() => [
  tw`
  
  `,
]);

const Copyright = styled.div(() => [
  tw`
  
  `,
]);

const StickerWrapper = styled.div(() => [
  tw`
    grid
    place-items-end
  `,
]);

const ContactCTA = styled.div(() => [
  tw`
  
  `,
]);

const ContactLink = styled.a(() => [
  tw`
  
  `,
]);

const Footer = ({ currentPage }) => {
  const isContactPage = currentPage === '/contact';

  return (
    <Wrapper>
      <Container maxWidth="max">
        {!isContactPage && (
          <ContactCTA>
            <StickerWrapper>
              <VLineBg>
                <Sticker text="Email me, maybe?" />
              </VLineBg>
            </StickerWrapper>
            <Link href="/contact" passHref>
              <ContactLink>Let&apos;s get in touch.</ContactLink>
            </Link>
          </ContactCTA>
        )}

        <MenuBar>
          <SocialLinks>
            <Paragraph>
              Connect now{' '}
              <TextIcon>
                <BsArrowRight aria-hidden="true" />
              </TextIcon>
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
            </Paragraph>
          </SocialLinks>
          <Line />
          <Copyright>
            <AshLogo />
          </Copyright>
        </MenuBar>
      </Container>
    </Wrapper>
  );
};

export default Footer;
