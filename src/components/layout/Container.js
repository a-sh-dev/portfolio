import tw, { styled } from 'twin.macro';

const StyledContainer = tw.div`
  container
  border
  px-6
  md:px-24
  xl:px-32
  
  border-gray-600
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
