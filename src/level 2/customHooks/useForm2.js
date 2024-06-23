// useForm.js
import { useState } from "react";

const useForm = (callback) => {
  const [values, setValues] = useState({}); // store value
  const [errors, setErrors] = useState({}); // store error

  //   handleChange
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log("handleChange", values);
  };

  //handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    console.log("validation error is ", validationErrors);

    if (Object.keys(validationErrors).length === 0) callback();

    console.log("on handle submit", values);
  };

  //validation
  const validate = (values) => {
    let errors = {};

    // full name
    if (!values.fullName) {
      errors.fullName = "fullName is required";
    }

    // Email validation
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }

    // phoneNumber validation
    if (!values.phoneNumber) {
      errors.phoneNumber = "phoneNumber is required";
    } else if (isNaN(values.phoneNumber) || values.phoneNumber <= 0) {
      errors.phoneNumber = "phoneNumber must be a number greater than 0";
    }

    // apply for position validation 
    if (!values.applyForPosition) {
      errors.applyForPosition = "Positon is required";
    }

    if (values.applyForPosition) {
      // manager validation
      if (!values.managementExperience) {
        errors.managementExperience = "management experience is required";
      }
    }

     // apply for position validation 
     if (!values.relevantExperience) {
      errors.relevantExperience = "relevant Experience is required";
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
