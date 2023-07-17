import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.topside}>
          <div className={styles.tl}>LOGO</div>
          <div className={styles.tr}>
            <button>sign in</button>
            <p>or</p>
            <Link href=''>register</Link>
          </div>
        </div>
        <div className={styles.botside}>
          <ul>
            <li className={styles.instant}>Instant Sale</li>
            <li>Car For Sale</li>
            <li>Category</li>
            <li>Auto News</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
