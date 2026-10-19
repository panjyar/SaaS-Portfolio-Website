"use client";

import React, { useEffect, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const images = [
  "/images/career1.jpg",
  "/images/career2.jpg",
  "/images/career3.jpg",
  "/images/career4.jpg",
  "/images/career5.jpg"
];
const variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 }
};
const Hero: React.FC = React.memo(() => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);
  const galleryItems = useMemo(() =>
    images.map((img, idx) => {
      let sizeClass = "";
      if (idx === 0 || idx === 4) sizeClass = "gallery-item--small";
      else if (idx === 1 || idx === 3) sizeClass = "gallery-item--medium";
      else if (idx === 2) sizeClass = "gallery-item--large";
      const imageProps =
        idx === 2
          ? { priority: true }
          : { loading: "lazy" as const };
      return (
        <motion.div
          className={`careers-section__gallery-item ${sizeClass}`}
          key={img}
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{
            delay: idx * 0.13,
            duration: 0.5,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
        >
          <Image
            src={img}
            alt={`Team and workspace illustration ${idx + 1}`}
            fill
            sizes="(max-width: 600px) 90vw, (max-width: 1200px) 33vw, 20vw"
            className="careers-section__image"
            style={{ objectFit: "cover" }}
            {...imageProps}
          />
        </motion.div>
      );
    })
  , [controls]);
  return (
    <section className="careers-section" aria-labelledby="careers-section-title">
      <div className="careers-section__inner">
        <div className="careers-section__intro">
          <span className="careers-section__tagline">Be one part of us</span>
          <h2 id="careers-section-title" className="careers-section__headline">
            <span>
              AI-powered innovation for a safer workplace<br />
              and a more sustainable industrial world
            </span>
          </h2>
        </div>
        <div className="careers-section__gallery" ref={ref}>
          {galleryItems}
        </div>
        <p className="careers-section__desc">
          As a team of battle-tested YatraGen and Darshan AI and DarshanAI Ninjas, with years of
          experience driving workplace safety, decarbonization, and energy
          optimization for global industries, we’re always on the lookout for
          exceptional developers, data scientists, and innovators.
        </p>
        <div>
          <a className="careers-section__cta" href="#open-positions">
            CHECK OPEN POSITIONS
          </a>
        </div>
      </div>
    </section>
  );
});
Hero.displayName = "Hero";
export default Hero;
