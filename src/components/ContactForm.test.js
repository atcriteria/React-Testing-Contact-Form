import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

test("Verify email input works", () => {
    render(<ContactForm />);

    const fNameInput = screen.getByPlaceholderText(/edd/i);
    const lNameInput = screen.getByPlaceholderText(/burke/i);
    const emailInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
    
    userEvent.type(fNameInput, 'rye');
    userEvent.type(lNameInput, 'lipscomb');
    userEvent.type(emailInput, "dudelao@gmail.com");

    const subButton = screen.getByRole("button");
    userEvent.click(subButton);

    const emailObj = { 
        firstName: "rye",
        lastName: 'lipscomb',
        email: "dudelao@gmail.com",
        message: ""
    };
    const subEmail = JSON.stringify(emailObj, null, 2);
    const emailBox = screen.queryByText("firstName");
    console.log(emailBox);

    expect(emailBox).toBeInTheDocument();
});