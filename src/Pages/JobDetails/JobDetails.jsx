import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const {
    _id,
    title,
    company_logo,
    description,
    company,
    applicationDeadline,
    responsibilities,
  } = useLoaderData();

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center shadow-2xl ">
          <div className="max-w-md">
            <div className="flex items-center gap-4 ml-8 pb-6">
              <img className="w-16" src={company_logo} alt="" />
              <h1 className="text-5xl font-thin ">{company}</h1>
            </div>
            <div className="">
              <h2 className="text-2xl py-4">POST: {title}</h2>
              <h3 className="pb-6">Application Date: {applicationDeadline}</h3>
              <div className="pb-2 mb-4">
                <span className="uppercase link">responsibilities:</span>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {responsibilities.map((res, index) => (
                    <p
                      className="bg-gray-400 text-blue-800 p-1 rounded-lg"
                      key={index}
                    >
                      {res}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <Link to={`/jobApply/${_id}`}>
                  <button className="btn bg-sky-500 w-full">Apply Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
