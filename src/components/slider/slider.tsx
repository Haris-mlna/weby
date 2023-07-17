"use client";

import { CSSProperties, FC, useState, useEffect } from "react";

import React from "react";
import styles from "./slider.module.css";
import Image from "next/image";

interface imageObject {
  src: string;
  alt: string;
  width: number;
  height: number;
  id: number;
}

interface componentsProps {
  img: Array<imageObject> | null;
}

const Slider: FC<componentsProps> = ({ img }) => {
  const [image, setImage] = useState(img);
  const [sliderIndex, setSliderIndex] = useState(0);

  const maxLimit = img ? Math.max(...img.map((x) => x.id - 1)) : 0;
  const minLimit = 0;

  const handleSlider = (direction: string) => {
    if (maxLimit === sliderIndex) {
      setSliderIndex(minLimit);
    } else if (direction === "right") {
      setSliderIndex((prev) => prev + 1);
    } else {
      setSliderIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (maxLimit === sliderIndex) {
        setSliderIndex(minLimit);
      } else {
        setSliderIndex((prev) => prev + 1);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [sliderIndex]);

  if (img === null) {
    // Handle the case when img is null
    return <div>No images available</div>;
  }

  return (
    <>
      <div
        className={styles.Carousel}
        style={{ "--slider-index": sliderIndex } as CSSProperties}
      >
        <div className={styles.sliderContainer}>
          {image?.map((x) => (
            <>
              <div className={styles.slider} key={x.id}>
                <div className={styles.overlay}/>
                <Image
                  src={x.src}
                  alt={x.alt}
                  width={x.width}
                  height={x.height}
                  className={styles.image}
                  priority
                />
              </div>
            </>
          ))}
        </div>
        <div className={styles.toggleContainer}>
          <button
            className={styles.toggle}
            onClick={() => {
              handleSlider("left");
            }}
          ></button>
          <button
            className={styles.toggle}
            onClick={() => {
              handleSlider("right");
            }}
          ></button>
        </div>
      </div>
    </>
  );
};

export default Slider;
