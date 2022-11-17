import React, { useEffect, useState } from "react";

import style from "./Home.module.css";

import img2 from "../../assets/images/img2.jpg";
import { useNavigate } from "react-router-dom";
import Silde from "../../components/slider/Slider";
import { SliderData } from "../../components/slider/SliderData";

const Home = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));

  const navigate = useNavigate();
  const toApplication = () => {
    navigate("/application");
  };
  const toLogIn = () => {
    navigate("/login");
  };

  const [anime, setAnime] = useState(style.img2);

  useEffect(() => {
    setAnime(`${style.img2} ${style.img2_2}`);
  }, []);

  return (
    <div>
      <div className={style.header_background}>
        <div>
          <img className={anime} src={img2} alt="shahporan hall" srcSet="" />
        </div>
        <div className={style.hall_name}>
          <div className={style.hall}>Shahparan Hall</div>
          <a className={style.uni} href="https://www.sust.edu/">
            Shahjalal University of Science and Technology
          </a>
          <h4 className={style.log}>Logged In As {user}</h4>
        </div>
        <div className={style.btn}>
          <button onClick={toApplication}>Apply now</button>
          <button onClick={toLogIn}>Log In</button>
        </div>
      </div>

      <div className={style.marquee}>
        <div>
          Notice Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Perspiciatis delectus, voluptatibus saepe doloremque repudiandae
          accusantium, voluptatem corrupti neque provident eaque, tempora
          mollitia ducimus distinctio sed vel minus dicta blanditiis excepturi!
        </div>
      </div>

      <div className={style.about} id="about">
        <div className={style.about_title}>About</div>
        <div className={style.about_des}>
          After a long struggle and a relentless movement, the Shahjalal
          University of Science and Technology (SUST) was established in 1986.
          The only university of its kind at that time, it started it's career
          on the 1st Phalgun(13th of February 1991) with only three departments:
          Physics, Chemistry and Economics, 13 teachers and 205 students. It has
          now expanded to 7 schools, 27 departments and two institutes. The
          number of teachers has grown to 566 and the students to 8596. Besides,
          the University has 12 affiliated medical colleges under the School of
          Medical Sciences with 4000 students. SUST introduced the integrated
          honours course for the first time in Bangladesh. It introduced the
          semester system from the 1996-97 session and there was a remarkable
          improvement in the quality of education after the introduction of this
          system, which was visible even in the national arena. Every student
          from SUST has to take two language courses, one in Bangla and the
          other one in English. Every student also has to take two computer
          courses, one for computer literacy and the other to learn a computer
          language. The computer center of SUST offers courses to every
          employees and one can say, without any hesitation that SUST is the
          most IT enabled university in this country. SUST has started it's
          graduate programs by offering masters degree to graduating bachelors
          of most of the departments. It is difficult to start a world-class
          research program without a well funded graduate school, even then the
          teachers of SUST are trying to create a research environment in the
          campus. Two research journals are published regularly from SUST, one
          in Bangla and the other one in English where a few hundred research
          papers are submitted every year. Several departments have hosted
          International Conferences and are planning to organize similar events
          in the near future.
        </div>
      </div>
      <div className={style.facilities}>
        <div className={`${style.facilities_title} center`} id="facilities">
          Facilities
        </div>
        <div className={style.facilities_des}>
          <div className={style.in_room}>
            <h2>In-room Amenities</h2>
            <ul>
              <li>One Bed per Student shall be offered</li>
              <li>Fully furnished rooms with beds & underbed drawers</li>
              <li>Study tables & Chair</li>
              <li>Tube lights & LED, Fan</li>
              <li>Dustbin in each room</li>
              <li>300 square feet spacious room</li>
            </ul>
          </div>
          <div className={style.self_help}>
            <h2>Self Help Amenities</h2>
            <ul>
              <li>Laundry Service</li>
              <li>Filter Water facility to be provided</li>
              <li>
                Medical facility available with first aid/ provided to sick
                Residents
              </li>
              <li>Doctor on call number(s) to be shared with the students</li>
              <li>Dining area</li>
            </ul>
          </div>
          <div className={style.Cost_effect}>
            <h2>Cost-Effective Living Option</h2>
            <ul>
              <li>Cost-effective compared to other living options</li>
              <li>Get all services together in the single hall cost</li>
              <li>
                Long corridor infront of room Separate balcony in each room
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`${style.gallery_title} center`} id="gallery">
        Gallery
      </div>
      {/* <div className={style.gallery}>
        <img src={img1} alt="shahporan hall" srcSet="" />
        <img src={img2} alt="shahporan hall" srcSet="" />
        <img src={img1} alt="shahporan hall" srcSet="" />
      </div> */}
      <div className={style.slider}>
        <Silde slides={SliderData} />
      </div>

      <div className="department-overview department-faculty">
        <h2 id="mobile-dept-title" className={`${style.gallery_title} center`}>
          Offices
        </h2>
        <h2 className={`${style.gallery_title} center`}>Shah Paran Hall</h2>
        <ul id="og-grid" className={style.og_grid}>
          <li className="odd first-child">
            <a
              href="/details"
              data-largesrc="images/staff/large/"
              data-title="Dr Mohammad Mizanur Rahman Khan"
              data-designation="Provost"
              data-description="<h3 className=contact-info-h3>Contact Information:</h3>
												<ul className=contact-info-ul>
													<li>Phone: 01712537886</li>
												</ul>"
            >
              <div className="staff-thumb">
                <img
                  src="https://www.sust.edu/uploads/profile-images/other-office-1579416152.jpg"
                  className="img-responsive"
                  alt=""
                />
                <span>
                  <i></i>
                </span>
              </div>
              <h4>
                Dr Mohammad Mizanur Rahman Khan{" "}
                <span className="designation">Provost</span>
              </h4>
            </a>
          </li>
          <li className="even">
            <a
              href="/details"
              data-largesrc="images/staff/large/"
              data-title="Mr. Kawshik Saha"
              data-designation="Assistant Provost"
              data-description="<h3 className=contact-info-h3>Contact Information:</h3>
												<ul className=contact-info-ul>
													<li>Phone: 01712852564</li>
												</ul>"
            >
              <div className="staff-thumb">
                <img
                  src="https://www.sust.edu/uploads/profile-images/other-office-1581912914.jpg"
                  className="img-responsive"
                  alt=""
                />
                <span>
                  <i></i>
                </span>
              </div>
              <h4>
                Mr. Kawshik Saha{" "}
                <span className="designation">Assistant Provost</span>
              </h4>
            </a>
          </li>
          <li className="odd">
            <a
              href="/details"
              data-largesrc="images/staff/large/"
              data-title="Mr Ashis Kumar Banik"
              data-designation="Assistant Provost"
              data-description="<h3 className=contact-info-h3>Contact Information:</h3>
												<ul className=contact-info-ul>
													<li>Phone: 01739060516</li>
												</ul>"
            >
              <div className="staff-thumb">
                <img
                  src="https://www.sust.edu/uploads/profile-images/other-office-1581913308.jpg"
                  className="img-responsive"
                  alt=""
                />
                <span>
                  <i></i>
                </span>
              </div>
              <h4>
                Mr Ashis Kumar Banik{" "}
                <span className="designation">Assistant Provost</span>
              </h4>
            </a>
          </li>
          <li className="even">
            <a
              href="/details"
              data-largesrc="images/staff/large/"
              data-title="Mr Mohammad Abul Hasnat"
              data-designation="Assistant Provost"
              data-description="<h3 className=contact-info-h3>Contact Information:</h3>
												<ul className=contact-info-ul>
													<li>Phone: 01710525919</li>
												</ul>"
            >
              <div className="staff-thumb">
                <img
                  src="https://www.sust.edu/uploads/profile-images/other-office-1581914076.jpg"
                  className="img-responsive"
                  alt=""
                />
                <span>
                  <i></i>
                </span>
              </div>
              <h4>
                Mr Mohammad Abul Hasnat{" "}
                <span className="designation">Assistant Provost</span>
              </h4>
            </a>
          </li>
          <li className="odd">
            <a
              href="/details"
              data-largesrc="images/staff/large/"
              data-title="Md Masum Talukder"
              data-designation="Assistant Provost"
              data-description="<h3 className=contact-info-h3>Contact Information:</h3>
												<ul className=contact-info-ul>
													<li>Phone: 01716310110</li>
												</ul>"
            >
              <div className="staff-thumb">
                <img
                  src="https://www.sust.edu/uploads/profile-images/other-office-1581914165.jpg"
                  className="img-responsive"
                  alt=""
                />
                <span>
                  <i></i>
                </span>
              </div>
              <h4>
                Md Masum Talukder{" "}
                <span className="designation">Assistant Provost</span>
              </h4>
            </a>
          </li>
          <li className="even">
            <a
              href="/details"
              data-largesrc="images/staff/large/"
              data-title="A.S.M. Sayem"
              data-designation="Assistant Provost"
              data-description="<h3 className=contact-info-h3>Contact Information:</h3>
												<ul className=contact-info-ul>
													<li>Phone: 01717342080</li>
												</ul>"
            >
              <div className="staff-thumb">
                <img
                  src="https://www.sust.edu/uploads/profile-images/other-office-1581914234.jpg"
                  className="img-responsive"
                  alt=""
                />
                <span>
                  <i></i>
                </span>
              </div>
              <h4>
                A.S.M. Sayem{" "}
                <span className="designation">Assistant Provost</span>
              </h4>
            </a>
          </li>
          <li className="odd">
            <a
              href="/details"
              data-largesrc="images/staff/large/"
              data-title="Md Saifuzzaman Bhuiyan"
              data-designation="Assistant Provost"
              data-description="<h3 className=contact-info-h3>Contact Information:</h3>
												<ul className=contact-info-ul>
													<li>Phone: 01628598829</li>
												</ul>"
            >
              <div className="staff-thumb">
                <img
                  src="https://www.sust.edu/uploads/profile-images/other-office-1581914544.jpg"
                  className="img-responsive"
                  alt=""
                />
                <span>
                  <i></i>
                </span>
              </div>
              <h4>
                Md Saifuzzaman Bhuiyan{" "}
                <span className="designation">Assistant Provost</span>
              </h4>
            </a>
          </li>
          <li className="even">
            <a
              href="/details"
              data-largesrc="images/staff/large/"
              data-title="Asif Mohammed Samir"
              data-designation="Assistant Provost"
              data-description="<h3 className=contact-info-h3>Contact Information:</h3>
												<ul className=contact-info-ul>
													<li>Phone: 01718168496</li>
												</ul>"
            >
              <div className="staff-thumb">
                <img
                  src="https://www.sust.edu/uploads/profile-images/other-office-1581914583.jpg"
                  className="img-responsive"
                  alt=""
                />
                <span>
                  <i></i>
                </span>
              </div>
              <h4>
                Asif Mohammed Samir{" "}
                <span className="designation">Assistant Provost</span>
              </h4>
            </a>
          </li>
          <li className="odd">
            <a
              href="/details"
              data-largesrc="images/staff/large/"
              data-title="Md Mahadi Hasan Nahid"
              data-designation="Assistant Provost"
              data-description="<h3 className=contact-info-h3>Contact Information:</h3>
												<ul className=contact-info-ul>
													<li>Phone: 01738150127</li>
												</ul>"
            >
              <div className="staff-thumb">
                <img
                  src="https://www.sust.edu/uploads/profile-images/other-office-1581914663.jpg"
                  className="img-responsive"
                  alt=""
                />
                <span>
                  <i></i>
                </span>
              </div>
              <h4>
                Md Mahadi Hasan Nahid{" "}
                <span className="designation">Assistant Provost</span>
              </h4>
            </a>
          </li>
          <li className="even">
            <a
              href="/details"
              data-largesrc="images/staff/large/"
              data-title="Amit Kumar Chakraborty"
              data-designation="Assistant Provost"
              data-description="<h3 className=contact-info-h3>Contact Information:</h3>
												<ul className=contact-info-ul>
													<li>Phone: 01713936851</li>
												</ul>"
            >
              <div className="staff-thumb">
                <img
                  src="https://www.sust.edu/uploads/profile-images/other-office-1581914740.jpg"
                  className="img-responsive"
                  alt=""
                />
                <span>
                  <i></i>
                </span>
              </div>
              <h4>
                Amit Kumar Chakraborty{" "}
                <span className="designation">Assistant Provost</span>
              </h4>
            </a>
          </li>
          <li className="odd">
            <a
              href="/details"
              data-largesrc="images/staff/large/"
              data-title="Mr Md Amirul Haque Chy"
              data-designation="Administrative Officer"
              data-description="<h3 className=contact-info-h3>Contact Information:</h3>
												<ul className=contact-info-ul>
													<li>Phone: 01716253577</li>
												</ul>"
            >
              <div className="staff-thumb">
                <img
                  src="https://www.sust.edu/uploads/profile-images/other-office-1461470159.jpg"
                  className="img-responsive"
                  alt=""
                />
                <span>
                  <i></i>
                </span>
              </div>
              <h4>
                Mr Md Amirul Haque Chy{" "}
                <span className="designation">Administrative Officer</span>
              </h4>
            </a>
          </li>
          <li className="even last-child">
            <a
              href="/details"
              data-largesrc="images/staff/large/"
              data-title="Mr Md Anwarul Hoque"
              data-designation="Imam"
              data-description="<h3 className=contact-info-h3>Contact Information:</h3>
												<ul className=contact-info-ul>
													<li>Phone: 01738768628</li>
												</ul>"
            >
              <div className="staff-thumb">
                <img
                  src="https://www.sust.edu/uploads/profile-images/thumb.jpg"
                  className="img-responsive"
                  alt=""
                />
                <span>
                  <i></i>
                </span>
              </div>
              <h4>
                Mr Md Anwarul Hoque <span className="designation">Imam</span>
              </h4>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
