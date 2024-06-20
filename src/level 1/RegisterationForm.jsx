import useForm from "../customHooks/useForm";
// import React, { useState } from 'react';

const RegisterationForm = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(submitForm);

  function submitForm() {
    console.log(values);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={values.name || ""}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={values.email || ""}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={values.age || ""}
            onChange={handleChange}
            required
            min="1"
          />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>

        <div>
          <label>Are you attending with a guest?</label>
          <select
            name="isAttendingWithGuest"
            value={values.isAttendingWithGuest || "no"}
            onChange={handleChange}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        {values.isAttendingWithGuest === "yes" && (
          <div>
            <label>Guest Name:</label>
            <input
              type="text"
              name="guestName"
              value={values.guestName || ""}
              onChange={handleChange}
              required={values.isAttendingWithGuest === "yes"}
            />
            {errors.guestName && <p className="error">{errors.guestName}</p>}
          </div>
        )}

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default RegisterationForm;
