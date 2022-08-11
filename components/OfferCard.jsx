import Image from "next/image";
import styles from "../styles/cakeCard.module.css";
import Link from "next/link";

const OfferCard = ({ cake }) => {
  return (
    <div className={styles.container} id="menu">
      <div className={styles.cardtop}>
        <Image src={cake.img} alt="" width="500" height="500" />
      </div>
      <h1 className={styles.title}>Special Offer Now </h1>
      <span className={styles.price}>
        {cake.percentage} on {cake.caketype}
      </span>
      <span className={styles.price}>{cake.startdate}</span> to
      <span className={styles.price}>{cake.enddate}</span>
      <Link href="/#menu" passHref>
        <button className={styles.btn}>Order Now</button>
      </Link>
    </div>
  );
};

export default OfferCard;
