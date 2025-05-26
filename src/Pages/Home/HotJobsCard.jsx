import { FaLocationArrow } from "react-icons/fa";
import { PiCardholderThin } from "react-icons/pi";
import { CiTimer } from "react-icons/ci";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";

const HotJobsCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
    jobType,
    applicationDeadline,
  } = job;
  return (
    <div className="card bg-base-100 shadow-sm border">
      {/* img and location */}
      <div className="flex items-center gap-2 px-6 mt-4">
        <figure>
          <img className="w-16" src={company_logo} alt="Shoes" />
        </figure>
        <div>
          <h1 className="text-lg">{company}</h1>
          <p className="flex gap-2 items-center text-sm font-thin">
            <FaLocationArrow></FaLocationArrow> {location}
          </p>
        </div>
      </div>
      {/* card body */}
      <div className="card-body">
        <h2 className="card-title font-thin">{title}</h2>
        <div className="flex text-gray-400">
          <p className="flex gap-2 items-center">
            <PiCardholderThin></PiCardholderThin> {jobType}
          </p>
          <p className="flex gap-2 items-center mr-[140px]">
            <CiTimer></CiTimer> {applicationDeadline}
          </p>
        </div>
        {/* description */}
        <p className="py-4">{description}</p>
        {/* requirements */}
        <div className="flex flex-wrap gap-2 py-4 font-mono">
          {requirements.map((skill, index) => (
            <p
              key={index}
              className="border p-2 rounded-md text-center  hover:bg-gray-400 hover:text-sky-700"
            >
              {skill}
            </p>
          ))}
        </div>
        {/* button and salary info */}
        <div className="card-actions justify-between py-4 items-center">
          <div>
            <h2 className="flex items-center text-lg text-sky-500">
              Salary : {salaryRange.max} - {salaryRange.min}
              <BsCurrencyDollar></BsCurrencyDollar>
            </h2>
          </div>
          <Link to={`/info/${_id}`}>
            <button className="btn bg-white text-black rounded-full font-serif hover:text-white hover:bg-sky-700">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobsCard;
