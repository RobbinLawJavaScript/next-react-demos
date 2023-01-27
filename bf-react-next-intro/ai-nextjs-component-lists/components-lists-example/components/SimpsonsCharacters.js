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

export function SimpsonsCharactersMapNotInsideJsx() {
  const listItems = SIMPSON_CHARACTERS.map((character) => {
    return (
    <li key={character.id}>
      {character.name}
    </li>
    )}
  );
  return (
  <div>
    <h2>SimpsonsCharactersMapNotInsideJsx</h2>
    <ul>{listItems}</ul>
  </div>
  )
}

export function SimpsonsCharactersMapInsideJsx() {
  return (
  <div>
    <h2>SimpsonsCharactersMapInsideJsx</h2>
    <ul>
      {SIMPSON_CHARACTERS.map((character)=> {
        return (
        <li key={character.id}>
          {character.name}
        </li>
        );
      })}
    </ul>
  </div>
  );
}