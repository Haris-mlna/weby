'use client'

import styles from "./navbar.module.css";

import { FC, useState } from "react";

interface NavbarProps {
  pageNumber: number;
}

const Navbar: FC<NavbarProps> = ({ pageNumber }) => {
  const [pages, setPages] = useState(pageNumber);

  const navigateTo = (link : string) => {
   window.location.href = link
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Weby</div>
      <ul className={styles.navigationHero}>
        <li
          className={pages === 0 ? styles.underlined : styles.normal}
          onClick={() => navigateTo('/')}
        >
          Home
        </li>
        <li
          className={pages === 1 ? styles.underlined : styles.normal}
          onClick={() => navigateTo('/templates')}
        >
          Templates
        </li>
        <li
          className={pages === 2 ? styles.underlined : styles.normal}
          onClick={() => navigateTo('/examples')}
        >
          Examples
        </li>
        <li
          className={pages === 3 ? styles.underlined : styles.normal}
          onClick={() => navigateTo('/services')}
        >
          Services
        </li>
        <li className={pages === 4 ? styles.underlined : styles.normal}
          onClick={() => navigateTo('/about')}
        >
          About
        </li>
      </ul>
      <div className={styles.menu}>menu</div>
    </nav>
  );
};

export default Navbar;
