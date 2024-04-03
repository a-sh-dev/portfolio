import { motion } from 'framer-motion';
import { animate } from '../../utils/animate';

const PageTransition = ({ children }) => {
  const transition = {
    initial: { opacity: 0, y: 30 },
    enter: {
      opacity: 1,
      y: 0,
      transition: { type: 'easeIn', duration: 0.7 },
    },
    exit: { opacity: 0, y: 30 },
  };

  return <motion.div {...animate(transition)}>{children}</motion.div>;
};

export default PageTransition;
