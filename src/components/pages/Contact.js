import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
    // useState for Contact Form:
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    // useState for error msg for email validation:
    const [errorMsg, setErrorMsg] = useState("");

    // Values for each part of the form:
    const { name, email, message } = formState;

    // Function to validate error message and set error
    function 
}