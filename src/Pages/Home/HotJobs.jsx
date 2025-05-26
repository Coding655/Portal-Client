import { useEffect, useState } from "react";
import HotJobsCard from "./HotJobsCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/info")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-2">
      {jobs.map((job) => (
        <HotJobsCard key={job._id} job={job}></HotJobsCard>
      ))}
    </div>
  );
};

export default HotJobs;
