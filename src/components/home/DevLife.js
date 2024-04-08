import Image from 'next/image';
import { Collapsible } from '..';
import { GridColumn, GridContainer } from '../layout';
import { Heading, TextIcon, Paragraph, SubHeading } from '../typography';
import { HiOutlineSparkles } from 'react-icons/hi';

const DevLife = () => {
  return (
    <Collapsible color="blue" title="Developer/Designer Hybrid">
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
            Developer<span className="em-dash-title">---</span>Designer Hybrid
          </Heading>
          <SubHeading align="autoL">
            Bridging the gap between design and development
          </SubHeading>
          <Paragraph>
            As a graphic designer turned software developer, I offer a unique
            cross-disciplinary perspective that seamlessly bridges design and
            development worlds. My background allows me to approach challenges
            with a fresh mindset, leading to innovative, user-centric solutions.
          </Paragraph>
          <Paragraph>
            I&apos;m a developer who speaks design and a designer who
            understands development. This unique blend enables me to navigate
            effortlessly between these disciplines, fostering a more efficient
            and effective development process.
          </Paragraph>
          <Paragraph>
            Grounded in design thinking, I tackle projects through an
            empathetic, user-centric lens. I excel at translating complex
            concepts into intuitive and visually appealing user interfaces that
            are both aesthetically pleasing and highly usable. My keen eye for
            detail ensures cohesive visual elements and clean, maintainable
            code.
          </Paragraph>
          <Paragraph>
            Moreover, my creative mindset fosters out-of-the-box thinking and
            developing innovative solutions. This creativity and my
            cross-disciplinary perspective cultivate an environment that
            welcomes diverse ideas and seamless collaboration.
          </Paragraph>
          <Paragraph>
            As a versatile contributor, I handle all project facets
            <span className="em-dash">--</span>from visual design to functional
            development. I champion consistency and maintainability through
            initiatives like design system enhancements and refactoring.
            Continuous growth is paramount. I actively seek constructive
            feedback and critiques, viewing them as precious opportunities for
            self-improvement
            <TextIcon>
              <HiOutlineSparkles />
            </TextIcon>
            This openness, combined with my attention to detail and passion for
            delivering high-quality solutions, enables substantial contributions
            to any team.
          </Paragraph>
          <Paragraph>
            Ultimately, my unique blend of skills empowers the creation of user
            experiences that seamlessly blend form and function, elevating
            aesthetic appeal and usability across a wide range of digital
            products and services.
          </Paragraph>
        </GridColumn>
      </GridContainer>
    </Collapsible>
  );
};

export default DevLife;
