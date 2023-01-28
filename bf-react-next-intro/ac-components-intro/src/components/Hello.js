// Some basic rules about React components:
// The function name must be Pascal case (first letter capital),
// so React can decipher between a component and a normal html element
// which are all lowercase.
// In order to use a component in another file it must be exported.

// When you return stuff it must be all on the same line
// as the return OR (see Hello2).
export function Hello1() {
  return <h3>Hello this is our first component.</h3>
}
// Here you need the opening ( on the same line as the return
// and then close it with ) after the JSX if you want to break
// the lines up to be more readable.
export function Hello2() {
  return (
  <h3>
    Hello this is our second component.
  </h3>
  )
}
// When you have more that one sibling element you must surround
// with the fragment operator <> </> or a <div> </div> etc.
// Only ONE parent element can be returned with no siblings.
export function Hello3() {
  return (
  <>
    <h3>
      Hello this is our third component.
    </h3>
    <h4>
      with a random h4.
    </h4>
  </>
  )
}