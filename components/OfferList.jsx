import styles from "../styles/cakeList.module.css";
import OfferCard from "./OfferCard";

const offerlist = [
  {
    caketype: "Wedding cakes",
    percentage: "20 %",
    startdate: "Aug 12",
    enddate: "Aug 16",
    img: "/img/Custom cakes/Wedding Cakes/cake (1).jpeg",
  },
  {
    caketype: "All cakes",
    percentage: "10 %",
    startdate: "Aug 12",
    enddate: "Aug 16",
    img: "/img/Main Cakes/Choco Ferrero Cake.avif",
  },
  {
    caketype: "Theme cakes",
    percentage: "15 %",
    startdate: "Aug 12",
    enddate: "Aug 16",
    img: "/img/Custom cakes/Theme Cakes/cake (5).jpg",
  },
];

const OfferList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title} id="menu">
        Offer Zone
      </h1>
      <p className={styles.desc}></p>
      <div className={styles.wrapper}>
        {offerlist.map((cake) => (
          <OfferCard key={cake._id} cake={cake} />
        ))}
      </div>
    </div>
  );
};

export default OfferList;
