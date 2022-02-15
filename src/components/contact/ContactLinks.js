import tw, { styled } from 'twin.macro';
import { GridColumn, Section } from '../layout';
import { BodyIntro, Em, Heading, TextIcon } from '../typography';
import { HiOutlineArrowSmRight, HiOutlineArrowSmDown } from 'react-icons/hi';

const DesktopWrapper = styled.div(() => [
  tw`
    hidden
    md:block
  `,
]);

const MobileWrapper = styled.div(() => [
  tw`
    md:hidden
  `,
]);

const CTAColumn = styled.div(() => [
  tw`
    col-span-full
    
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
      <GridColumn col="span-4">
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
            <div className="rotate-90 md:rotate-0">
              <HiOutlineArrowSmRight />
            </div>
          </TextIcon>
        </BodyIntro>
      </GridColumn>
      <GridColumn>
        <p>LinkedIn</p>
      </GridColumn>
    </Section>
  );
};

export default ContactLinks;
