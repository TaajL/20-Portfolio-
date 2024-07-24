import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleInputChange = (event) => {
    const { target } = event;
    const { name, value } = target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const validateInput = (value, type) => {
    if (!value) {
      return "This field cannot be left blank";
    }

    if (type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "Please enter a valid email address";
    }

    return null;
  };

  const handleBlur = (event) => {
    const { target } = event;
    const { name, value } = target;
    const error = validateInput(value, name);

    setErrorMessage(error);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setErrorMessage("Please fill out the entire form before submitting");
      return;
    }

    // Submit the form data here
    console.log("Form submitted:", { name, email, message });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        value={name}
        name="name"
        onChange={handleInputChange}
        onBlur={handleBlur}
        type="text"
        placeholder="name"
      />
      <input
        value={email}
        name="email"
        onChange={handleInputChange}
        onBlur={handleBlur}
        type="email"
        placeholder="email"
      />
      <input
        value={message}
        name="message"
        onChange={handleInputChange}
        onBlur={handleBlur}
        type="text"
        placeholder="message"
      />
      <button type="submit">Submit</button>
      {errorMessage && (
        <p style={{ color: "red" }}>{errorMessage}</p>
      )}
    </form>
  );
}

export default Form;