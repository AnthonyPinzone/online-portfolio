# Anthony Pinzone's Developer Portfolio

[Welcome to my Portfolio!](http://www.anthonypinzone.online)

I intend to keep on expanding this repository to include things like code snippets, tutorials, skeleton starters, and more!

Follow along on this sites journey via the checklist below, and if you're looking for an awesome Frontend Dev to contribute to or join your team, reach out via the contact form on my site 😀

## Portfolio MVP

- [x] Project Setup

  - [x] Choose a stack for the 2023 site update
  - [x] Get a new branch started for the 2023 site update
  - [x] Install the chosen stack on the new branch
  - [x] Setup linting and tooling (ESLint, Prettier, SASS, etc)
  - [x] Setup some basic SASS functions, mixins and variables

- [x] Initial Design & Structure

  - [x] Get the homepage implemented with plain HTML/CSS
  - [x] Continue tweaking the design until you're happy with the entire page
  - [x] Break down the initial implementation into components

- [ ] Global Features

  - [x] Animations should be removed if `prefers-reduced-motion` is set to `reduce`
  - [x] A simple JSON file should hold as much data as possible and be available to all components
  - [x] Stub out a context for the future theming feature
  - [ ] _More to come..._

- [ ] Reusable Components

  - [x] SkillIcon: `Figure` displaying an icon only by default, shows `figcaption` on hover
  - [x] ScrollingLink: A link that smooth scrolls to the appropriate section on the site
  - [x] Alert: A pop-in that's themed green for 'success' or red for 'error'; handles messaging
  - [x] DynamicIcon: Dynamically fetches icons from the react-icon library via the provided library and icon name
  - [x] Input: Handles several different input types and ensures proper structure label + input structure
  - [ ] _More to come..._

- [x] Navigation

  - [x] Make the navbar responsive
  - [x] Navigation links should smooth scroll to the appropriate section
    - [x] On mobile, close the panel first, then scroll
  - [x] Implement the mobile menu functionality
  - [x] Clicking the logo should bring the user to the top of the page

- [x] Hero

  - [x] Make the hero responsive
  - [x] Find a good image to use
  - [x] Determine the content
  - [x] Add quick-access links for LinkedIn, Github and CodePen

- [ ] Projects

  - [x] Make the projects section responsive
  - [ ] Add Project Summaries
  - [ ] Add Project Images
  - [ ] View Project links should expand the chosen project into a modal like component with the following info:
    - [ ] Problem statement
    - [ ] Solution statement
    - [ ] Developer insights (define what this looks like)
    - [ ] Skills / Techologies / Languages used
    - [ ] HD imagery (if available)

- [x] Experiences

  - [x] Make the experience section responsive
  - [x] Setup horizontal scrolling in the experience section with CSS snapping functionality
  - [x] Remove the next and previous buttons for now, make each card tabbable for accessibility
  - [x] Add skills icons to the experience cards
    - [x] Find icons for soft skills as part of this task
  - [x] Add experiences content

- [ ] Testimonials

  - [ ] Add new section for testimonials
  - [ ] Setup the HTML structure: `figure` and `figcaption` with image
  - [ ] Style the component: large quote, smaller name, circle image
  - [ ] Make the testimonial section responsive
  - [ ] Gather testimonials from LinkedIn, former coworkers, and current students
  - [ ] Add testimonial content to the data file

- [x] Footer

  - [x] Make the footer responsive
  - [x] Hook up all the footer navigation links
  - [x] Hook up the contact form to send an email using `emailjs`

- [ ] Final Walkthrough
  - [ ] Spelling is correct throughout and grammar is on point
  - [ ] All links go where they're expected to go
  - [ ] All call to actions work as expected
  - [ ] All text is legible at all breakpoints
  - [ ] Passes all accessibility checks, shoot for AAA result, ok with AA for first pass
  - [ ] Do a speed test to see if anything obvious needs to be optimized

## Portfolio Future

- [ ] AAA accessibility compliance
- [ ] Dark Mode
- [ ] Theme Switcher w/ multiple color palettes
- [ ] Better animation for the experience timeline (GSAP? Framer?)
- [ ] Individual "pages" for the project pages instead of a modal (do some research here to see which is a better user experience first)
- [ ] Replace PropTypes with TypeScript
- [ ] Code Snippets feature w/ Storybook: _The goal here is to share commonly used code snippets for HTML, CSS, JavaScript, React and maybe other languages aimed at beginner devs. There'd be a tutorial aspect to this as well._
- [ ] Tutorial implementation: _This could be either an advanced feature of the Code Snippets storybook instance or a completely separate section of the site in more of a blog format._

## Other Ideas for Projects & Learning

_My biggest goal in my career is always to be learning or trying something new. Here are a few ideas for projects I have that would allow me to start expanding my knowledge into the Full Stack realm instead of solely Frontend focused._

- Project: Job application tracking tool
- Project: Full Time RVer Blog
- Project or Notion Page: Reusable RV checklist that's customizable
- Learning: Dig into Eleventy more, focusing on its usability for non-developers vs. Wordpress

## Project Resources and References

Links to all of the documentation, articles, websites, and tutorials that helped me along the way. Huge shoutout to anyone who wrote or contributed to any of these. Hopefully someone else reading this finds value from them.

### Articles & Tutorials

- [How to implement reCAPTCHA in a React application](https://blog.logrocket.com/implement-recaptcha-react-application/) by David Omotayo
- [React dynamic imports and route-centric code splitting guide](https://blog.logrocket.com/react-dynamic-imports-route-centric-code-splitting-guide/) by Lawrence Eagles
- [Dynamic imports in React](https://medium.com/@shubham3480/dynamic-imports-in-react-3e3e7ad1d210) by Shubham Gupta

### Documentation & Packages

- `react` - https://react.dev/reference/react - _The best react reference comes straight from the source._
- `prop-types` - https://www.npmjs.com/package/prop-types
- `react-scroll` - https://github.com/fisshy/react-scroll
- `react-icons` - https://react-icons.github.io/react-icons/
- `emailjs` - https://www.emailjs.com/docs/tutorial/overview/
- `reCAPTCHA v3` - https://developers.google.com/recaptcha/docs/v3

- `react-google-recaptcha` - https://www.npmjs.com/package/react-google-recaptcha
- `validator` - https://www.npmjs.com/package/validator
- `react-bootstrap` - https://react-bootstrap.netlify.app/docs/ - _I've been using this library here and there as inspiration, I've not used bootstrap on this particular site._
