# Steps to Create a Next/React Project 
# Also Creating a Simple Component and Consuming It

- See if `create-next-app` is on this machine.
  - Start a terminal session and on the command line type:
  - `create-next-app --version`
  - If a version comes back it is installed already, no need to do next step, unless you want the latest version.
- Install the latest version of `create-next-app` globally.
  - Start a terminal session and on the command line type:
  - `npm install -g create-next-app@latest`
- Create and Run a templated Next.js Project
  - Right mouse click on the directory where you want to place the new project and choose:
  - `Open In Integrated Terminal`.
  - Create the project by running the following in the terminal:
  - `npx create-next-app src`
  - Answer NO to all 4 questions, and leave the import alias as default.
  - Go in to the new project folder:
  - `cd src`
  - Install the material library with the following:
  - `npm install @mui/material @emotion/react @emotion/styled`
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
    Welcome to Next/React
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
- Import your newly created component in the `index.js` file in your `pages` folder with the following. Place it after the other imports.
```js
import Hello from '../components/Hello.js'
```
- Use that new component in main.
```jsx
<main className={styles.main}>
  <h1 >
    Welcome to Next/React
  </h1>
  <Hello />
</main>
```
- Observe the differences on the page as you make the changes.

- In the `styles/Home.module.css` file change the `.main justify-content property` from `space-between` to `center` as shown below:
```css
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
}
```
- Observe the differences on the page as you make these changes.