import React from "react";
import Navbar from "./Navbar";
import Profile from "./Profile1";
import About from "./About";
import Skills from "./Skills";
import Experiences from "./Experiences";
import Educations from "./Educations";
import Portfolios from "./Portfolios";

const Home = () => {
  // export default class Home extends Component {
  //   render() {
  return (
    <section>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col s12 m3">
            <Profile />
          </div>
          <div className="col s12 m9">
            <About />
            <Skills />
            <Experiences />
            <Educations />
            <Portfolios />
          </div>
        </div>
      </div>
    </section>
  );
  //   }
};
export default Home;
