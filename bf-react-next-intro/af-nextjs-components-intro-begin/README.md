# React Components Intro

# Steps

- Create and Run the Next.js Project
  - Right mouse click on the directory where you want the project and choose `Open In Integrated Terminal`.
  - Create the project
    `npx create-next-app components-example`
  - Go in to the new project folder
    `cd components-example`
  - Run the project
    `npm run dev`
- In the `pages/index.js`
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
- In your `components-example` project create a folder named `components` in the root of your project.
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
- Create a new file in the `components` folder called `NewConcept.js` like you did with the `Hello` component. The only difference is that you're going to pass a parameter named `props`.
- In your component use the prop named `concept` in the component itself. It should look something like below.
```jsx
export default function NewConcept(props) {
  return (
  <p>
  In this class we'll learn: {props.concept}
  </p>
  )
}
```

- Import it and use it in your `index.js`
```jsx
import NewConcept from '../components/NewConcept'
```
- use it under the the Hello and define a prop `concept` like below. 
```jsx
<main className={styles.main}>
  <h1 >
    Fundamentals Components Example
  </h1>
  <Hello />
  <NewConcept concept={"how to import components"} />
  <NewConcept concept={"how to use props in a component"} />
  <NewConcept concept={"how to import components"} />
</main>
```

- This will pass in the `concept` as the argument of the previous step.
- Create a component called `ComponentWrapper` in the same way that you've done with the past two (define the props parameter).
- In the function we're going to use a special prop named `children` like so.
```jsx
export default function ComponentWrapper(props) {
  return (
  <div style={{color: props.textColor}}>
  {props.children}
  </div>
  )
}
```
- This is an example using the `children` property. If an element has this it can wrap other components (see the next step) or you can nest components in its' definition. 
- This is an example using the `style` property on elements which is given to us by React. Although we won't use this much in the course it is a way (not the only/best way). If you want to [read more about style read here](https://reactjs.org/docs/dom-elements.html#style) 
- Import it in the `index.js` file and wrap all of the other components with it.   
```jsx
    import ComponentWrapper from '../components/ComponentWrapper'
```
- nest all of the other components like so.
```jsx
<main className={styles.main}>
  <h1 >
    Fundamentals Components Example
  </h1>
  <ComponentWrapper textColor={"blue"}>
    <Hello />
    <NewConcept concept={"how to import components"} />
    <NewConcept concept={"how to use props in a component"} />
    <NewConcept concept={"how to import components"} />
  </ComponentWrapper>
</main>
```
- Observe the differences on the page.

Note: this notation is how we're going to name components throughout the course. That is the file having the same name as the name of the component.
