/*
Props are essentially how you can pass data into the component.

For this component we're using "props.concept" in the component,
here "concept" is a prop.

This means when you use the component you must call it like so in JSX
<NewConcept concept={"learning something new a static"} />
or
<NewConcept concept={someVariableInOurCode} />
or

*/

export default function NewConcept(props) {
  return <p>
    In this class we'll learn: {props.concept}
  </p>
}