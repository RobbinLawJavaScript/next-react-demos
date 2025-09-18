# Steps to Create a Next/React Project

## Also Creating a Simple Component and Consuming It

- Right mouse click on the directory where you want to place the new project and choose:
  - `Open In Integrated Terminal`.
- Create and Run a templated Next.js Project
  - In the integrated terminal session create the project by running the following in the terminal command line (assuming that the newly created project folder is to be called `src-1`):
  - `npx create-next-app@latest src-1`
  - Answer NO or NONE to all questions, and leave the import alias as default.
  - Go in to the new project folder (ex. src):
  - `cd src-1`
  - Install the material library with the following:
  - `npm install @mui/material @emotion/react @emotion/styled`
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

- In the `styles/Home.module.css` file change the `.page justify-items` property from `center` to `start` as shown below:

```css
.page {
  justify-items: start;
}
```

- Observe the differences on the page as you make these changes.
