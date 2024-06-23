import { useEffect } from "react";
import useForm from "./customHooks/useForm2";
const RegisterationForm2 = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(submitForm);

  function submitForm() {
    console.log("submit");
    console.log(values);
    alert(JSON.stringify(values, null, 2));
  }

  useEffect(() => {
    console.log("hello");
  }, [handleChange]);

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

            {/* apply for position */}
            <div className=" flex  gap-2 place-items-center ">
              <label>Applying for Position:</label>
              <select
                name="applyForPosition"
                value={values.applyForPosition || ""}
                onChange={handleChange}
                className="bg-slate-100 p-3 rounded-lg border-2"
              >
                <option value="">Select Position</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="manager">Manager</option>
              </select>
              {errors.applyForPosition && (
                <p className=" text-red-300">{errors.applyForPosition}</p>
              )}
            </div>

            {/* relevantExperience */}
            {(values.applyForPosition === "developer" ||
              values.applyForPosition === "designer") && (
              <div>
                <input
                  placeholder="Relevant Experience"
                  type="number"
                  name="relevantExperience"
                  value={values.relevantExperience || ""}
                  onChange={handleChange}
                  required={
                    values.applyForPosition === "developer" ||
                    values.applyForPosition === "designer"
                  }
                  min="1"
                  className="bg-slate-100 p-3 rounded-lg border-2"
                />
                {errors.relevantExperience && (
                  <p className=" text-red-300">{errors.relevantExperience}</p>
                )}
              </div>
            )}

            {/* if applyed for designer */}
            {values.applyForPosition === "designer" && (
              <input
                className="bg-slate-100 p-3 rounded-lg border-2"
                placeholder="Portfolio URL"
                type="url"
                name="portfolioURL"
                value={values.portfolioURL}
                onChange={handleChange}
                required={values.applyForPosition === "designer"}
              />
            )}
            {errors.portfolioURL && (
              <p className=" text-red-300">{errors.portfolioURL}</p>
            )}

            {/* Management Experience */}
            {values.applyForPosition === "manager" && (
              <input
                className="bg-slate-100 p-3 rounded-lg border-2"
                placeholder="Mangement Experience"
                type="text"
                name="managementExperience"
                value={values.managementExperience}
                onChange={handleChange}
                required={values.applyForPosition === "manager"}
              />
            )}
            {errors.managementExperience && (
              <p className=" text-red-300">{errors.managementExperience}</p>
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
