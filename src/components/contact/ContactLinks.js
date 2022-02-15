import tw, { styled } from 'twin.macro';
import { GridColumn, Section } from '../layout';
import { BodyIntro, Em, Heading, TextIcon } from '../typography';
import { HiOutlineArrowSmRight, HiOutlineArrowSmDown } from 'react-icons/hi';
import { Button, Icon } from '..';

const DesktopWrapper = styled.div(() => [
  tw`
    hidden
    lg:block
  `,
]);

const MobileWrapper = styled.div(() => [
  tw`
    lg:hidden
  `,
]);

const CTAColumn = styled.div(() => [
  tw`
    col-span-full
    justify-self-center
    lg:justify-self-auto
    lg:col-span-5
    lg:items-center
    
  `,
]);

const CTAFooter = styled.div(() => [
  tw`
    flex
    flex-col
    gap-4
    items-center
    lg:flex-row
  `,
]);

const LinksColumn = styled.div(() => [
  tw`
  
  `,
]);

const ContactLinks = () => {
  return (
    <Section layout="grid">
      <CTAColumn>
        <MobileWrapper>
          <Heading variant="sm">Let&apos;s be social!</Heading>
        </MobileWrapper>
        <DesktopWrapper>
          <Heading variant="sm">
            Let&apos;s <br />
            be social!
          </Heading>
        </DesktopWrapper>
        <CTAFooter>
          <BodyIntro noMargin>Check out these quicklinks!</BodyIntro>
          <div className="animate-bounce my-2 lg:my-0 lg:animate-none">
            <div aria-hidden="true" className="rotate-90 lg:rotate-0">
              <Icon size="xs">
                <HiOutlineArrowSmRight />
              </Icon>
            </div>
          </div>
        </CTAFooter>
      </CTAColumn>
      <LinksColumn>
        <p>LinkedIn</p>
      </LinksColumn>
    </Section>
  );
};

export default ContactLinks;
