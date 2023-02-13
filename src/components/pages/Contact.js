import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
    // useState for Contact Form also set the useState to an empty string.
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    // useState for error messages.
    const [errorMessage, setErrorMessage] = useState('');

    // Gets the value and name of the input change.
    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Sets the useState depending on the inputType.
        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue)
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Validates email and checks to make sure there is a name and message.
        // If there is not one then sets the error message.
        if (!validateEmail(email) || !name || !message) {
            setErrorMessage(
                'Please make sure all fields in the form are filled out and there are no blank spaces.'
            );
            return;
        }
        alert(`Hello ${name}, your message was successfully sent!`);

        // If successful then clear the input fields.
        setName('');
        setEmail('');
        setMessage('');
    }

}