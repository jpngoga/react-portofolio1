import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.png";
import arrow2 from "../assets/img/arrow2.png";
import { FaThumbsUp } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { CgAwards } from "react-icons/cg";
import "./education.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>About</h2>
              <p>
                Whenever you give me chance to work with you, am sure that you
                will never regret investing in me,I put quality and minimal
                delivery of your tasks,my ears are always open to hear what my
                client need.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Computer Networking</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Project Manager</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          {/* <!-- skill item --> */}
          <br></br>
          <div
            style={{
              color: "whitesmoke",
              paddingLeft: "",
            }}
            class="row mt-5"
          >
            <div class="col-md-6">
              {/* <!-- skill item --> */}
              <div class="skill-item">
                <div class="skill-info clearfix">
                  <br></br>
                  <h6 class="float-left col-md-6 mt-0">C, C++</h6>
                  <span class="float-right">85%</span>
                </div>
                <div
                  style={{
                    height: "8px",
                    marginBbottom: 0,

                    backgroundColor: "#EBEBEB",
                    borderRadius: 4,
                    boxShadow: "none",
                  }}
                  class="progress"
                >
                  <div
                    style={{
                      width: "85%",
                      borderRadius: 4,
                      backgroundColor: "#343541",
                      transition: "width 2s ease",
                    }}
                    class="progress-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="85"
                  ></div>
                </div>
                <div class="spacer" data-height="50"></div>
              </div>
            </div>

            <div class="col-md-6">
              {/* <!-- skill item --> */}
              <div class="skill-item">
                <div class="skill-info clearfix">
                  <br></br>
                  <h6 class="center col-md-6 mt-0">HTML & CSS</h6>
                  <span class="float-right">90%</span>
                </div>
                <div
                  style={{
                    height: "8px",
                    marginBbottom: 0,
                    overflow: "hidden",
                    backgroundColor: "#EBEBEB",
                    borderRadius: 4,
                    boxShadow: "none",
                  }}
                  class="progress"
                >
                  <div
                    style={{
                      width: "90%",
                      borderRadius: 4,
                      backgroundColor: "#343541",
                      transition: "width 2s ease",
                    }}
                    class="progress-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="90"
                  ></div>
                </div>
                <div class="spacer" data-height="50"></div>
              </div>
            </div>
            <div class="col-md-6">
              {/* <!-- skill item --> */}
              <div class="skill-item">
                <div class="skill-info clearfix">
                  <br></br>
                  <h6 class="center col-md-6 mt-0">Figma & Adobe XD</h6>
                  <span class="float-right">85%</span>
                </div>
                <div
                  style={{
                    height: "8px",
                    marginBbottom: 0,
                    overflow: "hidden",
                    backgroundColor: "#EBEBEB",
                    borderRadius: 4,
                    boxShadow: "none",
                  }}
                  class="progress"
                >
                  <div
                    style={{
                      width: "85%",
                      borderRadius: 4,
                      backgroundColor: "#343541",
                      transition: "width 2s ease",
                    }}
                    class="progress-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="85"
                  ></div>
                </div>
                <div class="spacer" data-height="50"></div>
              </div>
            </div>

            <div class="col-md-6">
              {/* <!-- skill item --> */}
              <div class="skill-item ">
                <div class="skill-info clearfix">
                  <br></br>
                  <h6 class="float-left col-md-6 mt-0">React & Angular Js</h6>
                  <span class="float-right">65%</span>
                </div>
                <div
                  style={{
                    height: "8px",
                    marginBbottom: 0,
                    overflow: "hidden",
                    backgroundColor: "#EBEBEB",
                    borderRadius: 4,
                    boxShadow: "none",
                  }}
                  class="progress"
                >
                  <div
                    style={{
                      width: "65%",
                      borderRadius: 4,
                      backgroundColor: "#343541",
                      transition: "width 2s ease",
                    }}
                    class="progress-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="65"
                  ></div>
                </div>
                <div class="spacer d-md-none d-lg-none" data-height="50"></div>
              </div>
            </div>
            <div class="col-md-6">
              {/* <!-- skill item --> */}
              <div class="skill-item">
                <div class="skill-info clearfix">
                  <br></br>
                  <h6 class="float-left col-md-6 mt-0">Node JS & Jquery</h6>
                  <span class="float-right">70%</span>
                </div>
                <div
                  style={{
                    height: "8px",
                    marginBbottom: 0,
                    overflow: "hidden",
                    backgroundColor: "#EBEBEB",
                    borderRadius: 4,
                    boxShadow: "none",
                  }}
                  class="progress"
                >
                  <div
                    style={{
                      width: "70%",
                      borderRadius: 4,
                      backgroundColor: "#343541",
                      transition: "width 2s ease",
                    }}
                    class="progress-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="70"
                  ></div>
                </div>
                <div class="spacer d-md-none d-lg-none" data-height="50"></div>
              </div>
            </div>

            <div class="col-md-6">
              {/* <!-- skill item --> */}
              <div class="skill-item">
                <div class="skill-info clearfix">
                  <br></br>
                  <h6 class="float-left col-md-6 mt-0">Javascript & Python</h6>
                  <span class="float-right">70%</span>
                </div>
                <div
                  style={{
                    height: "8px",
                    marginBbottom: 0,
                    overflow: "hidden",
                    backgroundColor: "#EBEBEB",
                    borderRadius: 4,
                    boxShadow: "none",
                  }}
                  class="progress"
                >
                  <div
                    style={{
                      width: "70%",
                      borderRadius: 4,
                      backgroundColor: "#343541",
                      transition: "width 2s ease",
                    }}
                    class="progress-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="70"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <section
          id="facts"
          class="shadow-dark color-white background parallax padding-50"
          data-image-src="#"
          style={{
            backgroundColor: "#343541",
            borderRadius: "20px",
            padding: " 40px 20px",
          }}
        >
          <div class="row relative z-1">
            <div class="col-md-3 col-sm-6">
              {/* <!-- fact item --> */}
              <div class="fact-item text-center">
                <i
                  style={{
                    backgroundColor: "#FF5959",
                    borderRadius: "50%",
                    width: "50px",
                    textAlign: "center",
                    display: "inline-block",
                    height: "50px",
                    lineHeight: "50px",
                  }}
                >
                  <FaThumbsUp style={{ color: "white", fontSize: "24px" }} />
                </i>

                <h2>27</h2>
                <span>Projects completed</span>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              {/* <!-- fact item --> */}
              <div class="fact-item text-center">
                <i
                  style={{
                    backgroundColor: "#FF5959",
                    borderRadius: "50%",
                    width: "50px",
                    textAlign: "center",
                    display: "inline-block",
                    height: "50px",
                    lineHeight: "50px",
                  }}
                >
                  <GiCoffeeCup style={{ color: "white", fontSize: "24px" }} />
                </i>
                <h2 class="count">2765</h2>
                <span>Hours of Support</span>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              {/* <!-- fact item --> */}
              <div class="fact-item text-center">
                <i
                  style={{
                    backgroundColor: "#FF5959",
                    borderRadius: "50%",
                    width: "50px",
                    textAlign: "center",
                    display: "inline-block",
                    height: "50px",
                    lineHeight: "50px",
                  }}
                >
                  <BsFillEmojiSmileFill
                    style={{ color: "white", fontSize: "24px" }}
                  />
                </i>
                <h2 class="count">350</h2>
                <span>Days</span>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              {/* <!-- fact item --> */}
              <div class="fact-item text-center">
                <i
                  style={{
                    backgroundColor: "#FF5959",
                    borderRadius: "50%",
                    width: "50px",
                    textAlign: "center",
                    display: "inline-block",
                    height: "50px",
                    lineHeight: "50px",
                  }}
                >
                  <CgAwards style={{ color: "white", fontSize: "24px" }} />
                </i>
                <h2 class="count">18</h2>
                <span>Certificates</span>
              </div>
            </div>
          </div>

          <div class="overlay"></div>
        </section>
        <br></br>
        <br></br>
        <br></br>
        <section
          id="resume"
          style={{
            backgroundColor: "#343541",
            padding: "60px",
            borderRadius: "20px",
            fontWeight: 300,
          }}
          class="shadow-blue white-bg padding"
        >
          <h3 class="section-title">Experience</h3>
          <div class="spacer" data-height="80"></div>

          {/* <!-- timeline --> */}
          <div class="timeline">
            <div class="entry">
              <div class="title">
                <span>2015 - 2019</span>
              </div>
              <div class="body">
                <h4 class="mt-0">EDUCATION</h4>
                <p>Bachelor Degree of Computer Science and Technology</p>
                <p>At Northwestern Polytechnical University</p>
              </div>
            </div>
            <div class="entry">
              <div class="title">
                <span>2019 November - 2020 march</span>
              </div>
              <div class="body">
                <h4 class="mt-0">IT CONSULTANT</h4>
                <p>
                  Medicus Mundi north province, Rwanda Helped coworkers to learn
                  about our UI Managed up to 3 projects
                </p>
                <p>Helped coworkers to learn about our UI</p>
              </div>
            </div>

            <div class="entry">
              <div class="title">
                <span>2021 june - 2022 November</span>
              </div>
              <div class="body">
                <h4 class="mt-0">CONSULTANT AT APPEN</h4>
                <p>
                  online Freelancing learn from different website such as
                  Coursera and FreecodeCamp web development, python, Angular Js
                </p>
              </div>
            </div>
            <div class="entry">
              <div class="title">
                <span>2022 December - 2023 April</span>
              </div>
              <div class="body">
                <h4 class="mt-0">Web Developer at KLAB RW</h4>
                <p>web developer, React Js, TailwindCSS, ReduxToolKit</p>
              </div>
            </div>
            <span class="timeline-line"></span>
          </div>
        </section>
      </div>
    </section>
  );
};
