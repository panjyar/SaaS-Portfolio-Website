"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const offices = [
  {
    title: "Headquarters",
    location: "Bangalore, India",
    desc: "Reflecting dedication to progress and innovation in a rapidly evolving global market.",
    image: "/images/hq-office.jpg",
    alt: "Headquarters office building in Bangalore, India",
  },
  {
    title: "Other Offices",
    location: "USA & Japan",
    desc: "From Lake Zurich in the United States to Kawasaki in Japan, expanding presence and spreading innovation globally.",
    image: "/images/dallas-office.jpg",
    alt: "Office buildings in USA and Japan",
  },
  {
    title: "Founded",
    location: "2018",
    desc: "Since 2018, on a mission to transform workplace safety while championing a greener, low-carbon future.",
    image: "/images/dallas-office.jpg",
    alt: "Founded in 2018 - workplace safety and green mission",
  },
];

export default function OfficesSection() {
  return (
    <section
      className="offices-section"
      aria-label="Company offices information"
    >
      {offices.map((office, index) => (
        <motion.article
          key={office.title}
          className={`office-card ${index % 2 === 1 ? "reverse" : ""}`}
          initial={{ opacity: 0, x: index % 2 === 1 ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: index * 0.4 }}
          viewport={{ once: false, amount: 0.5 }}
          aria-labelledby={`office-title-${index}`}
        >
          <div className="office-text-content">
            <h3 id={`office-title-${index}`} className="office-title">
              {office.title}
            </h3>
            <h4 className="office-location">{office.location}</h4>
            <p className="office-desc">{office.desc}</p>
          </div>
          <div className="office-image-wrapper">
            <Image
              src={office.image}
              alt={office.alt}
              className="office-image"
              width={600}
              height={400}
              loading={index === 0 ? undefined : "lazy"}
              priority={index === 0}
            />
          </div>
        </motion.article>
      ))}
    </section>
  );
}
