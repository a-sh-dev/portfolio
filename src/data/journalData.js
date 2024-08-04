import { differenceInCalendarDays, format } from 'date-fns';
import emoji from 'react-easy-emoji';
import { todaysDate } from '../utils';

// minus one day so it counts 001 from the start (original date: 2021,3,22)
export const circa = new Date(2021, 3, 21);
const dateFormat = 'dd.MMM.yy';

export const todaysCodingDay = differenceInCalendarDays(todaysDate, circa);

const tags = {
  mo: { label: 'moment', color: 'purple', note: 'special' },
  ic: { label: 'initial commit', color: 'pink', note: 'code' },
  ac: { label: 'achievement', color: 'yellow', note: 'special' },
  ex: { label: 'exploring', color: 'teal', note: 'code' },
  wi: { label: 'WIP', color: 'blue', note: 'standard' },
  re: { label: 'reminder', color: 'gray', note: 'reminder' },
  rd: { label: 'random', color: 'olive', note: 'reminder' },
};

const tagsLabel = Object.keys(tags).map((key) => tags[key].label);
export const categories = ['all', ...tagsLabel];

// Date format for input: YYYY/M/D
export const journalDays = [
  {
    date: format(new Date('2022/9/16'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 9, 16), circa),
    tag: tags.wi,
    code: '',
    note: `Learning & getting deeper into Typescript through "Execute Program". Highly recommended!`,
    sub: '',
    emoji: emoji('💻'),
  },
  {
    date: format(new Date('2022/6/11'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 6, 11), circa),
    tag: tags.re,
    code: '',
    note: `Any fool can write code that a computer can understand. Good programmers write code that humans can understand.`,
    sub: 'Martin Fowler',
    emoji: emoji('👀'),
  },
  {
    date: format(new Date('2024/2/12'), dateFormat),
    day: differenceInCalendarDays(new Date(2024, 2, 12), circa),
    tag: tags.re,
    code: '',
    note: `Don't be nervous about AI replacing you. Instead, be nervous about people who can use AI replacing you.`,
    sub: 'Amantha Imber',
    emoji: emoji('🤖'),
  },
  {
    date: format(new Date('2024/1/15'), dateFormat),
    day: differenceInCalendarDays(new Date(2024, 1, 15), circa),
    tag: tags.re,
    code: '',
    note: `Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.`,
    sub: 'Patrick McKenzie',
    emoji: emoji('⭐️'),
  },
  {
    date: format(new Date('2022/4/9'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 4, 9), circa),
    tag: tags.re,
    code: '',
    note: `Even simple questions are powerful. Asking "Why?" provokes reflection. Asking "Why not?" drives innovation.`,
    sub: 'Nathan Young',
    emoji: emoji('💬'),
  },
  {
    date: format(new Date('2022/1/24'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 1, 24), circa),
    tag: tags.re,
    code: '',
    note: `Design is not just what it looks like & feels like. Design is how it works.`,
    sub: 'Steve Jobs',
    emoji: emoji('🪄'),
  },
  {
    date: format(new Date('2021/10/21'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 10, 21), circa),
    tag: tags.re,
    code: '',
    note: `Do not fear failure but rather fear not trying.`,
    sub: 'Roy T. Bennet',
    emoji: emoji('💥'),
  },
  {
    date: format(new Date('2022/2/18'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 2, 18), circa),
    tag: tags.re,
    code: '',
    note: `There is no failure except in no longer trying.`,
    sub: 'Elbert Hubbard',
    emoji: emoji('💪🏼'),
  },
  {
    date: format(new Date('2024/4/22'), dateFormat),
    day: differenceInCalendarDays(new Date(2024, 4, 22), circa),
    tag: tags.rd,
    code: '',
    note: `Why did the developer and git get into a fight?`,
    subNote: `Because the developer couldn't properly commit and kept trying to force it!`,
    sub: 'Jade Wilson',
    emoji: emoji('😬'),
  },
  {
    date: format(new Date('2022/1/3'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 1, 3), circa),
    tag: tags.re,
    code: '',
    note: `Fixed mindset, "I will never be smart, I'm not good at this, I give up!". Growth mindset, "Mistakes help me learn, I'll learn how to do this."`,
    sub: '',
    emoji: emoji('🙌🏼'),
  },
  {
    date: format(new Date('2022/8/3'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 8, 3), circa),
    tag: tags.re,
    code: '',
    note: `To become really good at anything, you have to practice & repeat, ...until the technique becomes intuitive.`,
    sub: 'Paulo Coelho',
    emoji: emoji('🔁'),
  },
  {
    date: format(new Date('2021/7/7'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 7, 7), circa),
    tag: tags.re,
    code: '',
    note: 'Strive for Progress, Not Perfection.',
    sub: 'Dave Gray (@yesdavidgray)',
    emoji: emoji('🙏🏻'),
  },
  {
    date: format(new Date('2021/4/14'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 4, 14), circa),
    tag: tags.re,
    code: '',
    note: 'To be an effective programmer, you need to get used to seeing errors.',
    sub: 'Alex B (Coder Academy Educator)',
    emoji: emoji('🚫'),
  },
  {
    date: format(new Date('2022/5/2'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 5, 2), circa),
    tag: tags.re,
    code: '',
    note: `The feeling of confusion (about an explanation of a new concept) is your friend, it means you're learning!`,
    sub: 'MPJME (Fun Fun Function)',
    emoji: emoji('🤨'),
  },
  {
    date: format(new Date('2022/4/11'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 4, 11), circa),
    tag: tags.mo,
    code: '',
    note: 'Published the first tech related blog article on Hashnode!',
    emoji: emoji('📡'),
  },
  {
    date: format(new Date('2024/5/7'), dateFormat),
    day: differenceInCalendarDays(new Date(2024, 5, 7), circa),
    tag: tags.mo,
    code: '',
    note: 'First live coding interview - nerves & pressure were real! This will only make me stronger.',
    emoji: emoji('💪'),
  },
  {
    date: format(new Date('2021/3/22'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 3, 22), circa),
    tag: tags.mo,
    code: '',
    note: 'Start of coding journey!',
    emoji: emoji('🔰'),
  },
  {
    date: format(new Date('2022/4/1'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 4, 1), circa),
    tag: tags.ac,
    code: '',
    note: 'Officially graduated from Coder Academy & formally obtained a Diploma of IT.',
    emoji: emoji('🎖'),
  },
  {
    date: format(new Date('2023/9/8'), dateFormat),
    day: differenceInCalendarDays(new Date(2023, 9, 8), circa),
    tag: tags.ac,
    code: '',
    note: 'First (minor) contribution to an open source!',
    emoji: emoji('👋🏼'),
  },
  {
    date: format(new Date('2021/4/25'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 4, 25), circa),
    tag: tags.ac,
    code: '',
    note: 'Built the first HTML5 & SCSS only portfolio.',
    emoji: emoji('🤩'),
  },
  {
    date: format(new Date('2022/5/17'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 5, 17), circa),
    tag: tags.ac,
    code: '',
    note: 'Grateful to be part of making a positive impact in healthcare as an Associate Software Engineer at Seer.',
    emoji: emoji('✨'),
  },
  {
    date: format(new Date('2022/2/24'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 2, 24), circa),
    tag: tags.ic,
    code: 'TypeScript',
    note: 'The superset of JS, with Types features to improve JS codes readability & validations.',
    emoji: emoji('🤓'),
  },
  {
    date: format(new Date('2024/2/1'), dateFormat),
    day: differenceInCalendarDays(new Date(2024, 2, 1), circa),
    tag: tags.ic,
    code: 'Python',
    note: 'Easy to learn, in-demand, & opens doors to web dev, data science, and beyond.',
    emoji: emoji('🐍'),
  },
  {
    date: format(new Date('2021/3/30'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 3, 30), circa),
    tag: tags.ic,
    code: 'scss',
    note: 'Extremely helpful CSS preprocessor to manage CSS with additional programmatic features.',
    emoji: emoji('😍'),
  },
  {
    date: format(new Date('2021/4/28'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 4, 28), circa),
    tag: tags.ic,
    code: 'ruby',
    note: 'First OOP language to learn. Simple, clean & (almost) everything is an object in Ruby.',
    emoji: emoji('🤓'),
  },
  {
    date: format(new Date('2021/5/27'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 5, 27), circa),
    tag: tags.ac,
    code: '',
    note: 'Built the first Ruby Terminal App.',
    emoji: emoji('🥳'),
  },
  {
    date: format(new Date('2021/5/31'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 5, 31), circa),
    tag: tags.ic,
    code: 'ruby on rails',
    note: 'Quick full-stack Ruby framework that compress the complexity of modern web apps.',
    emoji: emoji('🚂'),
  },
  {
    date: format(new Date('2022/3/20'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 3, 20), circa),
    tag: tags.ic,
    code: 'React TypeScript',
    note: `The more "type"ing is (actually) useful for validations & maintainability.`,
    emoji: emoji('😋'),
  },
  {
    date: format(new Date('2022/6/13'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 6, 13), circa),
    tag: tags.ic,
    code: 'AWS Developer',
    note: 'Group training to improve team collaboration & to succeed in the exams.',
    emoji: emoji('📚'),
  },
  {
    date: format(new Date('2022/3/25'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 3, 25), circa),
    tag: tags.wi,
    code: '',
    note: 'Pair programming with a Senior Dev friend to learn TypeScript integration with React by building a simple todo app.',
    emoji: emoji('📋'),
  },
  {
    date: format(new Date('2021/6/14'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 6, 14), circa),
    tag: tags.ex,
    code: 'postgresql',
    note: `Relational database. It's quite complex to setup, but great for handling complex data.`,
    emoji: emoji('👥'),
  },
  {
    date: format(new Date('2024/8/1'), dateFormat),
    day: differenceInCalendarDays(new Date(2024, 8, 1), circa),
    tag: tags.ex,
    code: 'C#',
    note: `Empowers you to build robust, scalable full-stack applications efficiently.`,
    emoji: emoji('#️⃣'),
  },
  {
    date: format(new Date('2024/6/7'), dateFormat),
    day: differenceInCalendarDays(new Date(2024, 6, 7), circa),
    tag: tags.ex,
    code: 'Webflow',
    note: `Visually build responsive websites without manual coding for quick prototyping and greater design freedom.`,
    emoji: emoji('👀'),
  },
  {
    date: format(new Date('2024/5/25'), dateFormat),
    day: differenceInCalendarDays(new Date(2024, 5, 25), circa),
    tag: tags.ex,
    code: 'CI/CD',
    note: `Automates testing, building, and deployment, leading to improved code quality and faster release cycles.`,
    emoji: emoji('🔄'),
  },
  {
    date: format(new Date('2022/5/19'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 5, 19), circa),
    tag: tags.ex,
    code: 'storybook.js',
    note: 'Great tool for building UI components in isolation, esp. for a team collaboration.',
    emoji: emoji('📕'),
  },
  {
    date: format(new Date('2023/2/15'), dateFormat),
    day: differenceInCalendarDays(new Date(2023, 2, 15), circa),
    tag: tags.ex,
    code: 'i18next',
    note: 'Facilitates component translation into multiple languages to enhance user and developer experience.',
    emoji: emoji('🌏'),
  },
  {
    date: format(new Date('2021/6/22'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 6, 22), circa),
    tag: tags.ex,
    code: 'bootstrap',
    note: `Certainly helps style clean UI faster, can be customised too.`,
    emoji: emoji('😎'),
  },
  {
    date: format(new Date('2021/8/17'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 8, 17), circa),
    tag: tags.mo,
    code: '',
    note: `First debut posting a question at Stack Overflow.`,
    emoji: emoji('🙈'),
  },
  {
    date: format(new Date('2021/8/19'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 8, 19), circa),
    tag: tags.ac,
    code: '',
    note: `Built the first Ruby on Rails marketplace app.`,
    emoji: emoji('😆'),
  },
  {
    date: format(new Date('2021/8/23'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 8, 23), circa),
    tag: tags.ic,
    code: 'Javascript',
    note: `Compared to Ruby, this "only built in 10 days" language has many gotchas to be aware of.`,
    emoji: emoji('🙄'),
  },
  {
    date: format(new Date('2022/11/11'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 11, 11), circa),
    tag: tags.ex,
    code: 'Knex.js',
    note: `"Batteries included" PostgresSQL (& other SQLs) query builder, flexible, portable, & fun to use.`,
    emoji: emoji('🔋'),
  },
  {
    date: format(new Date('2022/3/18'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 3, 18), circa),
    tag: tags.ex,
    code: 'GraphQL',
    note: `APIs query language to get requests on multiple aspects of that query in one request.`,
    emoji: emoji('⚙️'),
  },
  {
    date: format(new Date('2021/9/1'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 9, 1), circa),
    tag: tags.ex,
    code: 'Node.js',
    note: `Taking JavaScript beyond web browser development.`,
    emoji: emoji('🤔'),
  },
  {
    date: format(new Date('2021/9/28'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 9, 28), circa),
    tag: tags.ic,
    code: 'React.js',
    note: `Amazing JavaScript library! Component based UI building made easy with state management.`,
    emoji: emoji('😳'),
  },
  {
    date: format(new Date('2021/10/12'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 10, 12), circa),
    tag: tags.ex,
    code: 'Styled-components',
    note: `At first I hated it. But in fact, very helpful to combine both CSS & JS to style UI.`,
    emoji: emoji('💅🏼'),
  },
  {
    date: format(new Date('2021/11/6'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 11, 6), circa),
    tag: tags.ex,
    code: 'MERN',
    note: `Hope to get deeper in each of the stack, esp. MongoDB & Express.js.`,
    emoji: emoji('🌞'),
  },
  {
    date: format(new Date('2023/7/4'), dateFormat),
    day: differenceInCalendarDays(new Date(2023, 7, 4), circa),
    tag: tags.ex,
    code: 'E2E testing',
    note: `Cypress + Cucumber simplify & streamline E2E testing. The visual test runner is also very helpful!`,
    emoji: emoji('🥒'),
  },
  {
    date: format(new Date('2021/12/2'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 12, 2), circa),
    tag: tags.wi,
    code: '',
    note: `First group project & Git collaboration.`,
    emoji: emoji('🤝'),
  },
  {
    date: format(new Date('2021/12/3'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 12, 3), circa),
    tag: tags.mo,
    code: '',
    note: `Really trying to embrace "learning by doing" as a team despite not (fully) understanding everything...`,
    emoji: emoji('🤔'),
  },
  {
    date: format(new Date('2022/3/22'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 3, 22), circa),
    tag: tags.mo,
    code: '',
    note: `Celebrating a year of coding journey.`,
    emoji: emoji('🧁'),
  },
  {
    date: format(new Date('2023/3/22'), dateFormat),
    day: differenceInCalendarDays(new Date(2023, 3, 22), circa),
    tag: tags.mo,
    code: '',
    note: `Celebrating two years of coding journey!`,
    emoji: emoji('🍻'),
  },
  {
    date: format(new Date('2024/3/22'), dateFormat),
    day: differenceInCalendarDays(new Date(2024, 3, 22), circa),
    tag: tags.mo,
    code: '',
    note: `Celebrating three years of coding journey!`,
    emoji: emoji('🌟'),
  },
  {
    date: format(new Date('2024/3/24'), dateFormat),
    day: differenceInCalendarDays(new Date(2024, 3, 24), circa),
    tag: tags.ex,
    code: 'framer motion',
    note: `A powerful React motion library that adds stunning interactions and animations to your web apps.`,
    emoji: emoji('🔮'),
  },
  {
    date: format(new Date('2024/3/27'), dateFormat),
    day: differenceInCalendarDays(new Date(2024, 3, 27), circa),
    tag: tags.mo,
    code: '',
    note: `Mass layoffs are tough, but let's use this as a chance for growth and self-discovery. Don't give up!`,
    emoji: emoji('🔥'),
  },
  {
    date: format(new Date('2022/2/16'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 2, 16), circa),
    tag: tags.mo,
    code: '',
    note: `a-sh.cc is finally live!`,
    emoji: emoji('🎉'),
  },
  {
    date: format(new Date('2021/12/10'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 12, 10), circa),
    tag: tags.ex,
    code: 'material ui',
    note: `A level up from Bootstrap. Customisable CSS-in-JS based for styling UI with a lot of interactivity.`,
    emoji: emoji('😳'),
  },
  {
    date: format(new Date('2021/12/26'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 12, 26), circa),
    tag: tags.ic,
    code: 'next.js',
    note: `React.js framework that enables server-side rendering & generate static websites.`,
    emoji: emoji('👍🏼'),
  },
  {
    date: format(new Date('2021/12/27'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 12, 27), circa),
    tag: tags.wi,
    code: '',
    note: `Revamping portfolio website using Next.js.`,
    emoji: emoji('😱'),
  },
  {
    date: format(new Date('2021/12/31'), dateFormat),
    day: differenceInCalendarDays(new Date(2021, 12, 31), circa),
    tag: tags.ac,
    code: '',
    note: `End of 2021 → Total of 577 GitHub contributions so far.`,
    emoji: emoji('🐙'),
  },
  {
    date: format(new Date('2022/1/18'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 1, 18), circa),
    tag: tags.ac,
    code: '',
    note: `Completed Coder Academy Full-stack boot camp.`,
    emoji: emoji('🎊'),
  },
  {
    date: format(new Date('2022/1/20'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 1, 20), circa),
    tag: tags.wi,
    code: '',
    note: `Revisiting & re-exploring Vanilla JavaScript.`,
    emoji: emoji('🤯'),
  },
  {
    date: format(new Date('2022/1/21'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 1, 21), circa),
    tag: tags.ex,
    code: 'tailwind css',
    note: `Extremely fast utility first CSS framework. Very customisable.`,
    emoji: emoji('🥰'),
  },
  {
    date: format(new Date('2022/1/26'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 1, 26), circa),
    tag: tags.ex,
    code: 'twin.macro',
    note: `Blends the magic of Tailwind CSS & CSS-in-JS. Getting the best of both utilities!`,
    emoji: emoji('🔗'),
  },
  {
    date: format(new Date('2022/5/23'), dateFormat),
    day: differenceInCalendarDays(new Date(2022, 5, 23), circa),
    tag: tags.ex,
    code: 'Jest & RTL',
    note: `Deepening unit testing practice with Jest & React Testing Library. Testing is crucial, indeed!`,
    emoji: emoji('🧪'),
  },
];
