import { projects } from "../data/projects.js";
import { useState } from "react";

function ProjectList({ items, selectedTags, setSelectedTags }) {
  var filteredItems = items
  if (selectedTags.length > 0){
    filteredItems = items.filter(item =>
      selectedTags.every(tag =>
        item.tags.includes(tag) || item.location === tag
      )
    );
  }
  return (
    <ul className="item-list">
      {filteredItems.map((project) => (
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
              <p
              className="projectLocation" 
              style={{"backgroundColor": project.location_background}}
              onClick={() => {
                const newSelectedTags = selectedTags.includes(project.location) ? selectedTags.filter(item => item !== project.location) : [...selectedTags, project.location]
                setSelectedTags(newSelectedTags)}}
              >
                {project.location}</p>
              {project.tags.map((tag, _) => <span className="tags" onClick={() => {
                const newSelectedTags = selectedTags.includes(tag) ? selectedTags.filter(item => item !== tag) : [...selectedTags, tag]
                setSelectedTags(newSelectedTags)}}>{tag}</span>)}
            </div>
          )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Projects() {
  const [selectedTags, setSelectedTags] = useState([]);

  return (
    <article>
      <h1>Selected Projects</h1>
      <div className="projectNote">
          Project markings: AE Studio projects were done while I was working for AIAF or AE Studio. APL projects were internally funded research projects at JHU/APL where I was the principal investigator. Georgetown projects were term projects. 
        </div>
        <div className="projectNote">
          Green tags are project keywords.
        </div>
      <div>
        Selected filters: 
        {
          selectedTags.length === 0  ? " None" :
            <span>
              {selectedTags.map((tag) => 
                  <span  className="tagSelection" onClick={() => setSelectedTags(selectedTags.filter(item => item !==tag))}>{tag}</span>
              )}
            <span className="tagSelection" onClick={() => setSelectedTags([])}>clear</span>
            </span>
      }  
      </div>
        
      <ProjectList items={projects} selectedTags={selectedTags} setSelectedTags={setSelectedTags}/>
    </article>
  );
}
