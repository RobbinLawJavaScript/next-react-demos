// Props are essentially how you can pass data into a component,
// from the parent that uses that component.

// All of the props/attributes are wrapped up into the so called props object.
// We could call the parm anything like "jim" but then to access
// a particular prop or attribute we would have to write jim.textColor etc. 
// We can access the props/attributes as shown, OR (see NewConcept2).
export function NewConcept1(props) {
  return (
  <div style={{color: props.textColor}}>
    In this class we'll learn: {props.concept}
  </div>
  )
}
// Here we destructure the props object,
// so we do not have to write "props." all the time,
// to access a particular prop/attribute.
// Order does not matter in the parm list.
// The parm names have to be the same as the props/attributes used
// in the parent that uses/consumes the component.
export function NewConcept2({textColor, concept}) {
  return (
  <div style={{color: textColor}}>
    In this class we'll learn: {concept}
  </div>
  )
}