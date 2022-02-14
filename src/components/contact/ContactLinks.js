import tw, { styled } from 'twin.macro';
import { GridColumn, Section } from '../layout';
import { BodyIntro, Em, Heading, TextIcon } from '../typography';
import { HiOutlineArrowSmRight } from 'react-icons/hi';

const Wrapper = styled.div(() => [
  tw`
  
  `,
]);

const ContactLinks = () => {
  return (
    <Section layout="grid">
      <GridColumn col="span-5">
        <Heading variant="sm">Let&apos;s be social!</Heading>
        <BodyIntro>
          Check out the quicklinks!
          <TextIcon>
            <HiOutlineArrowSmRight />
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
