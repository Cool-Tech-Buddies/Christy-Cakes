import React from "react";
import Link from "next/link";
import styles from "../../styles/cakeCard.module.css";
import Special from "../../components/Special";
import Image from "next/image";

const index = () => {
  const images = [
    {
      name: "Kids Birthday Cakes",
      src: "/img/Custom cakes/Kids Cakes/tom-cake-1545.jpg",
      link: "kidsBirthday",
    },
    {
      name: "Wedding cakes",
      src: "/img/Custom cakes/Wedding Cakes/cake (2).jpeg",
      link: "WeddingCake",
    },
    {
      name: "Theme cakes",
      src: "/img/Custom cakes/Theme Cakes/cake (1).jpeg ",
      link: "ThemeCake",
    },
    {
      name: "Photo cakes",
      src: "/img/Custom cakes/Photo cakes/cake (1).jpg",
      link: "PhotoCake",
    },
    {
      name: "Occasional cakes",
      src: "/img/Custom cakes/Occasional Cakes/cake (5).jpg",
      link: "OccasionalCakes",
    },
    {
      name: "Celebration cakes",
      src: "/img/Custom cakes/Celebration cakes/cake (7).jpg",
      link: "CelebrationCakes",
    },
  ];
  return (
    <div>
      <Special
        img="/img/customer/customer-1.jpg"
        head="Custom cakes"
        para=" Our core focus is on Design & Taste and our aim is to always give you the best cake. Distinct style & unique techniques
         are used to handcraft a beautiful cake,We offer customized cakes under  the catogries of Kids cake, Wedding cake, Occasional cake, Celebration cakes, Theme cakes and Photo cakes "
      ></Special>
      <h1 className={styles.titlecustom} id="custom">
        Our Customized cakes
      </h1>
      <div className={styles.wrapper}>
        {images.map((img, i) => (
          <div key={i} className={styles.container}>
            <div className={styles.cardtop}>
              <Image src={img.src} alt="" width="500" height="500" />
            </div>
            <h1 className={styles.title}>{img.name}</h1>
            {console.log("link")}
            {console.log(`/customcakes/${img.link}`)}
            <Link href={`/customcakes/${img.link}`} passHref>
              <button className={styles.btn}>View more</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
