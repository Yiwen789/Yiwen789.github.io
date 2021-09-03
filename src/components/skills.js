import React from "react"
import data from "../yourdata"

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>My Go-to Tech Stack</h1>
          <div className="skills-grid">
            {data.skills.map((skill, index) => (
                <div className="skill" key={index}>
                {/* <img src={skill.img} alt="css"></img> */}
                <h3>{skill.skill}</h3>
                {/* <p>{skill.para}</p> */}
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
