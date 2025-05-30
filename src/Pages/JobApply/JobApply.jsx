import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../Context/hook/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  console.log(id, user);

  const handleJobApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const github = form.github.value;
    const linkedin = form.linkedin.value;
    const resume = form.resume.value;
    console.log(github, linkedin, resume);

    const applicationData = {
      job_id: id,
      applicant_email: user.email,
      github,
      linkedin,
      resume,
    };

    fetch("http://localhost:5000/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applicationData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true,
          });
          navigate("/myApplication")
        }
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <h2 className="text-2xl text-center pt-2">
          Apply your job and good luck
        </h2>
        <div className="card-body">
          <form onSubmit={handleJobApply} className="form">
            <label className="label">Github</label>
            <input
              type="url"
              name="github"
              className="input"
              placeholder="github"
            />
            <label className="label">Linkedin</label>
            <input
              type="url"
              name="linkedin"
              className="input"
              placeholder="Linkedin"
            />
            <label className="label">Resume</label>
            <input
              type="url"
              name="resume"
              className="input"
              placeholder="Resume"
            />
            <button className="btn btn-neutral w-full mt-4">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
