import Image from "next/image";
import styles from "../styles/cakeCard.module.css";
import Link from "next/link";

const CakeCard = ({ cake }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardtop}>
        <Image src={cake.img} alt="" width="500" height="500" />
      </div>
      <h1 className={styles.title}>{cake.title}</h1>
      <p className={styles.desc}>{cake.desc}</p>

      <span className={styles.price}>1Kg Rs.{cake.prices[0]}</span>
      <Link href={`/product/${cake._id}`} passHref>
        <button className={styles.btn}>View more</button>
      </Link>
    </div>
  );
};

export default CakeCard;
