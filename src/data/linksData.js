import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaCodepen,
  FaDev,
  FaGithub,
} from 'react-icons/fa';

import {
  EnvelopeIcon,
  JournalIcon,
  HeartIcon,
  HomeIcon,
} from '../components/svgs';

let router;
export const navLinks = [
  {
    id: 1,
    name: 'Home',
    url: '/',
    current: router?.pathname.includes('/'),
    svg: <HomeIcon />,
  },
  {
    id: 2,
    name: 'Projects',
    url: '/projects',
    current: router?.pathname.includes('/projects'),
    svg: <HeartIcon />,
  },
  {
    id: 3,
    name: 'Journal',
    url: '/journal',
    current: router?.pathname.includes('/journal'),
    svg: <JournalIcon />,
  },
  {
    id: 4,
    name: 'Contact',
    url: '/contact',
    current: router?.pathname.includes('/contact'),
    svg: <EnvelopeIcon />,
  },
];

export const socialMediaLinks = [
  {
    id: 1,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/angiehentri/',
    icon: <FaLinkedinIn />,
  },
  {
    id: 2,
    name: 'Github',
    url: 'https://github.com/a-sh-dev',
    icon: <FaGithub />,
  },
  {
    id: 3,
    name: 'Codepen',
    url: 'https://codepen.io/angiesh/pens/',
    icon: <FaCodepen />,
  },
  {
    id: 4,
    name: 'Twitter',
    url: 'https://twitter.com/heya_sh',
    icon: <FaTwitter />,
  },
  {
    id: 5,
    name: 'Instagram',
    url: 'https://www.instagram.com/a_sh.is/',
    icon: <FaInstagram />,
  },
];
