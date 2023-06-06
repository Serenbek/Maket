import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link className={styles.links} to="/counterPage">Counter</Link>
        <Link className={styles.links} to="/">Home page</Link>
      </div>
    </div>
  );
};

export default Navbar;
