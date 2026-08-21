import { publications } from "../data/publications.js";

function Authors({ text }) {
  const parts = text.split(/(Emma(?: P\.)? Rafkin)/g);
  return parts.map((part, index) =>
    part.includes("Rafkin") ? <strong key={index}>{part}</strong> : part
  );
}

export default function Publications() {
  return (
    <article>
      <h1>Publications</h1>
      <ul className="item-list">
        {publications.map((paper) => (
          <li key={paper.title}>
            <h3>{paper.title}</h3>
            <p className="meta">
              <Authors text={paper.authors} />
            </p>
            <p className="meta">
              {paper.venue}, {paper.year}
            </p>
            {paper.links?.length > 0 && (
              <p className="links">
                {paper.links.map((link, index) => (
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
    </article>
  );
}
