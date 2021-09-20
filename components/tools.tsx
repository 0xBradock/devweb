import { FC } from "react";
import slugify from "slugify";

const Tools: FC = () => {
  const comfortable = [
    "JavaScript",
    "Go",
    "NextJS",
    "ReactJS",
    "NodeJS",
    "Express",
    "MongoDB",
    "DigitalOcean",
    "Git",
    "Linux",
    "Agile",
  ];

  const familiar = [
    "Python3",
    "Bash",
    "SQLite3",
    "MaterialUI",
    "Sass",
    "Jenkins",
    "Docker",
    "OpenAPI v3",
    "C",
    "C++",
  ];

  const some = ["TypeScript", "RabbitMQ", "Kubernetes", "Jinja2"];

  return (
    <div className="tools">
      <h3>Tools and Languages</h3>
      <div className="tools__level">
        <span className="tools__level--title">I am comfortable with:</span>
        <p>{comfortable.join(", ")}</p>
        <p>
          {comfortable.map((tool) => (
            <img
              className="tools__level--icon"
              key={`c-${slugify(tool, { lower: true })}`}
              src={`/icons/${slugify(tool, { lower: true })}.svg`}
              alt={`icon ${tool}`}
              height="30px"
              width="30px"
            />
          ))}
        </p>
        <span className="tools__level--title">I am familiar with:</span>
        <p>{familiar.join(", ")}</p>
        <p>
          {familiar.map((tool) => (
            <img
              className="tools__level--icon"
              key={`f-${slugify(tool, { lower: true })}`}
              src={`/icons/${slugify(tool, { lower: true })}.svg`}
              alt={`icon ${tool}`}
              height="30px"
              width="30px"
            />
          ))}
        </p>
        <span className="tools__level--title">I have some knowledge:</span>
        <p>{some.join(", ")}</p>
        <p>
          {some.map((tool) => (
            <img
              className="tools__level--icon"
              key={`s-${slugify(tool, { lower: true })}`}
              src={`/icons/${slugify(tool, { lower: true })}.svg`}
              alt={`icon ${tool}`}
              height="30px"
              width="30px"
            />
          ))}
        </p>
      </div>
    </div>
  );
};

export default Tools;
