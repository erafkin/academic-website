import { site } from "../data/site.js";

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
        {site.bio.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
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
