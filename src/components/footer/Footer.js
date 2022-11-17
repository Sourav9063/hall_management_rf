import React from "react";
import style from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope} from "react-icons/fa";
import map from "../../assets/images/map.png";

export default function Footer() {
  return (
    <body>
      <footer class={style.footer}>
        <div class={style.container}>
          <div class={style.row}>
            <div class={style.footer_col}>
              <h4>company</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Facilities</a>
                </li>
                <li>
                  <a href="#">Affiliate program</a>
                </li>
              </ul>
            </div>
            <div class={style.footer_col}>
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <p>

                    <FaPhone></FaPhone>
                    019100000
                  </p>
                </li>
                <li>
                <p>
                    <FaEnvelope></FaEnvelope>
                    sust@gmail.com
                  </p>
                </li>
              </ul>
            </div>
            <div class={style.footer_col}>
              <h4>Find Us</h4>
              {/* <ul>
                        <li><a href="#">watch</a></li>
                        <li><a href="#">bag</a></li>
                        <li><a href="#">shoes</a></li>
                        <li><a href="#">dress</a></li>
                    </ul> */}
              <img
                src={map}
                alt="shahporan hall"
                srcset=""
              />
            </div>
            <div class={style.footer_col}>
              <h4>follow us</h4>
              <div class={style.social_links}>
                <a href="#">
                  <FaFacebook></FaFacebook>
                </a>
                <a href="#">
                  <FaInstagram></FaInstagram>
                </a>
                <a href="#">
                  <FaTwitter></FaTwitter>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </body>
  );
}
