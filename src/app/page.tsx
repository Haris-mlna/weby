"use client";

import { useEffect, FC } from "react";

import styles from "./page.module.css";
import Image from "next/image";
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

  const weby = "/assets/images/weby-1.png";

  return (
    <>
      <Navbar pageNumber={0} />
      <ChatButton />
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
          <div className={styles.cardContainer}>
            <div
              className={styles.card}
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className={styles.cardImageContainer}>
                <h2>Weby</h2>
              </div>
              <div className={styles.cardTextContainer}>
                <h3>Website Design</h3>
                <p>
                  {" "}
                  Our experienced designers will work closely with you to create
                  a visually appealing and user-friendly website. We take into
                  account your brand identity, target audience, and business
                  goals to ensure the design perfectly aligns with your vision.
                  From selecting color schemes and fonts to creating engaging
                  layouts, our design team will bring your website to life.
                </p>
              </div>
            </div>
            <div
              className={styles.card}
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div className={styles.cardImageContainer}>
                <h2>
                  <span>{`</>`}</span>
                </h2>
              </div>
              <div className={styles.cardTextContainer}>
                <h3>Development and Coding</h3>
                <p>
                  Our skilled developers will handle all the technical aspects
                  of building your website. We use the latest technologies and
                  coding standards to ensure your site is fast, responsive, and
                  optimized for search engines. From creating custom features
                  and functionalities to integrating third-party tools, we'll
                  ensure your website functions seamlessly.
                </p>
              </div>
            </div>
            <div
              className={styles.card}
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className={styles.cardImageContainer}>
                <h2>Content</h2>
              </div>
              <div className={styles.cardTextContainer}>
                <h3>Content Creation</h3>
                <p>
                  Compelling content is crucial for engaging your website
                  visitors. Our team can assist you in crafting persuasive copy,
                  attention-grabbing images, and captivating videos. We'll help
                  you showcase your products or services in the best possible
                  light, conveying your brand's unique value proposition and
                  attracting your target audience.
                </p>
              </div>
            </div>
            <div
              className={styles.card}
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div className={styles.cardImageContainer}>
                <h2>E-commerce</h2>
              </div>
              <div className={styles.cardTextContainer}>
                <h3>E-commerce Solutions</h3>
                <p>
                  If you're looking to sell products or services online, we can
                  help you set up a robust e-commerce system. Our experts will
                  integrate secure and user-friendly shopping cart
                  functionality, implement product listings with high-quality
                  images and descriptions, and set up secure payment gateways.
                  With our e-commerce solutions, you can efficiently manage and
                  grow your online store.
                </p>
              </div>
            </div>
            <div
              className={styles.card}
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className={styles.cardImageContainer}>
                <h2>Mobile </h2>
              </div>
              <div className={styles.cardTextContainer}>
                <h3>Mobile Optimization</h3>
                <p>
                  With the increasing number of users accessing websites on
                  mobile devices, it's essential to have a mobile-friendly
                  website. Our team will optimize your site to ensure it looks
                  great and performs flawlessly on smartphones and tablets.
                  We'll ensure responsive design, fast loading times, and
                  intuitive navigation, providing a seamless user experience
                  across all devices.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.project}>
          <div className={styles.webyImageContainer}>
            <div className={styles.layer}>
              <h2>Weby</h2>
            </div>
            <Image src={weby} alt={"weby"} width={3200} height={1800} />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
