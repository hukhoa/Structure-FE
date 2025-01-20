import { Suspense, lazy } from "react";
import ErrorBoundary from "../Error/Error";
import classNames from "classnames/bind";
import styles from "./Home.module.css";
const cx = classNames.bind(styles);

const About = lazy(() => {
  // throw new Error("Intentional error in lazy loaded component");
  return import("../About/About");
});

function Home() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <p className={cx("title", "color-bg", "text-blue-500")}>Home page</p>
        <About />
      </Suspense>
    </ErrorBoundary>
  );
}

export default Home;
