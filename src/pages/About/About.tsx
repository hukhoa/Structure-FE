import classNames from "classnames/bind";
import styles from "./About.module.css";
const cx = classNames.bind(styles);

function About() {
  return <p className={cx("title", "color-bg")}>About page</p>;
}

export default About;
