# ✨ Personal Portfolio

```
👉🏻 version 1.0
```



This project is the second personal portfolio built since I've begun my coding journey. A revamped of the first one that I built by only using HTML5 and SASS. <sub> [Check the GitHub repo for the first project.](https://github.com/a-sh-dev/T1A2_Portfolio)</sub>

After completing the boot camp, I initially planned to use only `React.js`, but I'm sold by how `Next.js` features a faster and more scalable app due to its server-side rendering capability. `Next.js` is an extension framework of the `React.js` library plus the added SEO friendliness and built-in router improvements. Generally, it's faster due to its server-side rendering functionality, especially for generating static websites.

The most enjoyable learning in this project is building reusable components and working on conditional rendering. In addition, I try to limit the number of folders and too nested components by combining the styling in one file. All the UI styling are only made possible (and faster) thanks to `twin.macro`, which significantly assists in blending the best of two worlds between `Tailwind CSS` and `Styled-Components`. 

By no means this portfolio is entirely complete. There are many rooms for improvements. But here I am applying the agile methodology and deploying this version – that I think is presentable despite its imperfectness and known issues.

> Live  →   [www.a-sh.cc](https;//www.a-sh.cc)

<sub>&darr;   Please check the following known issues and upcoming improvement plans (any help or issues report is much appreciated!). </sub>



### ⚙️ Tech Stack & NPM Packages ( & tools )

- Next.js
- Node.js `v16.13.0`
- Tailwind CSS
- Styled-Components
- Twin.macro
- React-icons
- React-easy-emoji
- @svgr – for custom svg conversions into functional components
- Date-fns
- SendGrid for contact form integration
- Vercel for deployment
- Responsive Viewer chrome extension – an absolute gem!



### 💪🏼  Future Improvements

- Filterable `Journal` cards and `Project` cards.
- Individual page for every `Project` with detailed information and more images.
- Page transitions or loading (with `Framer motion`) for additional features and overall UI improvements.
- Branded 404 error page
- Integrating `MongoDB` for `Journal` entries.
- SEO and accesibility improvements 
- Add more projects!



### 🛠  Known Issues

- Due to an unknown issue, I'm currently fixing the `SendGrid` integrated contact form. I tried testing the form submission to the `Next.js` endpoints, yet despite the 200 status delivery reports, I never received any emails in the mailbox. 🥲
- I tried to animate the heights of the collapsible component on the about me section (on the home page). Yet, it has resulted in weird unwanted extra spacing to the remaining content. I may use a third-party package to help with this additional interactivity.



### 🌝  Personal Reflections

I didn't expect the overall development to consume more time! However, I sweat on the content, flow and styling, and I am very proud of what I've done so far and learned a lot!

As a first-timer using `Tailwind CSS`, I genuinely recommend it. Not only it is highly customisable, but it also makes styling faster. I learned more about flexbox and grid layout in this project despite how often it drives me insane! Currently, the responsive design uses a lot of manual tweaking for each breakpoint (which I'm not happy about). There should be a smarter and D.R.Yer way to solve this. Maybe planning and spending more effort configuring the design system before development would save more time and effort in the overall responsive UI styling for future projects. For example, figuring out the responsive font sizes, margins and paddings etc. (Yes, these things (really) matter to designers 🤣) Well, I look forward to learning more and improving!



---

<sub>This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Built with `Node v16.13.0`, packaged with `Yarn`.</sub>

---

**Crafted with care ❤ (and powered by lots of caffeine ☕️ 🍵 🫖) by a-sh. © 2022**
