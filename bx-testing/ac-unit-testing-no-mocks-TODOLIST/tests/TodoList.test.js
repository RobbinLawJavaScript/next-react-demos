import {fireEvent, render, screen, act} from '@testing-library/react';
import '@testing-library/jest-dom'

import TodoList from '../components/TodoList'

// This test is going to "render" the TodoList component, 
// and allow access via "screen" to the elements in the component.
// Then with "expect" a test is done to see that the selected element 
// is part of the DOM.
test('todo list title renders correctly', ()=> {
  render(<TodoList />)
  const titleElement = screen.getByText("Our Todo List")
  console.debug('hey man')
  //console.debug(titleElement)
  expect(titleElement).toBeInTheDocument()
})
// This tests if both the input textbox and button are part 
// of the DOM.
test('input and add todo button render correctly', ()=> {
  render(<TodoList />)
  const inputElement = screen.getByLabelText("New Todo")
  const buttonElement = screen.getByText("Add Todo")
  expect(inputElement).toBeInTheDocument()
  expect(buttonElement).toBeInTheDocument()
})

test('todo is added successfully', ()=> {
  render(<TodoList />)
  const inputElement = screen.getByLabelText("New Todo")
  const buttonElement = screen.getByText("Add Todo")
  const listElement = screen.getByTestId("todo-item-list")
  const EXPECTED_STRING = "Learn Testing in Javascript"
  // This adds the string to the input element.
  fireEvent.change(inputElement, {
    target: { value: EXPECTED_STRING}
  })
  expect(inputElement.value).toBe(EXPECTED_STRING) 
  // "act" needs to be called to update the state of the application.
  // This is going to change the state of the allTodos in the component.
  act(()=>{
    buttonElement.click()
  })
  // These "expect" values are just what happens after 
  // the execution of the function onAddTodoClick in the TodoList component,
  // as a result of the virtual button click. 
  expect(inputElement.value).toBe('')
  expect(listElement).toHaveTextContent(EXPECTED_STRING)
})

