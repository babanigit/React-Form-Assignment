import useForm from "../customHooks/useForm";

const RegisterationForm = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(submitForm);

  function submitForm() {
    console.log(values);
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <>
      <div className=" max-w-lg m-auto h-screen grid place-content-center ">
        <div className="  max-w-lg mx-auto   w-screen grid gap-3 p-5 ">
          <div className=" flex place-content-center place-items-center">
            <h1 className="text-3xl text-center font-semibold ">
              Registeration Form Level 1
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              placeholder="name"
              className="bg-slate-100 p-3 rounded-lg border-2"
              onChange={handleChange}
              type="text"
              name="name"
              value={values.name || ""}
              required
            />
            {errors.name && <p className=" text-red-300">{errors.name}</p>}

            <input
              placeholder="email"
              className="bg-slate-100 p-3 rounded-lg border-2"
              onChange={handleChange}
              type="email"
              name="email"
              value={values.email || ""}
              required
            />
            {errors.email && <p className=" text-red-300">{errors.email}</p>}

            <input
              placeholder="age"
              className="bg-slate-100 p-3 rounded-lg border-2"
              type="number"
              name="age"
              value={values.age || ""}
              onChange={handleChange}
              required
              min="1"
            />
            {errors.age && <p className=" text-red-300">{errors.age}</p>}

            <div className=" flex  gap-2 place-items-center ">
              <label>Are you attending with a guest?</label>
              <select
                name="isAttendingWithGuest"
                value={values.isAttendingWithGuest || "no"}
                onChange={handleChange}
                className="bg-slate-100 p-3 rounded-lg border-2"
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            {values.isAttendingWithGuest === "yes" && (
              <div>
                <input
                  placeholder="Guest Name"
                  className="bg-slate-100 p-3 rounded-lg border-2"
                  type="text"
                  name="guestName"
                  value={values.guestName || ""}
                  onChange={handleChange}
                  required={values.isAttendingWithGuest === "yes"}
                />
                {errors.guestName && (
                  <p className=" text-red-300 ">{errors.guestName}</p>
                )}
              </div>
            )}

            <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
              submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterationForm;
