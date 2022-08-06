import React from "react";
import Image from "next/image";
import styles from "../styles/Customtop.module.css";
const Custom = ({ TitleName }) => {
  const images = [
    {
      name: "Kids Birthday Cakes",
      src: "/img/Custom cakes/Kids Cakes/cake2.jpg",
      description:
        "Looking for a cool cake for your child’s next birthday? Be the talk of the town, with a one-of-a-kind specialty cake from the Christy Cakes Specializing in 3D cakes, sculptured cakes, character cakes, and cupcakes, you’re sure to find the perfect dessert for your party! Whether you’re looking for a kids birthday cake, baby shower cake, or grooms cake, you can count on The Christy Cakes, for a cake that will wow your guests. The sky is the limit when ordering your party cake and our goal is to make your cake as special as your day. Contact us today to get your party started!",
      link: "kidsBirthday",
    },
    {
      name: "Wedding cakes",
      src: "/img/Custom cakes/Wedding Cakes/cake (1).jpeg",
      description:
        "Planning a wedding is hard work! We are to help organize every detail of your day, from the budget to day-of timeline and beyond.Order our Special wedding cakes",
      link: "WeddingCake",
    },
    {
      name: "Theme cakes",
      src: "/img/Custom cakes/Theme Cakes/cake (1).jpeg ",
      description: "",
      link: "ThemeCake",
    },
    {
      name: "Photo cakes",
      src: "/img/Custom cakes/Photo cakes/cake (1).jpg",
      description: "",
      link: "PhotoCake",
    },
    {
      name: "Occasional cakes",
      src: "/img/Custom cakes/Occasional Cakes/cake (5).jpg",
      description: "",
      link: "OccasionalCakes",
    },
    {
      name: "Celebration cakes",
      src: "/img/Custom cakes/Celebration cakes/cake (7).jpg",
      description: "",
      link: "CelebrationCakes",
    },
  ];
  const data = images.find((element) => element.link === TitleName);

  return (
    <div>
      <div className={styles.sectionhero}>
        <div className={styles.hero}>
          <div className={styles.herotextbox}>
            <h1 className={styles.headingprimary}>{data.name}</h1>
            <p className={styles.herodescription}>{data.description}</p>
            <a href="#cta" className={styles.btn}>
              Explore More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom;
