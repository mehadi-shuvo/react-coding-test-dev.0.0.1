import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");

  const [showTask, setShowTask] = useState([]);
  //   const [activeTasks, setActiveTasks] = useState([]);

  const handelSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const status = e.target.status.value;
    const data = { name, status };
    const storedData = localStorage.getItem("tasks");
    const storedArray = JSON.parse(storedData);
    if (storedArray) {
      storedArray.push(data);
      const tasksString = JSON.stringify(storedArray);
      localStorage.setItem("tasks", tasksString);
    } else {
      const tasksString = JSON.stringify([data]);
      localStorage.setItem("tasks", tasksString);
    }
    // console.log(storedArray);
  };

  const handleClick = (val) => {
    const storedData = localStorage.getItem("tasks");
    const storedArray = JSON.parse(storedData);
    if (val === "all") {
      const statusOrder = ["active", "completed", "pending", "archived"];
      storedArray.sort(
        (a, b) => statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status)
      );
      setShowTask(storedArray);
      //   console.log(storedArray);
    } else if (val === "active") {
      const activeTasks = storedArray.filter(
        (task) => task.status === "active"
      );
      setShowTask(activeTasks);
    } else if (val === "completed") {
      const completedTasks = storedArray.filter(
        (task) => task.status === "completed"
      );
      setShowTask(completedTasks);
    }
    setShow(val);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            className="row gy-2 gx-3 align-items-center mb-4"
            onSubmit={(e) => handelSubmit(e)}
          >
            <div className="col-auto">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                name="status"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {showTask.map((task) => (
                <tr key={task.name}>
                  <td>{task.name}</td>
                  <td>{task.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
