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



  }, [])



  return (
    <div>

      <div className={style.header_background} >
        <div><img className={anime} src={img2} alt="shahporan hall" srcSet="" /></div>
        <div className={style.hall_name}>
          <div className={style.hall}>Shahparan Hall</div>
          <a className={style.uni} href="https://www.sust.edu/">Shahjalal University of Science and Technology
          </a>
          <h4 className={style.log}>Logged In As {user}</h4>
        </div>
        <div className={style.btn}>
          <button onClick={toApplication} >Apply now</button>
          <button onClick={toLogIn}>Log In</button>
        </div>
      </div>

      <div className={style.marquee}>
        <div>Notice Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis delectus, voluptatibus saepe doloremque repudiandae accusantium, voluptatem corrupti neque provident eaque, tempora mollitia ducimus distinctio sed vel minus dicta blanditiis excepturi!</div>

      </div>

      <div className={style.about} id="about">
        <div className={style.about_title}>About</div>
        <div className={style.about_des}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          placeat, ad repudiandae, eius nulla nobis eaque perferendis harum
          nihil reiciendis repellendus doloribus cupiditate. Cum, natus?
          Voluptatibus magni modi voluptatum dignissimos non inventore
          veritatis, ipsa amet earum, mollitia fugit. Error quo unde facilis
          nostrum totam neque fuga ut maxime obcaecati iure praesentium,
          repudiandae fugiat aliquam nemo eius, numquam sint in, earum
          temporibus sequi porro laudantium aperiam harum. Sunt corporis iusto
          voluptates ratione nulla repudiandae quasi pariatur iure, illo
          corrupti harum maiores, quisquam veritatis quis aliquam ipsam, itaque
          saepe. Beatae unde a itaque quia aspernatur nostrum debitis at neque
          modi? Maiores reprehenderit cum, quos sunt laudantium ea minus
          molestias omnis culpa obcaecati exercitationem distinctio doloremque
          atque saepe nemo vero explicabo voluptate facilis quaerat sapiente
          iure voluptas quo! Veniam reiciendis dolorem quod earum esse, fugit
          facilis maxime quibusdam quasi velit! Commodi, maxime atque. Dolorem
          commodi magnam inventore totam odio quidem dolore voluptas iure
          provident. Praesentium molestias est numquam cupiditate quia fugit.
          Assumenda aliquid doloribus, et tempora id sit placeat perferendis
          inventore repellendus delectus nam ut expedita molestiae officiis
          totam laboriosam, incidunt hic atque nesciunt voluptatum officia
          laudantium sapiente quasi. Minima vel quis, non fuga incidunt hic?
          Doloremque ea consequatur vitae? Assumenda, quibusdam aspernatur!
        </div>
      </div>
      <div className={style.facilities}>
        <div className={`${style.facilities_title} center`} id="facilities">Facilities</div>
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
      <div className={`${style.gallery_title} center`} id="gallery">Gallery</div>
      {/* <div className={style.gallery}>
        <img src={img1} alt="shahporan hall" srcSet="" />
        <img src={img2} alt="shahporan hall" srcSet="" />
        <img src={img1} alt="shahporan hall" srcSet="" />
      </div> */}
      <div className={style.slider}><Silde slides={SliderData} /></div>

      <div className="department-overview department-faculty">
        <h2 id="mobile-dept-title" className={`${style.gallery_title} center`}>Offices</h2>
        <h2 className={`${style.gallery_title} center`}>Shah Paran Hall</h2>
        <ul id="og-grid" className={style.og_grid}>
          <li className="odd first-child">
            <a href="/details" data-largesrc="images/staff/large/" data-title="Dr Mohammad Mizanur Rahman Khan" data-designation="Provost" data-description="<h3 className=contact-info-h3>Contact Information:</h3>
												<ul className=contact-info-ul>
													<li>Phone: 01712537886</li>
												</ul>">
              <div className="staff-thumb">
                <img src="https://www.sust.edu/uploads/profile-images/other-office-1579416152.jpg" className="img-responsive" alt="" />
                <span><i></i></span>
              </div>
              <h4>Dr Mohammad Mizanur Rahman Khan <span className="designation">Provost</span></h4>
            </a>
          </li><li className="even">
            <a href="/details" data-largesrc="images/staff/large/" data-title="Mr. Kawshik Saha" data-designation="Assistant Provost" data-description="<h3 className=contact-info-h3>Contact Information:</h3>
												<ul className=contact-info-ul>
													<li>Phone: 01712852564</li>
												</ul>">
              <div className="staff-thumb">
                <img src="https://www.sust.edu/uploads/profile-images/other-office-1581912914.jpg" className="img-responsive" alt="" />
                <span><i></i></span>
              </div>
              <h4>Mr. Kawshik Saha <span className="designation">Assistant Provost</span></h4>
            </a>
          </li><li className="odd">
            <a href="/details" data-largesrc="images/staff/large/" data-title="Mr Ashis Kumar Banik" data-designation="Assistant Provost" data-description="<h3 className=contact-info-h3>Contact Information:</h3>
												<ul className=contact-info-ul>
													<li>Phone: 01739060516</li>
												</ul>">
              <div className="staff-thumb">
                <img src="https://www.sust.edu/uploads/profile-images/other-office-1581913308.jpg" className="img-responsive" alt="" />
                <span><i></i></span>
              </div>
              <h4>Mr Ashis Kumar Banik <span className="designation">Assistant Provost</span></h4>
            </a>
          </li><li className="even">
            <a href="/details" data-largesrc="images/staff/large/" data-title="Mr Mohammad Abul Hasnat" data-designation="Assistant Provost" data-description="<h3 className=contact-info-h3>Contact Information:</h3>
												<ul className=contact-info-ul>
													<li>Phone: 01710525919</li>
												</ul>">
              <div className="staff-thumb">
                <img src="https://www.sust.edu/uploads/profile-images/other-office-1581914076.jpg" className="img-responsive" alt="" />
                <span><i></i></span>
              </div>
              <h4>Mr Mohammad Abul Hasnat <span className="designation">Assistant Provost</span></h4>
            </a>
          </li><li className="odd">
            <a href="/details" data-largesrc="images/staff/large/" data-title="Md Masum Talukder" data-designation="Assistant Provost" data-description="<h3 className=contact-info-h3>Contact Information:</h3>
												<ul className=contact-info-ul>
													<li>Phone: 01716310110</li>
												</ul>">
              <div className="staff-thumb">
                <img src="https://www.sust.edu/uploads/profile-images/other-office-1581914165.jpg" className="img-responsive" alt="" />
                <span><i></i></span>
              </div>
              <h4>Md Masum Talukder <span className="designation">Assistant Provost</span></h4>
            </a>
          </li><li className="even">
            <a href="/details" data-largesrc="images/staff/large/" data-title="A.S.M. Sayem" data-designation="Assistant Provost" data-description="<h3 className=contact-info-h3>Contact Information:</h3>
												<ul className=contact-info-ul>
													<li>Phone: 01717342080</li>
												</ul>">
              <div className="staff-thumb">
                <img src="https://www.sust.edu/uploads/profile-images/other-office-1581914234.jpg" className="img-responsive" alt="" />
                <span><i></i></span>
              </div>
              <h4>A.S.M. Sayem <span className="designation">Assistant Provost</span></h4>
            </a>
          </li><li className="odd">
            <a href="/details" data-largesrc="images/staff/large/" data-title="Md Saifuzzaman Bhuiyan" data-designation="Assistant Provost" data-description="<h3 className=contact-info-h3>Contact Information:</h3>
												<ul className=contact-info-ul>
													<li>Phone: 01628598829</li>
												</ul>">
              <div className="staff-thumb">
                <img src="https://www.sust.edu/uploads/profile-images/other-office-1581914544.jpg" className="img-responsive" alt="" />
                <span><i></i></span>
              </div>
              <h4>Md Saifuzzaman Bhuiyan <span className="designation">Assistant Provost</span></h4>
            </a>
          </li><li className="even">
            <a href="/details" data-largesrc="images/staff/large/" data-title="Asif Mohammed Samir" data-designation="Assistant Provost" data-description="<h3 className=contact-info-h3>Contact Information:</h3>
												<ul className=contact-info-ul>
													<li>Phone: 01718168496</li>
												</ul>">
              <div className="staff-thumb">
                <img src="https://www.sust.edu/uploads/profile-images/other-office-1581914583.jpg" className="img-responsive" alt="" />
                <span><i></i></span>
              </div>
              <h4>Asif Mohammed Samir <span className="designation">Assistant Provost</span></h4>
            </a>
          </li><li className="odd">
            <a href="/details" data-largesrc="images/staff/large/" data-title="Md Mahadi Hasan Nahid" data-designation="Assistant Provost" data-description="<h3 className=contact-info-h3>Contact Information:</h3>
												<ul className=contact-info-ul>
													<li>Phone: 01738150127</li>
												</ul>">
              <div className="staff-thumb">
                <img src="https://www.sust.edu/uploads/profile-images/other-office-1581914663.jpg" className="img-responsive" alt="" />
                <span><i></i></span>
              </div>
              <h4>Md Mahadi Hasan Nahid <span className="designation">Assistant Provost</span></h4>
            </a>
          </li><li className="even">
            <a href="/details" data-largesrc="images/staff/large/" data-title="Amit Kumar Chakraborty" data-designation="Assistant Provost" data-description="<h3 className=contact-info-h3>Contact Information:</h3>
												<ul className=contact-info-ul>
													<li>Phone: 01713936851</li>
												</ul>">
              <div className="staff-thumb">
                <img src="https://www.sust.edu/uploads/profile-images/other-office-1581914740.jpg" className="img-responsive" alt="" />
                <span><i></i></span>
              </div>
              <h4>Amit Kumar Chakraborty <span className="designation">Assistant Provost</span></h4>
            </a>
          </li><li className="odd">
            <a href="/details" data-largesrc="images/staff/large/" data-title="Mr Md Amirul Haque Chy" data-designation="Administrative Officer" data-description="<h3 className=contact-info-h3>Contact Information:</h3>
												<ul className=contact-info-ul>
													<li>Phone: 01716253577</li>
												</ul>">
              <div className="staff-thumb">
                <img src="https://www.sust.edu/uploads/profile-images/other-office-1461470159.jpg" className="img-responsive" alt="" />
                <span><i></i></span>
              </div>
              <h4>Mr Md Amirul Haque Chy <span className="designation">Administrative Officer</span></h4>
            </a>
          </li><li className="even last-child">
            <a href="/details" data-largesrc="images/staff/large/" data-title="Mr Md Anwarul Hoque" data-designation="Imam" data-description="<h3 className=contact-info-h3>Contact Information:</h3>
												<ul className=contact-info-ul>
													<li>Phone: 01738768628</li>
												</ul>">
              <div className="staff-thumb">
                <img src="https://www.sust.edu/uploads/profile-images/thumb.jpg" className="img-responsive" alt="" />
                <span><i></i></span>
              </div>
              <h4>Mr Md Anwarul Hoque <span className="designation">Imam</span></h4>
            </a>
          </li>
        </ul>
        <div className={style.footer}>
          <h2>Contact</h2>
          <div className="contact_address_container">
            <ul>
              <li className="odd first-child"><strong>Shahjalal University of Science and Technology</strong></li><li className="even last-child">Shahjalal University of Science and Technology, Sylhet-3114, Bangladesh.</li>								</ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
