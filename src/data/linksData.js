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

export const navLinks = [
  {
    id: 1,
    name: 'Home',
    url: '/',
    svg: <HomeIcon />,
  },
  {
    id: 2,
    name: 'Projects',
    url: '/projects',
    svg: <HeartIcon />,
  },
  {
    id: 3,
    name: 'Journal',
    url: '/journal',
    svg: <JournalIcon />,
  },
  {
    id: 4,
    name: 'Contact',
    url: '/contact',
    svg: <EnvelopeIcon />,
  },
];

export const socialMediaLinks = [
  {
    id: 1,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/angiehentri/',
    icon: <FaLinkedinIn />,
    color: 'teal',
  },
  {
    id: 2,
    name: 'Github',
    url: 'https://github.com/a-sh-dev',
    icon: <FaGithub />,
    color: 'gray',
  },
  {
    id: 3,
    name: 'Twitter',
    url: 'https://twitter.com/heya_sh',
    icon: <FaTwitter />,
    color: 'blue',
  },
  {
    id: 4,
    name: 'Instagram',
    url: 'https://www.instagram.com/a_sh.is/',
    icon: <FaInstagram />,
    color: 'pink',
  },
  {
    id: 5,
    name: 'Codepen',
    url: 'https://codepen.io/angiesh/pens/',
    icon: <FaCodepen />,
    color: 'purple',
  },
];

export const shortSocialLinks = [
  socialMediaLinks[0],
  socialMediaLinks[2],
  socialMediaLinks[3],
  socialMediaLinks[1],
];
