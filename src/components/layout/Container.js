import tw, { styled } from 'twin.macro';

const StyledContainer = tw.div`
  container
  border
  border-gray-600
  px-6
  md:px-24
  xl:px-32
  
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
