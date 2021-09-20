import Link from "next/link";
import { FC } from "react";
import slugify from "slugify";

import { IExperience } from "../types/Experience";

interface ExpProps {
  exp: IExperience[];
}

const Experience: FC<ExpProps> = ({ exp }) => (
  <div className="experience">
    <h3>Experiences</h3>
    {exp.map((e) => (
      <>
        <div key={slugify(e.company.name)} className="experience__company">
          <span className="experience__company--title">{e.jobTitle}</span> @
          <br />
          <span className="experience__company--section">Company:</span>{" "}
          {e.company.name}, {e.company.city} - {e.company.country}
          <br />
          <span className="experience__company--section">From: </span>
          {e.startDate}{" "}
          <span className="experience__company--section">to:</span> {e.endDate}
          <br />
          <span className="experience__company--section">Achievements:</span>
          {e.achievements.map((a) => (
            <>
              <br />
              {`+ ${a}`}
            </>
          ))}
          <br />
          <span className="experience__company--section">Languages: </span>
          {e.progLanguages.join(", ")}
          <br />
          <span className="experience__company--section">Tools: </span>
          {e.tools.join(", ")}
          <br />
          {e.published.length > 0 && (
            <>
              <span className="experience__company--section">Published: </span>
              {e.published.map((p) => (
                <>
                  <Link href={`${p.url}`} passHref>
                    <a
                      className="experience__company--link"
                      href={`${p.url}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {`${p.resource}`}
                    </a>
                  </Link>{" "}
                </>
              ))}
            </>
          )}
        </div>
        <hr />
      </>
    ))}
  </div>
);

export default Experience;
