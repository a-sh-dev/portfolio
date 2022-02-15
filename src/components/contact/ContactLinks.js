import tw, { styled } from 'twin.macro';
import { GridColumn, Section } from '../layout';
import { BodyIntro, Em, Heading, TextIcon } from '../typography';
import { HiOutlineArrowSmRight, HiOutlineArrowSmDown } from 'react-icons/hi';

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
    lg:col-span-5
    lg:items-center
    
  `,
]);

const LinksColumn = styled.div(() => [
  tw`
  
  `,
]);

const subline = 'Check out these quicklinks!';

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
        <BodyIntro noMargin>
          {subline}
          <TextIcon>
            <div className="rotate-90 lg:rotate-0">
              <HiOutlineArrowSmRight />
            </div>
          </TextIcon>
        </BodyIntro>
      </CTAColumn>
      <LinksColumn>
        <p>LinkedIn</p>
      </LinksColumn>
    </Section>
  );
};

export default ContactLinks;
