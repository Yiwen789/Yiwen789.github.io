import React from "react";

// Social Icon
import githubIcon from "../../images/github.svg";
import externalLinkIcon from "../../images/external-link.svg";

const Card = ({ heading, paragraph, techStack, imgUrl, projectLink, githubLink }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        <p className="techstack-text">{techStack}</p>
        <a
          href={projectLink ? projectLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <img className="icon" src={externalLinkIcon} alt="" />
        </a>
        <a
        href={githubLink ? githubLink: "#"}
        className="icon-link">
          <img className="icon" src={githubIcon} alt="" />
        </a>
      </div>
    </div>
  )
}

export default Card;
