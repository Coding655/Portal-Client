import { useEffect, useState } from "react";
import useAuth from "../../Context/hook/useAuth";

const MyApplication = () => {
  const { user } = useAuth();
  const [apps, setApp] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/job-application?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setApp(data);
      });
  }, [user.email]);
  return (
    <div>
      <h2 className="text-3xl text-center">My Applications: {apps.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Experience</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {apps.map((app, index) => (
                    <tr key={index} app={app}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={app.company_logo}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{app.category}</div>
                            <div className="text-sm opacity-50">
                              {app.location}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {app.company_title}
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          {app.company}
                        </span>
                      </td>
                      <td>X</td>
                      <th>
                        <button className="btn btn-ghost btn-xs">
                          details
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
