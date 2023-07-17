"use client";

import { useEffect, FC } from "react";

import styles from "./page.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Navbar from "@/components/navbar/navbar";
import ChatButton from "@/components/chat/chat";

const Home: FC = () => {
  // pages number = 0

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar pageNumber={0} />
      <ChatButton/>
      <header className={styles.header}>
        <h1 data-aos="fade-right" data-aos-duration="2000">
          Weby
        </h1>
        <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000">
          {` "Unleash the power of your business online and soar to new heights."`}
        </p>
        <button className={styles.buttonHero}>{`Let's Get Started`}</button>
      </header>
      <main>
        <div className={styles.slogan}>
          <h2>{`"Exquisite design breeds extraordinary business success."`}</h2>
        </div>
        <section className={styles.introductionContainer}>
          <div className={styles.introduction}>
            <h6>Struggling how to create a website for your business?</h6>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
