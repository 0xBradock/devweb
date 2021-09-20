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
      {/* Graduate in Electrical Engineering and a Master's degree in Computer
      Science, I am interested in Programming and C Programming Language.
      
      My professional experience is with hardware development, systems integration,
      software design and system-on-chip for electronic devices.
      
      In my personal activities, I like to spend time with sport and reading books.
      
      In my personal life I also enjoy dancing, cooking and outdoor activities. It
      helps me to see the world with new perspectives */}
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
        🎢 In my personal life, I also enjoy mountaineering, cooking and
        travelling. It helps me to see the world with new perspectives and keeps
        my adrenaline levels high.
      </p>
    </div>
    <div className="contact__social">
      <i className="contact__social--icon fab fa-github-square fa-3x" />{" "}
      {/* <i className="contact__social--icon fab fa-github fa-3x" />{" "} */}
      <i className="contact__social--icon fab fa-linkedin fa-3x" />{" "}
      {/* <i className="contact__social--icon fab fa-linkedin-in fa-3x" /> */}
    </div>
  </div>
);

export default Contact;
