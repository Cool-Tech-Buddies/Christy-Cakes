import styles from "../styles/cakeList.module.css";
import CakeCard from "./CakeCard";

const CakeList = ({ cakeList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title} id="menu">
        OUR DELICIOUS
      </h1>
      <p className={styles.desc}></p>
      <div className={styles.wrapper}>
        {cakeList.map((cake) => (
          <CakeCard key={cake._id} cake={cake} />
        ))}
      </div>
    </div>
  );
};

export default CakeList;
