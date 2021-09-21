import { FC } from "react";
import Image from "next/image";

const Contact: FC = () => (
  <div className="contact">
    <div className="contact__profile">
      <Image
        alt="profile image"
        className="contact__profile--img"
        src="/imgs/profile.jpg"
        layout="fill"
      />
    </div>
    <div className="contact__summary">
      <div className="contact__summary--title">👋 Hello</div>
    </div>
    <div className="contact__summary--content">
      <p>
        👨‍🎓 Graduate both in Electronics Engineering and Industrial Informatics
        Engineering, I am deeply passionate about how we can leverage technology
        through software, by improving existing products or by creating new
        solutions.
      </p>
      <p>
        💼 I have been working with the MERN stack for a few years. Recently, I
        tackled some challenging projects using different Back End languages and
        DevOps. And currently, I am responsible for defining infrastructure, SW
        architecture, lead interns, DevOps and coding.
      </p>
      <p>
        🏔 I thoroughly enjoy mountaineering which helped me overcome my fear of
        heights while building strong team management skills, and it keeps my
        adrenaline levels high.
      </p>
    </div>
    <div className="contact__social">
      <a href="https://github.com/Kmelow/" target="_blank" rel="noreferrer">
        <i className="contact__social--icon fab fa-github-square fa-3x" />{" "}
      </a>
      <a
        href="https://www.linkedin.com/in/camilo-coelho-ab844732/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="contact__social--icon fab fa-linkedin fa-3x" />
      </a>
    </div>
  </div>
);

export default Contact;
