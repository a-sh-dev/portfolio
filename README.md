# ✨ Personal Portfolio

```
 → version 1.1
```



This project is the second personal portfolio built since I've begun my coding journey. A revamped of the first one that I built by only using `HTML5` and `SASS`. <sub> [Check the GitHub repo for the first project.](https://github.com/a-sh-dev/T1A2_Portfolio)</sub>

### 🤔 Problem

Using `HTML5` and `SASS` alone is not practical to maintain a scalable portfolio. I need a templating or pattern system that I can utilise as reusable components in the portfolio and enforce a cohesive and consistent look to the UI.

For styling, I want to experiment using `Tailwind CSS` and utilise the flexibility of `Styled-Components`. 

### 💡 Solution

After completing the boot camp, I initially planned to use only `React.js`, but I'm sold by how `Next.js` features a faster and more scalable app due to its server-side rendering capability. `Next.js` is an extension framework of the `React.js` library plus the added SEO friendliness and built-in router improvements. Generally, it's faster due to its server-side rendering functionality, especially for generating static websites.  

The most enjoyable learning in this project is creating *design patterns* →  building reusable components, and working on conditional rendering through data iterations for better maintainability. All the UI styling are only made possible (and faster) thanks to `twin.macro`, which significantly assists in blending the best of two worlds between `Tailwind CSS` and `Styled-Components`. 

By no means this portfolio is entirely complete. There are many rooms for improvements. But I'm happy to release this version while at the same time working for further development and refinement.

> Live   👉🏻    [***a-sh.cc***](https://www.a-sh.cc)

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
- Axios
- <s>SendGrid</s> Formspree for contact form integration
- Vercel for deployment
- Responsive Viewer chrome extension – an absolute gem!



### 💪🏼  Future Improvements

- Integrating `Sanity` for headless CMS content management
- <s>Filterable `Journal` cards</s> and `Project` cards
- Filterable `Journal` cards for Mobile screens
- Individual page for every `Project` with detailed information and more images
- Page transitions or loading (with `Framer motion`) for additional features and overall UI improvements
- Branded 404 error page
- SEO and accessibility improvements
- Typescript integrations
- Unit testing integrations 


### 🛠  Known Issues

- <s>Due to an unknown problem, I'm currently fixing the `SendGrid` integrated contact form. I tried testing the form submission to the `Next.js` endpoints, yet despite the 200 status delivery reports, I never received any emails in the mailbox. 🥲</s> 
  - After several fix attempts, I finally used the `SendGrid` alternative, `Formspree` (as recommended by [Next](https://vercel.com/guides/deploying-react-forms-using-formspree-with-vercel)). The `SendGrid` contact form finally worked in development, and I could receive the submitted messages. However, unfortunately, it failed on production/deployment (even with neccessary environment variables already added to Vercel's settings, and redeployed). I will investigate further.
  - Special thanks to *Manu Arora* ([manuarora700](https://github.com/manuarora700)) for the kind help in trying to solve the `SendGrid` issues! 🙌🏼
  
- I tried to animate the heights of the collapsible component on the about me section (on the home page). Yet, it has resulted in weird unwanted extra spacing to the remaining content. I may use a third-party package to help with this additional interactivity.


---

<sub>This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Built with `Node v16.13.0`, packaged with `Yarn`.</sub>

---

<sub>**Crafted with care ❤ (and powered by lots of caffeine ☕️ 🍵 🫖) by a-sh. © Since 2022**</sub>
