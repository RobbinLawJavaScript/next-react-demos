# Testing with Jest

- [next.org/docs testing](https://nextjs.org/docs/testing#jest-and-react-testing-library).
- [testing-library.com/docs](https://testing-library.com/docs/).

## Steps

- install the required packages
```
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
```
- at the base of your project create a file named `jest.config.js` and add contents to it as per docs.
- in the `package.json` file add an entry in the scripts named `test` to run `jest`
```json
  "scripts": {
    "test": "jest",
    "test-watch": "jest --watch"
  },
```
- create a folder in the root of the document named `tests` and create a new file in that folder named `TodoList.test.js`.
- in that file import the required functions and import the `TodoList` component so that it can be tested.
```jsx
import {fireEvent, render, screen, act} from '@testing-library/react';
import '@testing-library/jest-dom'

import TodoList from '../components/TodoList'
```
- add some tests as per the docs.
- run the tests
```
npm run test
```