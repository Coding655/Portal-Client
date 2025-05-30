import useAuth from "../../Context/hook/useAuth";

const AddJob = () => {
  const { user } = useAuth();
  return (
    <div className="w-9/12 mx-auto shadow-2xl">
      <h2 className="text-center text-xl uppercase font-thin">Add a New Job</h2>
      <form className="card-body">
        {/* job title */}
        <label className="label">Job Title</label>
        <input
          name="title"
          type="text"
          className="input w-full"
          placeholder="job title"
        />
        {/* job location */}
        <label className="label">Job Location</label>
        <input
          name="location"
          type="text"
          className="input w-full"
          placeholder="job location"
        />
        {/* company name */}
        <label className="label">Company Name</label>
        <input
          name="company_name"
          type="text"
          className="input w-full"
          placeholder="Company Name"
        />
        {/* job type */}
        <label className="label">Job Type</label>
        <select
          defaultValue=" Pick Your Job Type"
          name="job_type"
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled>Pick Your Job Type</option>
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Intern</option>
        </select>
        {/* job field */}
        <label className="label">Job Field</label>
        <select
          defaultValue=" Pick Your Job Field"
          name="job_field"
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled>Pick Your Job Field</option>
          <option>Engineering</option>
          <option>Marketing</option>
          <option>Finance</option>
        </select>
        {/* salary range, min, max */}
        <div className="flex justify-between gap-2 items-center">
          <h2 className="text-xl text-gray-400">Salary Range:</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Max</span>
            </label>
            <input
              name="max"
              type="text"
              placeholder="Max"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Min</span>
            </label>
            <input
              name="min"
              type="text"
              placeholder="Min"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Currency</span>
            </label>
            <select
              defaultValue="Currency"
              name="currency"
              className="select select-bordered w-full"
            >
              <option disabled>Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>EUR</option>
              <option>BIT</option>
            </select>
          </div>
        </div>
        {/* Requirements */}
        <label className="label">Job Requirements</label>
        <textarea
          name="requirements"
          placeholder="Each Requirements In A New Line"
          className="textarea textarea-bordered textarea-lg w-full"
        ></textarea>

        {/* Responsibilities */}
        <label className="label">Job Responsibilities</label>
        <textarea
          name="responsibilities"
          placeholder="Each Responsibilities In A New Line"
          className="textarea textarea-bordered textarea-lg w-full"
        ></textarea>
        {/* HR name*/}
        <label className="label">HR Name</label>
        <textarea
          name="HR_name"
          placeholder=" HR name"
          className="textarea textarea-bordered textarea-lg w-full"
        ></textarea>
        {/* HR email*/}
        <label className="label">HR Email</label>
        <textarea
          defaultValue={user.email}
          name="HR_email"
          placeholder="HR_email"
          className="textarea textarea-bordered textarea-lg w-full"
        ></textarea>
        {/* Company Logo*/}
        <label className="label">Company Logo</label>
        <textarea
          name="Company_Logo"
          placeholder="Company Logo"
          className="textarea textarea-bordered textarea-lg w-full"
        ></textarea>
        <button className="btn btn-neutral mt-4">Add Job</button>
      </form>
    </div>
  );
};

export default AddJob;
