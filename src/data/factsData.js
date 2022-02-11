import { HiOutlineGift } from 'react-icons/hi';
import { GiAustralia } from 'react-icons/gi';
import {
  FaChalkboardTeacher,
  FaPencilAlt,
  FaHandsWash,
  FaBook,
} from 'react-icons/fa';
import { BsClouds, BsCloudRain } from 'react-icons/bs';

export const randomFacts = [
  {
    id: 1,
    title: 'Great things come from a small package.',
    desc: 'I am 149.31cm (4.8986 feet or 58.7835 inches).',
    icon: <HiOutlineGift />,
  },
  {
    id: 2,
    title: 'Born in Jakarta, Indonesia.',
    desc: 'Then came to Melbourne in 1998 as a student and became an Aussie citizen in 2007.',
    icon: <GiAustralia />,
  },
  {
    id: 3,
    title:
      'Briefly worked as a substitute Assistant Language Teacher (ALT) in Tokyo, Japan.',
    desc: 'Assisting native Japanese English teachers in public primary and secondary schools. Then back in Melbourne just a week before the 2011 Tohoku earthquake and tsunami disaster.',
    icon: <FaChalkboardTeacher />,
  },
  {
    id: 4,
    title:
      "Love to doodle and admire other people's illustrations (and adorable pet photos).",
    desc: 'I have yet to find my personal illustration style, but Studio Ghibli has been my inspiration.',
    icon: <FaPencilAlt />,
  },
  {
    id: 5,
    title: 'Enjoy gazing at the cloud for a long time.',
    desc: "Before the pandemic, I used to take lots of clouds photos, it's so FLUFFY and soothing!",
    icon: <BsClouds />,
  },
  {
    id: 6,
    title:
      "Love watching water drops and the puddles' reflections on drizzling days.",
    desc: 'It is fascinating and therapeutic.',
    icon: <BsCloudRain />,
  },
  {
    id: 7,
    title: 'Find handwashing the dishes also therapeutic.',
    desc: 'Only when there are gloves to protect my eczema-prone right hand.',
    icon: <FaHandsWash />,
  },
  {
    id: 8,
    title: '(Still) have a dream to be a children book illustrator.',
    desc: 'I collect many children illustrated books for inspiration. Some of the favourites are Rebecca Green, Oliver Jeffers, Teagan White and Vivian Mineker.',
    icon: <FaBook />,
  },
];
