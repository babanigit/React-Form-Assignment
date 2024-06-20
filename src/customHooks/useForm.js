// useForm.js
import { useState } from "react";

const useForm = (callback) => {
  const [values, setValues] = useState({}); //store value
  const [errors, setErrors] = useState({}); // store error

  //   handleChange
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  //handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      callback();
    }
  };

  //validation
  const validate = (values) => {
    let errors = {};

    // Name validation
    if (!values.name) {
      errors.name = "Name is required";
    }

    // Email validation
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }

    // Age validation
    if (!values.age) {
      errors.age = "Age is required";
    } else if (isNaN(values.age) || values.age <= 0) {
      errors.age = "Age must be a number greater than 0";
    }

    // Guest Name validation (if attending with guest)
    if (values.isAttendingWithGuest === "yes" && !values.guestName) {
      errors.guestName = "Guest Name is required";
    }

    return errors;
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
