import { FC } from "react";

const Footer: FC = () => (
  <div className="footer">
    <div className="footer__credits">
      <p>
        Made by <i className="footer__credits--icon fab fa-sm fa-grav" /> for
        the <i className="footer__credits--icon fas fa-sm fa-globe-americas" />{" "}
        with <i className="footer__credits--icon fas fa-sm fa-heart" />,{" "}
        <i className="footer__credits--icon fab fa-sm fa-itunes-note" /> and
        lots of <i className="footer__credits--icon fas fa-sm fa-coffee" />
      </p>
    </div>
  </div>
);

export default Footer;
