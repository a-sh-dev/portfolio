import { HiOutlineGift } from 'react-icons/hi';
import { GiAustralia } from 'react-icons/gi';
import {
  FaChalkboardTeacher,
  FaPencilAlt,
  FaBook,
  FaRegSmileWink,
  FaRegKissBeam,
  FaRegFlushed,
  FaRegGrinHearts,
  FaRegGrinStars,
  FaRegSmileBeam,
} from 'react-icons/fa';
import { BsFillCloudRainFill } from 'react-icons/bs';

export const randomFacts = [
  {
    id: 1,
    title: 'Great things come from a small package.',
    desc: 'I am 149.31 cm, which equals 4.8986 feet or 58.7835 inches.',
    icon: <HiOutlineGift />,
    emoji: <FaRegKissBeam />,
  },
  {
    id: 2,
    title: 'Born in Jakarta, Indonesia.',
    desc: 'Came to Melbourne in 1998 as an international student and then became an Australian citizen in 2007.',
    icon: <GiAustralia />,
    emoji: <FaRegSmileWink />,
  },
  {
    id: 3,
    title: 'Briefly worked as an Assistant Language Teacher in Japan.',
    desc: 'Assisting local English teachers in public primary and secondary schools. Then came back to Melbourne just a week before the 2011 Tohoku earthquake and tsunami disaster.',
    icon: <FaChalkboardTeacher />,
    emoji: <FaRegFlushed />,
  },
  {
    id: 4,
    title:
      "Love to doodle and admire other people's illustrations (and adorable pet photos).",
    desc: 'I have yet to find my personal illustration style, but Studio Ghibli has been my inspiration.',
    icon: <FaPencilAlt />,
    emoji: <FaRegGrinHearts />,
  },
  {
    id: 5,
    title: "Find cloud gazing and puddles' reflections therapeutic.",
    desc: "Before the pandemic, I used to take lots of (fluffy) cloud photos. I also enjoy observing puddles' reflections on drizzling days. They are therapeutically fascinating!",
    icon: <BsFillCloudRainFill />,
    emoji: <FaRegGrinStars />,
  },

  {
    id: 6,
    title: '(Still) have a dream to be a children book illustrator.',
    desc: 'I collect many children illustrated books for inspiration. Some of the favourites are Rebecca Green, Oliver Jeffers, Teagan White and Vivian Mineker.',
    icon: <FaBook />,
    emoji: <FaRegSmileBeam />,
  },
];
