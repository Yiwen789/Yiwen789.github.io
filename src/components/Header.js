import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Hi, I'm {data.name}{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "Building digital"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : ""}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[2]
                  ? data.headerTagline[2]
                  : ""}
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <Fade bottom >
            <div className="button-wrapper">
            <a
                href={`mailto:${
                  data.contactEmail ? data.contactEmail : "luoy8865@gmail.com"
                }`}
                className="primary-btn"
              >
                CONNECT WITH ME
              </a>

              <a
                href={
                  "https://drive.google.com/file/d/1Z2JJypud7oh6dUFMSy0mQRT2Ufvxznte/view?usp=sharing"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn"
              >
                
                MY RESUME
              </a>
            </div>
              
            
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
