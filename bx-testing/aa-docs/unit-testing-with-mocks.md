# Testing with Jest

- [next.org/docs testing](https://nextjs.org/docs/testing#jest-and-react-testing-library).
- [testing-library.com/docs](https://testing-library.com/docs/).
- [mswjs.io/docs](https://mswjs.io/docs/getting-started).
- [isomorphic fetch docs](https://github.com/matthew-andrews/isomorphic-fetch)

## Steps

- install the required `jest` packages
```
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
```
- install the mock server worker and isomorphic-fetch so that we can `mock out` the `fetch` calls.
```
npm install msw isomorphic-fetch --save-dev
```
- at the base of your project create a file named `jest.config.js` and add contents to it as per docs.
- in the `package.json` file add an entry in the scripts named `test` to run `jest`.
- create a folder in the root folder of the application named `tests` and create a new file in that folder named `Home.test.js`.
- in the file import all required.
- setup your server so that it begins to listen to `beforeAll` of the tests and closes `afterAll` of the tests are done.
- add some tests as per the docs.
- run the tests
```
npm run test
```