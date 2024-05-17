import React, { useState } from "react";
import Header from "../assets/components/header";
import Footer from "../assets/components/footer.jsx";
import "./info.css";
import { useNavigate } from "react-router-dom";

export let wake_time = 0;
export let sleep_time = 0;

export function Info() {

  const navigate = useNavigate()

  const [userDetails, setUserDetails] = useState({
    name: "",
    age: "",
    wake_up: "",
    gender: "",
    sleeping_hours: "",
    email: ""
  });

  function pad(n){
    return (n < 10) ? "0" + n : n;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    wake_time = userDetails.wake_up;
    sleep_time = userDetails.sleeping_hours;
    navigate("/planner")
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };


  return (
    <div className="wrapper">
      <Header />
      <div className="user-info">
        <div className="info-text">
          <p>Before proceeding to the Planner, we require some information:</p>
        </div>
        <form onSubmit={handleSubmit} className="form-container">
          <div className="name-input">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={userDetails.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="column-inputs">
            <div className="input-row">
              <input
                type="number"
                id="age"
                name="age"
                placeholder="Age"
                value={userDetails.age}
                onChange={handleInputChange}
                className="input-field"
                required
              />
              <select
                id="gender"
                name="gender"
                value={userDetails.gender}
                onChange={handleInputChange}
                className="input-field"
                aria-label="gender"
              >
                <option value="gender">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="input-row">
              <input
                type="number"
                id="wake_up"
                name="wake_up"
                placeholder="Wake up time (enter time like 0900 or 1700)"
                value={userDetails.wake_up}
                onChange={handleInputChange}
                required
                className="input-field"
              />
              <input
                type="number"
                id="sleeping_hours"
                name="sleeping_hours"
                placeholder="Sleeping time (enter time like 0900 or 1700)"
                value={userDetails.sleeping_hours}
                onChange={handleInputChange}
                required
                className="input-field"
              />
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}


export default Info;
