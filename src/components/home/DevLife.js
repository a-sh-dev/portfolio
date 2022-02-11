import Image from 'next/image';
import { Collapsible } from '..';
import { GridColumn, GridContainer } from '../layout';
import { Heading, TextIcon, Paragraph, SubHeading } from '../typography';
import { HiOutlineSparkles } from 'react-icons/hi';

const DevLife = () => {
  return (
    <>
      <Collapsible color="blue" title="life as a developer">
        <GridContainer flowCol>
          <GridColumn col="span-4" start="start-9">
            <div className="text-center my-4 md:my-0 w-full md:grid">
              <Image
                src="/images/des_dev_duality.svg"
                alt="duality illustration"
                width={250}
                height={250}
              />
            </div>
          </GridColumn>
          <GridColumn col="span-8" start="start-1">
            <Heading variant="sm" align="autoL">
              Designer<span className="em-dash-title">---</span>Developer Hybrid
            </Heading>
            <SubHeading align="autoL">The good and the bad</SubHeading>
            <Paragraph>
              During planning and development for my projects, I tend to spend
              <em> extra </em>
              time deciding on the branding for the UI. From choosing the right
              font, colours, image assets to wireframing (including the
              high-fidelity ones). So, perhaps, that is the downside of having
              this hybrid. However, that extra time is purposeful as part of the
              problem-solving process. I enjoy translating subject matters
              through integrating the technical and the visual aspects of
              achieving a well-presented UI and effective UX in every project.
            </Paragraph>
            <Paragraph>
              Having experience working in a team and independently, I work
              better when all my folders and files are well organised and named
              (including variables!). In addition, I carefully evaluate how I
              write my codes so that others may easily pick them up afterwards.
            </Paragraph>
            <Paragraph>
              I am also driven by curiosity, eager to learn new things. Somehow,
              I find it enjoyable to read other people&apos;s source code to
              figure out how things work. Especially if it would help me code
              better and improve productivity. Therefore, I welcome other
              people&apos;s constructive feedback and critiques
              <span className="em-dash">---</span>they are precious!
              <TextIcon>
                <HiOutlineSparkles />
              </TextIcon>
            </Paragraph>
          </GridColumn>
        </GridContainer>
      </Collapsible>
    </>
  );
};

export default DevLife;
