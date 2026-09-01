import { projects } from "../data/projects.js";
import { useState } from "react";

function ProjectList({ items }) {
  return (
    <ul className="item-list">
      {items.map((project) => (
        <li key={project.title}>
          <h3>{project.title}</h3>
          <p>{project.blurb}</p>
          {project.links?.length > 0 && (
            <p className="links">
              {project.links.map((link, index) => (
                <span key={link.href}>
                  {index > 0 && " · "}
                  <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
                </span>
              ))}
            </p>
          )}
          <div>
            {project.tags?.length > 0 && (
            <div className="tagBox">
              {project.tags.map((tag, index) => <span className="tags">{tag}</span>)}
            </div>
          )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Projects() {
  const work = projects.filter((project) => project.category === "work");
  const school = projects.filter((project) => project.category === "school");
  const [selected, setSelected] = useState("work");
  return (
    <article>
      <h1>Selected Projects</h1>
      <div className="projectSelectionBox">
        <div className="projectSelection" style={selected === "work" ? {textDecoration: "underline"} : {}} onClick={()=>setSelected("work")}>Work</div>
        <div className="projectSelection" style={selected === "school" ? {textDecoration: "underline"} : {}} onClick={()=>setSelected("school")}>School</div>
      </div>
      { selected == "work" ? 
        <div className="projectNote">
          All of these were internally funded research projects at JHU/APL in which I was the principal investigator.
        </div>
        :
        <div className="projectNote">
          Selected research and/or class final projects from my M.S. in Computational Linguistics.
        </div>
        }

      <ProjectList items={selected === "work" ? work : school} />
    </article>
  );
}
