import { fireEvent, render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';

// Import component
import Byline from '../components/Byline';

test('byline should include the author name', () => {
    render(<Byline author="Robbin Law" />);
    const someElement = screen.getByText("by Robbin Law");
    expect(someElement).toBeInTheDocument();
});

test('byline should include some other author name', () => {
    render(<Byline author="Stewart Denter" />);
    const someElement = screen.getByText("by Stewart Dent");
    expect(someElement).toBeInTheDocument();
});

// TODO: byline should
//  - include the github username
//      - element with the text "robbinl"
//      - element.href = "https://github.com/robbinl"
//  - include a link to the author's website
//      - element with the text "website"
//      - element.href = "https://gilleland.ca"
//      - element.target = "_blank"
