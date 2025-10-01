# Material UI

- [The Magic of the sx prop](https://mui.com/system/getting-started/the-sx-prop/)
- [MUI Theme Creator](https://bareynol.github.io/mui-theme-creator/)

## Steps

1. Install and run the project

- Go in to the folder
`cd mui-theme-example`
- Install the dependencies
`npm install`
- Run the project
`npm run dev`

2. Create a `utils` folder (at the root of your project) and add a folder named `theme` and create a file that will be named `config.js`

3. Within the `utils/theme/config.js` add the following lines

```js
import { createTheme } from '@mui/material'

const themeOptions = {
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
};

export const theme = createTheme(themeOptions);

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
```

This is creating your theme you will be able to customize a lot of options by taking a look here:

4. In your `pages/_app.js`, import your theme and the `ThemeProvider` like below.

```js
import { ThemeProvider } from '@mui/material';
import { theme } from '../utils/theme/config.js'
```

5. in your `pages/_app.js` wrap your entire application

```js
export default function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
  )
}
```

6. In your `pages/index.js` add some colors so that you can see the differences on the page, add `color="primary"` on the `Typography` Elements.

```jsx
<Box sx={{ my: 4 }}>
  <Typography variant="h2" component="h2" color="primary">
    MUI Example
  </Typography>
  <Typography variant="p" component="p" color="secondary">
    You can perhaps see why this is a popular package.
  </Typography>
</Box>
```

Note: You can see the differences in the theme now if you change the `createTheme` in the file `utils/theme/config.js`

```js
const theme = createTheme({});
```

Change it back to use your theme.

7. Let's add Lato as our default font.

- Go to google fonts, and look up "Lato", we're going to use "Lato Thin 100" which should have the HTML below and copy it.

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@100&display=swap" rel="stylesheet" />
```

- in the `pages/index.js` modify the `Head` so that it includes the links above
Note: there's different ways to link the fonts here, but this is just one way to do so.
- in the `utils/theme/config.js` edit the `themeOptions` so that it adds the following in the object.

```js
  typography: {
    h2: {
      fontFamily: 'Lato',
    },
  },
```

This will make the project use Lato as the font family for each "h2" element for typography.
