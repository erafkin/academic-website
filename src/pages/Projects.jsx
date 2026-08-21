import { projects } from "../data/projects.js";

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
                  <a href={link.href}>{link.label}</a>
                </span>
              ))}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Projects() {
  const work = projects.filter((project) => project.category === "work");
  const school = projects.filter((project) => project.category === "school");

  return (
    <article>
      <h1>Selected Projects</h1>
      <h2>Work</h2>
      <div>All of these were internally funded research projects at JHU/APL in which I was the principal investigator.</div>
      <ProjectList items={work} />
      <h2>School</h2>
      <ProjectList items={school} />
    </article>
  );
}
