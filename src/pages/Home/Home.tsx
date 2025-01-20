import classNames from "classnames/bind";
import styles from "./Home.module.css";
const cx = classNames.bind(styles);

function Home() {
  return <p className={cx("title", "color-bg", "text-blue-500")}>Home page</p>;
}

export default Home;
