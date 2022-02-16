import emoji from 'react-easy-emoji';
import { format, differenceInCalendarDays } from 'date-fns';
import { FaSass } from 'react-icons/fa';

// minus one day so it counts 001 from the start (original date: 2021,3,22)
export const circa = new Date(2021, 3, 21);
const dateFormat = 'dd MMM yy';

const tags = {
  mo: { label: 'moment', color: 'purple' },
  ic: { label: 'initial commit', color: 'teal' },
  ac: { label: 'achievement', color: 'pink' },
  ex: { label: 'exploring', color: 'blue' },
  wi: { label: 'wip', color: 'olive' },
};

export const journalDays = [
  {
    date: format(new Date('2021/3/22'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 3, 22), circa),
    tag: tags.mo,
    code: '',
    note: 'Start of coding journey',
    icon: emoji('🔰'),
  },
  {
    date: format(new Date('2021/4/25'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 4, 25), circa),
    tag: tags.ac,
    code: '',
    note: 'Built the first HTML5 & SCSS only portfolio',
    icon: emoji('🤩'),
  },
  {
    date: format(new Date('2021/3/30'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 3, 30), circa),
    tag: tags.ic,
    code: 'scss',
    note: '',
    icon: <FaSass />,
  },
];
