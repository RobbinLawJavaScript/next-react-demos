// In this file we have the data and two components
// which is NOT good practice but used here to show
// different ways of accomplishing the same thing.

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

// This component demos using .map() to create a list of li items,
// and then integrate the il items in a ul.
export function SimpsonsJsxInsideMap() {
  const listItems = SIMPSON_CHARACTERS.map(character=> 
  <li key={character.id}>
    {character.name}
  </li>
  )
  return (
  <div>
    <h2>JsxInsideMap</h2>
    <ul>{listItems}</ul>
  </div>
  )
}

// This component demos using .map() on the fly inside
// Jsx to create list items within the ul.
// Note that when doing this we have to use {} in the Jsx
// to say that we are switching to JavaScript mode.
export function SimpsonsMapInsideJsx() {
  return (
  <div>
    <h2>MapInsideJsx</h2>
    <ul>
      {SIMPSON_CHARACTERS.map(character=>
      <li key={character.id}>
        {character.name}
      </li>
      )}
    </ul>
  </div>
  )
}