import useForm from "../customHooks/useForm";

const RegisterationForm2 = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(submitForm);

  function submitForm() {
    console.log("submit");
    console.log(values);
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <>
      <div className=" max-w-lg m-auto h-screen grid place-content-center ">
        <div className="  max-w-lg mx-auto   w-screen grid gap-3 p-5 ">
          <div className=" flex place-content-center place-items-center">
            <h1 className="text-3xl text-center font-semibold ">
              Registeration Form Level 2
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              placeholder="Full Name"
              className="bg-slate-100 p-3 rounded-lg border-2"
              onChange={handleChange}
              type="text"
              name="fullName"
              value={values.fullName || ""}
              required
            />
            {errors.fullName && (
              <p className=" text-red-300">{errors.fullName}</p>
            )}

            <input
              placeholder="Email"
              className="bg-slate-100 p-3 rounded-lg border-2"
              onChange={handleChange}
              type="email"
              name="email"
              value={values.email || ""}
              required
            />
            {errors.email && <p className=" text-red-300">{errors.email}</p>}

            <input
              placeholder="Phone Number"
              className="bg-slate-100 p-3 rounded-lg border-2"
              type="number"
              name="phoneNumber"
              value={values.phoneNumber || ""}
              onChange={handleChange}
              required
              min="1"
            />
            {errors.phoneNumber && (
              <p className=" text-red-300">{errors.phoneNumber}</p>
            )}

            <div className=" flex  gap-2 place-items-center ">
              <label>Applying for Position:</label>
              <select
                name="applyForPosition"
                value={values.applyForPosition || "no"}
                onChange={handleChange}
                className="bg-slate-100 p-3 rounded-lg border-2"
              >
                <option value="">Select Position</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="manager">Manager</option>
              </select>
              {errors.applyingForPosition && (
                <p className="error">{errors.applyingForPosition}</p>
              )}
            </div>

            {(values.applyingForPosition === "developer" ||
              values.applyingForPosition === "designer") && (
              <div>
                <input
                  type="number"
                  name="relevantExperience"
                  value={values.relevantExperience || ""}
                  onChange={handleChange}
                  required={
                    values.applyingForPosition === "developer" ||
                    values.applyingForPosition === "designer"
                  }
                  min="1"
                  className="bg-slate-100 p-3 rounded-lg border-2"
                />
                {errors.relevantExperience && (
                  <p className="error">{errors.relevantExperience}</p>
                )}
              </div>
            )}

            <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterationForm2;
