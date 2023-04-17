import { render, screen, act} from '@testing-library/react'
import '@testing-library/jest-dom'

import { rest } from 'msw'
import { setupServer } from 'msw/node'
import 'isomorphic-fetch'

import Home from '../pages/index.js'

const BASE_URL_WITH_END_POINT = 'https://api.quotable.io/random'

const QUOTE = "All I required to be happy was friendship and people I could admire."
const AUTHOR = "Charles Baudelaire"

 
const server = setupServer(
    rest.get(`${BASE_URL_WITH_END_POINT}`, (req, res, ctx) => {
        // respond using a mocked JSON body
        return res(ctx.json(
            {"_id":"someid",
            "content": QUOTE,
            "author": AUTHOR,
            }
        ))
    }) 
);
 
beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

test("test home loads a quote on load", async () => {
    await act(() => {
        render(<Home/>)
    })
    let quoteElement = screen.getByTestId("quote")
    let authorElement = screen.getByTestId("author")
    
    expect(quoteElement).toHaveTextContent(QUOTE)
    expect(authorElement).toHaveTextContent(AUTHOR)
})

test("home loads a new quote when clicking the button.", async () => {
    await act(() => {
        render(<Home/>)
    })

    const NEW_QUOTE = "I can shoot 3s with my eyes closed."
    const NEW_AUTHOR = "Dan Mouris"

    // create a new request with the new quote and author.
    server.use(
        rest.get(`${BASE_URL_WITH_END_POINT}`, (req, res, ctx) => {
            // respond using a mocked JSON body
            return res(ctx.json(
                {"_id":"someid",
                "content": NEW_QUOTE,
                "author": NEW_AUTHOR,
                }
            ))
        }) 
    )
    // get the elements 
    let quoteElement = screen.getByTestId("quote")
    let authorElement = screen.getByTestId("author")
    let buttonElement = screen.getByTestId("new-quote-button")
    
    // click the new button
    await act(() => {
        buttonElement.click()
    })

    expect(quoteElement).toHaveTextContent(NEW_QUOTE)
    expect(authorElement).toHaveTextContent(NEW_AUTHOR)
})