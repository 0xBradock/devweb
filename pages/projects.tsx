import { FC } from "react";

import data from "../projects/data.json";
import Experience from "../components/experience";
import Tools from "../components/tools";

const Projects: FC = () => (
  <div className="projects">
    <div className="container">
      <div className="projects__tools">
        <Tools />
      </div>
      <div className="projects__experience">
        <Experience exp={data} />
      </div>
    </div>
  </div>
);
export default Projects;
