import React from "react";
import Navbar from "./components/Navbar";
import style from "../src/css/Home.module.css";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const toApplication = () => {
    navigate("/application");
  };
  return (
    <div>
      <Navbar />
      <div className={style.img1} >
        <img className={style.img2} src={img2} alt="shahporan hall" srcset="" />
        <div className={style.hall_name}>
          <div className={style.hall}>Shahparan Hall</div>
          <a className={style.uni} href="https://www.sust.edu/">Shahjalal University of Science and Technology
          </a>
        </div>
        <div className={style.btn}>
          <button onClick={toApplication} >Apply now</button>
          <button>Log In</button>
        </div>
      </div>
      <div className={style.about}>
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
        <div className={`${style.facilities_title} center`}>Facilities</div>
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
      <div className={`${style.gallery_title} center`}>Gallery</div>
      <div className={style.gallery}>
        <img src={img1} alt="shahporan hall" srcset="" />
        <img src={img2} alt="shahporan hall" srcset="" />
        <img src={img1} alt="shahporan hall" srcset="" />
      </div>
    </div>
  );
};

export default Home;
