# Material UI Component Library

- [Installing MUI by mui.com](https://mui.com/material-ui/getting-started/installation/)
- If you want the roboto font you can add the Roboto font to the "Head" component of the JSX like so
```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
```
Note: We're going to learn about the file `_document.js` file in next.js which adds a header to each separate page which is a more appropriate place to add this. We're going to learn about this `_document.js` and the concept of pages in this framework later in the course. 
1. Remove everything in the "main" element and we're going to take a look at how to use the MUI component library. Here is the link to the [documentation here](https://mui.com/material-ui/getting-started/usage/#quick-start). It's very similar to the react-bootstrap library we looked at earlier. 
- We're going to use a [Container and a Box (docs here)](https://mui.com/material-ui/react-container/) to layout our site in the index.js as follows in the JSX:
```jsx
<Container maxWidth="sm">
  <Box sx={{ my: 4 }}>
    {/* we'll add some content here.*/}
  </Box>
</Container>
````
- We're going to use [Typography (docs here)](https://mui.com/material-ui/react-typography/#component)
```jsx
<Typography variant="h2" component="h2">
  MUI looks good.
</Typography>
<Typography variant="p" component="p">
  You can perhaps see why this is a popular package.
</Typography>         
```
- Observe the changes on the page.
- Explore the docs and see all the different types of components there are. In this course we're going to use this quite a bit, so you'll have to learn to get comfortable with navigating these docs and using it in your projects.
