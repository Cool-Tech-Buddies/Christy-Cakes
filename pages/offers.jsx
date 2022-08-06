import React from "react";
import Link from "next/link";
import styles from "../styles/Offers.module.css";
import Special from "../components/Special";
import Image from "next/image";
const index = () => {
  const images = [
    {
      name: "Kids Birthday Cakes",
      src: "/img/Custom cakes/Kids Cakes/cake2.jpg",
      link: "kidsBirthday",
    },
    {
      name: "Wedding cakes",
      src: "/img/Custom cakes/Wedding Cakes/cake (1).jpeg",
      link: "WeddingCake",
    },
    {
      name: "Theme cakes",
      src: "/img/Custom cakes/Theme Cakes/cake (1).jpeg ",
      link: "ThemeCake",
    },
  ];
  return (
    <div>
      <Special
        img="/img/customer/customer-1.jpg"
        head="Offers"
        para=" asdfghjkl"
      ></Special>
      <h1 className={styles.titletext}>Our Customized cakes</h1>
      <div className={styles.wrapper}>
        {images.map((img, i) => (
          <div key={i} className={styles.container}>
            <div className={styles.cardtop}>
              <Image src={img.src} alt="" width="500" height="500" />
            </div>
            <h1 className={styles.title}>{img.name}</h1>

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
