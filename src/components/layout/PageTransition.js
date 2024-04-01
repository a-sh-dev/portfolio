import { motion } from 'framer-motion';
import { animate } from '../../utils/animate';

const PageTransition = ({ children }) => {
  const opacity = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 2 } },
    exit: { opacity: 1 },
  };

  return <motion.div {...animate(opacity)}>{children}</motion.div>;
};

export default PageTransition;
