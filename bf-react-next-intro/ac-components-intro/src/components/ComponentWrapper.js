// Here we destructure "props" again but this time
// we use "children" which is a very special prop.
// It contains all the children elements wrapped by the 
// ComponentWrapper component.

// Note that when we use the word "default" with function the code
// that consumes this function does not need {}.

export default function ComponentWrapper({textColor, children}) {
  return (
  <div style={{color: textColor}}>
    <h2>Here are the children of the Component Wrapper</h2>
    {children}
  </div>
  )
}
