# React Components Intro

# Steps
- See if `create-next-app` is on this machine.
  - Start a terminal session and on the command line type:
  - `create-next-app --version`
- Install `create-next-app` globally, but only if it is not on this machine.
  - Start a terminal session and on the command line type:
  - `npm install -g create-next-app@latest`
- Create and Run a templated Next.js Project
  - Right mouse click on the directory where you want the project and choose:
  - `Open In Integrated Terminal`.
  - Create the project:
  - `npx create-next-app src`
  - Go in to the new project folder:
  - `cd src`
  - Install all dependencies:
  - `npm install`
  - Run the project:
  - `npm run dev`
- In the `pages/index.js` file:
  - remove everything in the main tag.
  - remove the footer if there is one.
  - Create the following h1 in the main.
```js
<main className={styles.main}>
  <h1 >
    Fundamentals of Components Example
  </h1>
</main>
```
- Observe the differences on the page as you make these changes.
- In the `src` project folder create a new folder named `components`.
- In the `components` folder create a file named `Hello.js`
  - create a function named `Hello` with `export default` before the function keyword.
  - in that function just return some html in it.
```js
export default function Hello() {
  return (
  <h3>
  Hello this is our first component.
  </h3>
  )
}
```
- Import your newly created component in the `index.js` file in your `pages` folder with the following
```js
import Hello from '../components/Hello.js'
```
- Use that component in main.
```jsx
<main className={styles.main}>
  <h1 >
    Fundamentals Components Example
  </h1>
  <Hello />
</main>
```
- Observe the differences on the page as you make the changes.

Note: this notation is how we're going to name components throughout the course. That is the file having the same name as the name of the component.
