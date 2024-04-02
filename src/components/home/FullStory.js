import tw from 'twin.macro';
import Image from 'next/image';
import { Collapsible } from '..';
import { GridColumn, GridContainer } from '../layout';
import { EmMed, Heading, TextIcon, Paragraph, SubHeading } from '../typography';
import { FaRegGrinSquint } from 'react-icons/fa';

const Name = tw.span`
  whitespace-nowrap
  font-bold
`;

const FullStory = () => {
  return (
    <Collapsible color="teal" title="about a-sh.">
      <GridContainer>
        <GridColumn col="span-4">
          <div className="text-center my-4 md:my-0 w-full md:grid">
            <Image
              src="/images/ash_profile_smile.svg"
              alt="a-sh profile illustration"
              width={250}
              height={250}
            />
          </div>
        </GridColumn>
        <GridColumn col="span-8">
          <Heading variant="sm" align="autoL">
            The story of <span className="whitespace-nowrap">a-sh.</span>
          </Heading>
          <SubHeading align="autoL">The journey so far...</SubHeading>
          <Paragraph>
            <Name>a-sh </Name>
            is <EmMed>Angie SH</EmMed>, a name she prefers to be called with.
          </Paragraph>
          <Paragraph>
            <Name>a-sh</Name> is <EmMed>a small human</EmMed>, literally. Due to
            her not-so-tall physique, she may be shy at the first meeting.
            However, people say she is approachable, friendly, and great to work
            with.
          </Paragraph>
          <Paragraph>
            In addition to the newly gained coding skills,
            <Name> a-sh </Name> has been <EmMed>a skilled helper </EmMed>
            with 10+ years of solid experience working in multidisciplinary
            design agencies. She loves branding, illustration, typography and
            can be slightly nerdy with typesetting and file management. She is
            known for her dedicated team spirit, appreciation of constructive
            feedback, and willingness to take on new challenges that can help
            her grow and contribute to the team&apos;s success.
          </Paragraph>
          <Paragraph>
            Last but not least, <Name>a-sh</Name> is naturally
            <EmMed> a shy human</EmMed>. Although <u>not</u> a sweet tooth,
            <Name> a-sh</Name> is <EmMed>a sweet-heart.</EmMed>
            <TextIcon>
              <FaRegGrinSquint aria-hidden="true" />
            </TextIcon>
          </Paragraph>
        </GridColumn>
      </GridContainer>
    </Collapsible>
  );
};

export default FullStory;
