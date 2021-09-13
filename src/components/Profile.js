import React from "react";
// import { useHistory } from "react-router-dom";

const Profile = () => {
  // const history = useHistory();
  // const callProfile = async () => {
  //   try {
  //     const res = await fetch("http://localhost:9002/profile", {
  //       method: "GET",
  //       header: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       credentials: "include",
  //     });
  //     const data = await res.json();
  //     console.log(data);

  //     if (!res.status === 200) {
  //       const error = new Error(res.error);
  //       throw error;
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     history.push("/login");
  //   }
  // };
  // useEffect(() => {
  //   callProfile();
  // }, []);

  return (
    <>
      <div className="container emp-profile">
        <form method="GET">
          {/* <div>
            <img src={imagename} alt="" srcset="" />
          </div> */}
          <div>
            <h5>Ankita</h5>
            <h6>WebDeveloper</h6>
            <p>
              Rankings<span>1/10</span>
            </p>

            <ul className="nav nav-tabs">
              <li className="active">
                <a href="#home">About Me</a>
              </li>
              <li>
                <a href="#academic">Academic Details</a>
              </li>
              {/* <li>
                <a href="#academic">Academic Details</a>
              </li>
              <li>
                <a href="#professional">Professional Details</a>
              </li> */}
            </ul>
          </div>

          <div>
            <input
              type="submit"
              className="profile-edit-btn"
              name="btn"
              value="profile"
            />
          </div>
          <div className="aboutus">
            <div
              className="tab-pane fade show active"
              id="home"
              aria-labelledby="home-tab"
            >
              <div>
                <label>User ID</label>
              </div>
              <div>
                <p>11111</p>
              </div>

              <div>
                <label>Name</label>
              </div>
              <div>
                <p>Ankita</p>
              </div>

              <div>
                <label>Contact Number</label>
              </div>
              <div>
                <p>93332</p>
              </div>

              <div>
                <label>email</label>
              </div>
              <div>
                <p>elon@musk.com</p>
              </div>
            </div>
          </div>

          <div className="academic">
            <div>
              <label>Degree</label>
            </div>
            <div>
              <p>B.tech</p>
            </div>

            <div>
              <label>Senior Secondary School</label>
            </div>
            <div>
              <p>School Name</p>
            </div>

            <div>
              <label>Seconday School</label>
            </div>
            <div>
              <p>Place</p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
