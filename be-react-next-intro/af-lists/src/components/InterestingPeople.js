// This file has only one component which is good practice
// and imports both data and utility functions.

import {people} from '../aa-data/Data.js';
import GetImageUrl from '../aa-utils/GetImageUrl.js';

export default function InterestingPeople() {
  return (
  <ul style={{listStyleType: "none"}} >
    {people.map(person=>
    <li key={person.id} >
      <img src={GetImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}</b> {person.profession} known for {person.accomplishment}
      </p>
    </li>
    )}
  </ul>
  )
}
