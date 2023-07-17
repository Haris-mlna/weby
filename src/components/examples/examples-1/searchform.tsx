"use client";

import "bootstrap/dist/css/bootstrap.css";

import Image from "next/image";
import styles from "./searchform.module.css";

import { FC, useState, useEffect } from "react";

const Searchform: FC = () => {
  const [isOn, setIsOn] = useState(1);
  const [brand, setBrand] = useState(0);

  const chooseBrand = (value: number) => {
    setBrand(value);
    console.log(brand);
  };

  const fire = '/assets/examples/examples-1/fire.png'
  const thumbs = '/assets/examples/examples-1/thumbs.png'
  const video = '/assets/examples/examples-1/video.png'
  const check = '/assets/examples/examples-1/check.png'

  return (
    <>
      <div className={styles.searchformContainer}>
        <div className={styles.buttonContainer}>
          <button
            className={isOn == 1 ? styles.isOn : ""}
            onClick={() => {
              setIsOn(1);
            }}
          >
            New Cars
          </button>
          <button
            className={isOn == 2 ? styles.isOn : ""}
            onClick={() => {
              setIsOn(2);
            }}
          >
            Used Cars
          </button>
          <button
            className={isOn == 3 ? styles.isOn : ""}
            onClick={() => {
              setIsOn(3);
            }}
          >
            Motorcycles
          </button>
        </div>
        <form className={styles.searchform} action="">
          <div className={styles.title}>
            {isOn == 1 ? "Find New Cars" : ""}
            {isOn == 2 ? "Find Used Cars" : ""}
            {isOn == 3 ? "Find Motorcycles" : ""}
          </div>
          <div className={styles.topside}>
            <div className={styles.tplt}>
              <select
                className={`form-select ${styles.brand}`}
                aria-label="Default select example"
              >
                <option selected disabled hidden>
                  Brand
                </option>
                <option
                  value="1"
                  onClick={() => {
                    chooseBrand(1);
                  }}
                >
                  Volvo
                </option>
                <option
                  value="2"
                  onClick={() => {
                    chooseBrand(2);
                  }}
                >
                  Honda
                </option>
                <option
                  value="3"
                  onClick={() => {
                    chooseBrand(3);
                  }}
                >
                  Tesla
                </option>
              </select>
              <select
                className={`form-select ${styles.model}`}
                aria-label="Default select example"
                disabled={brand === 0 ? true : false}
              >
                <option selected disabled hidden>
                  Model
                </option>
              </select>
            </div>
            <div className={styles.tprt}>
              <select
                className={`form-select ${styles.brand}`}
                aria-label="Default select example"
              >
                <option selected disabled hidden>
                  All State
                </option>
                <option value="1">DKI JAKARTA</option>
                <option value="2">Jawa Barat</option>
                <option value="3">Jawa Tengah</option>
                <option value="4">Jawa Timur</option>
                <option value="5">Nanggroe Aceh Darussalam</option>
                <option value="6">Sumatera Utara</option>
                <option value="7">Sumatera Selatan</option>
                <option value="8">Sumatera Barat</option>
              </select>

              <input type="text" placeholder="Price" />
            </div>
          </div>
          <div className={styles.botside}>
            <div className={styles.inputContainer}>
              <div
                className={`input-group input-group-sm mb-3 ${styles.inputText}`}
              >
                <input
                  type="text"
                  className="form-control"
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="What are you looking for?"
                />
              </div>
            </div>
            <div className={styles.submitContainer}>
              <button className={styles.submit}>submit</button>
            </div>
          </div>
          <div className={styles.adv}>
            <a href="#">Advance Search {`>>`}</a>
          </div>
          <div className={styles.QS}>
            <span className={styles.titleQS}>
              Quick Search for :
            </span>
            <div className={styles.buttonQS}>
                <button>
                  <Image className={styles.buttonImage} src={fire} alt="test" width={512} height={512}></Image>
                  Hot Deals</button>
                <button>
                  <Image className={styles.buttonImage} src={video} alt="test" width={512} height={512}></Image>
                  Video Listings</button>
                <button>
                  <Image className={styles.buttonImage} src={thumbs} alt="test" width={512} height={512}></Image>
                  Trusted Dealer</button>
                <button>
                  <Image className={styles.buttonImages} src={check} alt="test" width={512} height={512}></Image>
                  Warranty</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Searchform;
