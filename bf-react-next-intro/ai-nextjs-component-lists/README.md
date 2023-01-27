# React Component Lists Intro

# Steps


Create and Run the Next.js Project
- Right mouse click on the directory where you want the project and choose `Open In Integrated Terminal`.
- Create the project
 `npx create-next-app components-lists-example`
- Go in to the new project folder
 `cd components-lists-example`
- Run the project
 `npm run dev`

In the `pages/index.js`
- remove everything in the main tag.
- remove the footer if there is one.
- Observe the differences on the page as you make these changes.

In the project root folder create a new `components` folder and in that folder create a component file named `SimpsonsCharacters.js`. 
In that file create a function named `SimpsonsCharacters` like you would for any component (this should become second nature shortly.)

Import that file in your `index.js` file.
```js
import SimpsonsCharacters from '../components/SimpsonsCharacters'
```
Use the component in your JSX of the `index.js` file.
```js
<SimpsonsCharacters />
```
In the "SimpsonsCharacters.js" file add a list of characters that we're going to loop over.
```js
const SIMPSON_CHARACTERS = [
  {id: 1, name: "Homer Simpson"},
  {id: 2, name: "Bart Simpson"},
  {id: 3, name: "Marge Simpson"},
  {id: 4, name: "Mr. Burns"},
  {id: 5, name: "Lisa Simpson"},
  {id: 6, name: "Apu Nahasapeemapetilon"},
  {id: 7, name: "Sideshow Bob"},
  {id: 8, name: "Milhouse Van Houten"},
  {id: 9, name: "Ned Flanders"},
];
```

In the `SimpsonsCharacters.js` file we're going to take a look at how to loop over lists in JSX.
- We're going to loop over the `SIMPSON_CHARACTERS` using `map` by using `{}` in the JSX to show that we're going to be using `vanilla JavaScript` in our JSX.
- Below we're going to see that we use the `key` on each `<li></li>` element because this is a requirement with react. More on [lists and keys here](https://reactjs.org/docs/lists-and-keys.html#gatsby-focus-wrapper)
- The component will look something like this.
```jsx
// SIMPSON_CHARACTERS defined up here.

export default function SimpsonsCharacters() {
  return (
  <ul>
    {SIMPSON_CHARACTERS.map((character)=> {
      return <li key={character.id}>{character.name}</li>
    })}
  </ul>
  );
}
```

- Observe the differences on the page as you make these changes.
