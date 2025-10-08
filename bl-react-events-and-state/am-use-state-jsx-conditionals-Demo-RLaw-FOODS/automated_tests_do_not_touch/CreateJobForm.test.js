import dayjs from 'dayjs';

import { render, screen, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

import CreateJobForm from '@/components/ItemForm';

describe('CreateJobForm Alert shown at correct times.', ()=> {
  it("should not have an Alert message on load", ()=> {
    const mockCallback = jest.fn()
    const { container } = render(<CreateJobForm setJobs={mockCallback}/>)

    // get alert
    const alert = container.querySelector(".MuiAlert-root")

    // check to see if the alert
    expect(alert).not.toBeInTheDocument()
  })

  it("should have an Alert message when form is invalid", ()=> {
    const mockCallback = jest.fn()
    const { container } = render(<CreateJobForm setJobs={mockCallback}/>)

    // get form
    const submitButton = screen.getByText(/submit/i)
    act(() => {
      fireEvent.click(submitButton)
    })

    // get alert
    const alert = container.querySelector(".MuiAlert-root")

    // check to see if the alert
    expect(alert).toBeInTheDocument()
  })
})

describe('CreateJobForm form validation', ()=> {
  it("should not submit form if job title is less than 10 chars", ()=> {
    const mockCallback = jest.fn()
    const { container } = render(<CreateJobForm setJobs={mockCallback}/>)

    // get form
    const submitButton = screen.getByText(/submit/i)
    act(() => {
      fireEvent.click(submitButton)
    })
    const alert = container.querySelector(".MuiAlert-root")
    // check to see if the alert contains the correct text
    expect(alert).toHaveTextContent(/Title must be at least 10 characters/i)
  
    // shouldn't be in the alert if the title is long enough
    const jobTitleInput = screen.getByLabelText(/job title/i)
    act(()=> {
      fireEvent.change(jobTitleInput, { target: { value: 'A title that is long enough' } })
      fireEvent.click(submitButton)
    })

    expect(alert).not.toHaveTextContent(/Title must be at least 10 characters/i)
  })

  it("should not submit form if company name is empty", ()=> {
    const mockCallback = jest.fn()
    const { container } = render(<CreateJobForm setJobs={mockCallback}/>)

    // get form
    const submitButton = screen.getByText(/submit/i)
    act(() => {
      fireEvent.click(submitButton)
    })
    const alert = container.querySelector(".MuiAlert-root")
    // check to see if the alert contains the correct text
    expect(alert).toHaveTextContent(/Company Name is required/i)
  
    // shouldn't be in the alert if company name is defined
    const companyNameInput = screen.getByLabelText(/company name/i)
    act(()=> {
      fireEvent.change(companyNameInput, { target: { value: 'A Company Name' } })
      fireEvent.click(submitButton)
    })

    expect(alert).not.toHaveTextContent(/Company Name is required/i)
  })

  it("should not submit form if job type is not selected", ()=> {
    const mockCallback = jest.fn()
    const { container } = render(<CreateJobForm setJobs={mockCallback}/>)

    // get form
    const submitButton = screen.getByText(/submit/i)
    act(() => {
      fireEvent.click(submitButton)
    })
    const alert = container.querySelector(".MuiAlert-root")
    // check to see if the alert contains the correct text
    expect(alert).toHaveTextContent(/Job Type is required/i)
  
    // shouldn't be in the alert if job type is selected
    const jobTypeInput = container.querySelector(".MuiSelect-nativeInput") // class for select

    act(()=> {
      fireEvent.change(jobTypeInput, { target: { value: 'Full-Time' } })
      fireEvent.click(submitButton)
    })

    expect(alert).not.toHaveTextContent(/Job Type is required/i)
  })

  it("should not submit form if location is empty", ()=> {
    const mockCallback = jest.fn()
    const { container } = render(<CreateJobForm setJobs={mockCallback}/>)

    // get form
    const submitButton = screen.getByText(/submit/i)
    act(() => {
      fireEvent.click(submitButton)
    })
    const alert = container.querySelector(".MuiAlert-root")
    // check to see if the alert contains the correct text
    expect(alert).toHaveTextContent(/Location is required/i)
  
    // shouldn't be in the alert if the location is defined
    const locationInput = screen.getByLabelText(/location/i)
    act(()=> {
      fireEvent.change(locationInput, { target: { value: 'A Location' } })
      fireEvent.click(submitButton)
    })

    expect(alert).not.toHaveTextContent(/Location is required/i)
  })

  it("should not submit form if description is empty", ()=> {
    const mockCallback = jest.fn()
    const { container } = render(<CreateJobForm setJobs={mockCallback}/>)

    // get form
    const submitButton = screen.getByText(/submit/i)
    act(() => {
      fireEvent.click(submitButton)
    })
    const alert = container.querySelector(".MuiAlert-root")
    // check to see if the alert contains the correct text
    expect(alert).toHaveTextContent(/Description is required/i)
  
    // shouldn't be in the alert if the description is defined
    const descriptionInput = screen.getByLabelText(/description/i)
    act(()=> {
      fireEvent.change(descriptionInput, { target: { value: 'A Description' } })
      fireEvent.click(submitButton)
    })

    expect(alert).not.toHaveTextContent(/Description is required/i)
  })

  it("should not submit form if qualifications is empty", ()=> {
    const mockCallback = jest.fn()
    const { container } = render(<CreateJobForm setJobs={mockCallback}/>)

    // get form
    const submitButton = screen.getByText(/submit/i)
    act(() => {
      fireEvent.click(submitButton)
    })
    const alert = container.querySelector(".MuiAlert-root")
    // check to see if the alert contains the correct text
    expect(alert).toHaveTextContent(/Qualifications is required/i)
  
    // shouldn't be in the alert if qualifications is defined
    const qualificationsInput = screen.getByLabelText(/qualifications/i)
    act(()=> {
      fireEvent.change(qualificationsInput, { target: { value: 'A Qualifications' } })
      fireEvent.click(submitButton)
    })

    expect(alert).not.toHaveTextContent(/Qualifications is required/i)
  })

  it("should submit successfully if all fields are valid", ()=> {
    const mockCallback = jest.fn()
    const { container } = render(<CreateJobForm setJobs={mockCallback}/>)

    // get all elements
    const jobTitleInput = screen.getByLabelText(/job title/i)
    const companyNameInput = screen.getByLabelText(/company name/i)
    const jobTypeInput = container.querySelector(".MuiSelect-nativeInput") // class for select
    const locationInput = screen.getByLabelText(/location/i)
    const descriptionInput = screen.getByLabelText(/description/i)
    const qualificationsInput = screen.getByLabelText(/qualifications/i)
    const submitButton = screen.getByText(/submit/i)
    
    // fill in all fields
    act(()=> {
      fireEvent.change(jobTitleInput, { target: { value: 'A title that is long enough' } })
      fireEvent.change(companyNameInput, { target: { value: 'A Company Name' } })
      fireEvent.change(jobTypeInput, { target: { value: 'Full-Time' } })
      fireEvent.change(locationInput, { target: { value: 'A Location' } })
      fireEvent.change(descriptionInput, { target: { value: 'A Description' } })
      fireEvent.change(qualificationsInput, { target: { value: 'A Qualifications' } })
      fireEvent.click(submitButton)
    })

    // check to see if the alert is not in the document
    const alert = container.querySelector(".MuiAlert-root")
    expect(alert).not.toBeInTheDocument()
  
    // check to see if the callback was called
    expect(mockCallback).toHaveBeenCalled()
  })
})

