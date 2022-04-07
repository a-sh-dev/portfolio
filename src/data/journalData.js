import svgEmoji from '../utils/emoji';
import { format, differenceInCalendarDays, parseISO } from 'date-fns';
import { todaysDate } from '../utils';

// minus one day so it counts 001 from the start (original date: 2021,3,22)
export const circa = new Date(2021, 3, 21);
const dateFormat = 'dd.MM.yy';

export const todaysCodingDay = differenceInCalendarDays(todaysDate, circa);

const tags = {
  mo: { label: 'moment', color: 'purple', note: 'special' },
  ic: { label: 'initial commit', color: 'pink', note: 'code' },
  ac: { label: 'achievement', color: 'yellow', note: 'special' },
  ex: { label: 'exploring', color: 'teal', note: 'code' },
  wi: { label: 'WIP', color: 'blue', note: 'standard' },
  re: { label: 'reminder', color: 'gray', note: 'reminder' },
};

export const journalDays = [
  {
    date: format(new Date('2022/4/7'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 4, 7), circa),
    tag: tags.re,
    code: '',
    note: `Even simple questions are powerful. Asking "Why?" provokes reflection. Asking "Why not?" drives innovation.`,
    sub: 'Nathan Young',
    emoji: svgEmoji('💬'),
  },
  {
    date: format(new Date('2022/1/24'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 1, 24), circa),
    tag: tags.re,
    code: '',
    note: `Design is not just what it looks like and feels like. Design is how it works.`,
    sub: 'Steve Jobs',
    emoji: svgEmoji('🪄'),
  },
  {
    date: format(new Date('2021/10/21'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 10, 21), circa),
    tag: tags.re,
    code: '',
    note: `Do not fear failure but rather fear not trying.`,
    sub: 'Roy T. Bennet',
    emoji: svgEmoji('💥'),
  },
  {
    date: format(new Date('2022/2/18'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 2, 18), circa),
    tag: tags.re,
    code: '',
    note: `There is no failure except in no longer trying.`,
    sub: 'Elbert Hubbard',
    emoji: svgEmoji('💪🏼'),
  },
  {
    date: format(new Date('2022/1/3'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 1, 3), circa),
    tag: tags.re,
    code: '',
    note: `Fixed mindset, "I will never be smart, I'm not good at this, I give up!". Growth mindset, "Mistakes help me learn, I'll learn how to do this."`,
    sub: '',
    emoji: svgEmoji('🙌🏼'),
  },
  {
    date: format(new Date('2021/7/7'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 7, 7), circa),
    tag: tags.re,
    code: '',
    note: 'Strive for Progress, Not Perfection.',
    sub: 'Dave Gray (@yesdavidgray)',
    emoji: svgEmoji('🙏🏻'),
  },
  {
    date: format(new Date('2021/4/14'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 4, 14), circa),
    tag: tags.re,
    code: '',
    note: 'To be an effective programmer, you need to get used to seeing errors.',
    sub: 'Alex B (Coder Academy Educator)',
    emoji: svgEmoji('🚫'),
  },
  {
    date: format(new Date('2021/3/22'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 3, 22), circa),
    tag: tags.mo,
    code: '',
    note: 'Start of coding journey!',
    emoji: svgEmoji('🔰'),
  },
  {
    date: format(new Date('2022/4/1'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 4, 1), circa),
    tag: tags.ac,
    code: '',
    note: 'Officially graduated from Coder Academy & formally obtained a certificate of Diploma in IT.',
    emoji: svgEmoji('🎖'),
  },
  {
    date: format(new Date('2021/4/25'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 4, 25), circa),
    tag: tags.ac,
    code: '',
    note: 'Built the first HTML5 & SCSS only portfolio.',
    emoji: svgEmoji('🤩'),
  },
  {
    date: format(new Date('2022/2/24'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 2, 24), circa),
    tag: tags.ic,
    code: 'TypeScript',
    note: 'The superset of JS, with Types features to improve JS codes readability and validations.',
    emoji: svgEmoji('🤓'),
  },
  {
    date: format(new Date('2021/3/30'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 3, 30), circa),
    tag: tags.ic,
    code: 'scss',
    note: 'Extremely helpful CSS preprocessor to manage CSS with additional programmatic features.',
    emoji: svgEmoji('😍'),
  },
  {
    date: format(new Date('2021/4/28'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 4, 28), circa),
    tag: tags.ic,
    code: 'ruby',
    note: 'First OOP language to learn. Simple, clean and everything is an object in Ruby.',
    emoji: svgEmoji('🤓'),
  },
  {
    date: format(new Date('2021/5/27'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 5, 27), circa),
    tag: tags.ac,
    code: '',
    note: 'Built the first Ruby Terminal App.',
    emoji: svgEmoji('🥳'),
  },
  {
    date: format(new Date('2021/5/31'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 5, 31), circa),
    tag: tags.ic,
    code: 'ruby on rails',
    note: 'Quick full-stack Ruby framework that compress the complexity of modern web apps.',
    emoji: svgEmoji('🚂'),
  },
  {
    date: format(new Date('2021/6/14'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 6, 14), circa),
    tag: tags.ex,
    code: 'postgresql',
    note: "Relational database. It's quite complex to setup, but great for handling complex data.",
    emoji: svgEmoji('👥'),
  },
  {
    date: format(new Date('2021/6/22'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 6, 22), circa),
    tag: tags.ex,
    code: 'bootstrap',
    note: `Certainly helps style clean UI faster, can be customised too.`,
    emoji: svgEmoji('😎'),
  },
  {
    date: format(new Date('2021/8/17'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 8, 17), circa),
    tag: tags.mo,
    code: '',
    note: `First debut posting a question at Stack Overflow.`,
    emoji: svgEmoji('🙈'),
  },
  {
    date: format(new Date('2021/8/19'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 8, 19), circa),
    tag: tags.ac,
    code: '',
    note: `Built the first Ruby on Rails marketplace app.`,
    emoji: svgEmoji('😆'),
  },
  {
    date: format(new Date('2021/8/23'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 8, 23), circa),
    tag: tags.ic,
    code: 'Javascript',
    note: `Compared to Ruby, this 'only built in 10 days' language has many gotchas to be aware of.`,
    emoji: svgEmoji('🙄'),
  },
  {
    date: format(new Date('2022/3/18'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 3, 18), circa),
    tag: tags.ex,
    code: 'GraphQL',
    note: `APIs query language to get requests on multiple aspects of that query in one request.`,
    emoji: svgEmoji('⚙️'),
  },
  {
    date: format(new Date('2021/9/1'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 9, 1), circa),
    tag: tags.ex,
    code: 'Node.js',
    note: `Taking JavaScript beyond web browser development.`,
    emoji: svgEmoji('🤔'),
  },
  {
    date: format(new Date('2021/9/28'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 9, 28), circa),
    tag: tags.ic,
    code: 'React.js',
    note: `Amazing JavaScript library! Component based UI building made easy with state management.`,
    emoji: svgEmoji('😳'),
  },
  {
    date: format(new Date('2021/10/12'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 10, 12), circa),
    tag: tags.ex,
    code: 'Styled-components',
    note: `At first I hated it. But in fact, very helpful to combine both CSS and JS to style UI.`,
    emoji: svgEmoji('💅🏼'),
  },
  {
    date: format(new Date('2021/11/6'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 11, 6), circa),
    tag: tags.ex,
    code: 'MERN',
    note: `Hope to get deeper in each of the stack, esp. MongoDB and Express.js.`,
    emoji: svgEmoji('🌞'),
  },
  {
    date: format(new Date('2021/12/2'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 12, 2), circa),
    tag: tags.wi,
    code: '',
    note: `First group project & Git collaboration.`,
    emoji: svgEmoji('🤝'),
  },
  {
    date: format(new Date('2021/12/3'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 12, 3), circa),
    tag: tags.mo,
    code: '',
    note: `Really trying to embrace 'learning by doing' as a team despite not (fully) understanding everything...`,
    emoji: svgEmoji('🔥'),
  },
  {
    date: format(new Date('2022/3/22'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 3, 22), circa),
    tag: tags.mo,
    code: '',
    note: `Celebrating a year of coding journey.`,
    emoji: svgEmoji('🧁'),
  },
  {
    date: format(new Date('2022/2/16'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 2, 16), circa),
    tag: tags.mo,
    code: '',
    note: `a-sh.cc is finally live!`,
    emoji: svgEmoji('🎉'),
  },
  {
    date: format(new Date('2021/12/10'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 12, 10), circa),
    tag: tags.ex,
    code: 'material ui',
    note: `A level up from Bootstrap. Customisable CSS-in-JS based for styling UI with a lot of interactivity.`,
    emoji: svgEmoji('😳'),
  },
  {
    date: format(new Date('2021/12/26'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 12, 26), circa),
    tag: tags.ic,
    code: 'next.js',
    note: `React.js framework that enables server-side rendering and generate static websites.`,
    emoji: svgEmoji('👍🏼'),
  },
  {
    date: format(new Date('2021/12/27'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 12, 27), circa),
    tag: tags.wi,
    code: '',
    note: `Revamping portfolio website using Next.js.`,
    emoji: svgEmoji('😱'),
  },
  {
    date: format(new Date('2021/12/31'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 12, 31), circa),
    tag: tags.ac,
    code: '',
    note: `End of 2021 → Total of 577 GitHub contributions so far.`,
    emoji: svgEmoji('🐙'),
  },
  {
    date: format(new Date('2022/1/18'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 1, 18), circa),
    tag: tags.ac,
    code: '',
    note: `Completed Coder Academy Full-stack boot camp.`,
    emoji: svgEmoji('🎊'),
  },
  {
    date: format(new Date('2022/1/20'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 1, 20), circa),
    tag: tags.wi,
    code: '',
    note: `Revisiting and re-exploring Vanilla JavaScript.`,
    emoji: svgEmoji('🤯'),
  },
  {
    date: format(new Date('2022/1/21'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 1, 21), circa),
    tag: tags.ex,
    code: 'tailwind css',
    note: `Extremely fast utility first CSS framework. Very customisable.`,
    emoji: svgEmoji('🥰'),
  },
  {
    date: format(new Date('2022/1/26'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 1, 26), circa),
    tag: tags.ex,
    code: 'twin.macro',
    note: `Blends the magic of Tailwind CSS & CSS-in-JS. Getting the best of both utilities!`,
    emoji: svgEmoji('🔗'),
  },
];
