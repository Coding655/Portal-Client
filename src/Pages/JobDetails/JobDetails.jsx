import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { title, company_logo } = useLoaderData();

  return (
    <div className="border w-1/2 mx-auto p-4 place-items-center" >
      <img src={company_logo} alt="" />
      <h1>{title}</h1>
    </div>
  );
};

export default JobDetails;
