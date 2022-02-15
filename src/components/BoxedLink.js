import tw, { styled } from 'twin.macro';
import {
  bgColorVariants,
  bigElementUniformPadding,
  uniformTransition,
} from '../../styles/stylesData';
import { Heading } from './typography';

const Container = styled.a(() => [
  tw`
    text-primary-dark
    border-primary-dark
    first:border-t
  `,
  ({ color = 'yellow' }) => bgColorVariants[color],
]);

const Box = styled.div(() => [
  bigElementUniformPadding,
  tw`
    flex
    items-center
    justify-between
    uppercase
    border-b
    border-primary-dark
    py-4
    w-full
    md:py-6
    hover:bg-black/5
  `,
  uniformTransition,
]);

const BoxedLink = ({ color, name, href, children }) => {
  return (
    <Container
      color={color}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Box>
        <span aria-hidden="true" className="text-lg">
          {children}
        </span>
        <Heading variant="mono" noMargin noGutter>
          {name}
        </Heading>
      </Box>
    </Container>
  );
};

export default BoxedLink;
