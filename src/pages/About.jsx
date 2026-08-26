import { site } from "../data/site.js";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <article className="about">
      <img
        className="portrait"
        src={site.photo}
        alt={`Portrait of ${site.name}`}
      />
      <div>
        <h1>{site.name}</h1>
        <p className="subtitle">{site.title}</p>
          <p>
            I am an NLP Research Scientist / Software Engineer with experience in applied AI and a focus in knowledge representation within LLMs. 
            I recently graduated with my <a href='https://gucl.georgetown.edu/' target='_blank' rel='noopener noreferrer'>Master's in Computational Linguistics from Georgetown University </a> 
            and have 5 years of research experience as a U.S. government contractor for a <a href='https://www.jhuapl.edu/' target='_blank' rel='noopener noreferrer'>UARC</a>. 
            I am interested in making safer LLMs and expanding language technologies to speakers of all languages.

          </p>
          <p>
            In my free time I love to be in the <NavLink to="/outdoors">outdoors</NavLink>, listening to <a href="https://open.spotify.com/user/erafkin?si=6a8e209ce35f4e81" target="_blank" rel="noopener noreferrer">music</a>, and cheering for my favorite <NavLink to="/sports">teams</NavLink>.
          </p>
        {/* {site.bio.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))} */}
        <p className="links">
          {site.links.map((link, index) => (
            <span key={link.href}>
              {index > 0 && " · "}
              <a href={link.href}>{link.label}</a>
            </span>
          ))}
        </p>
      </div>
    </article>
  );
}
