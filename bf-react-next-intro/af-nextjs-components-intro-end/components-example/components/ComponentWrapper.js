/*
Components can "Wrap" other components just like you would with HTML
elements.

Except here you have all of the benefits of your component.

<ComponentWrapper textColor={"blue"}>
  <SomeOtherComponent />
  <h5> evyerhting in here is contained</h5>
  <p> some more random html elements</p>
</Component>

*/

export default function ComponentWrapper(props) {
  return <div style={{color: props.textColor}}>
    {props.children}
  </div>
}
