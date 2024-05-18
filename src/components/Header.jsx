import CoverImage from "../images/back.jpeg";
import ProfileImage from "../images/icon.jpg";

import { FaTwitter, FaGithub } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="main-cover" style={{ backgroundImage: `url(${CoverImage})` }}>
      <div className="overlay">
        <div className="container">
          <div className="display-table">
            <div className="display-table-contents">
              <div className="profile-thumb" style={{ backgroundImage: `url(${ProfileImage})` }}></div>

              <h1 className="title-text">Saki Shinobu</h1>
              <h3 className="title-text">Product Manager</h3>
              <ul className="social-icons">
                <li className="icon-link">
                  <a href="https://twitter.com/">
                    <FaTwitter color="white" size="2rem" />
                  </a>
                </li>
                <li className="icon-link">
                  <a href="https://github.com/SShinobuSS">
                    <FaGithub color="white" size="2rem" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
