import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div id="footer" className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/profilecake.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            We make best Home made cakes
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Contact Us</h1>
          <h2 className={styles.title}>Address</h2>
          <p className={styles.text}>
            <pre>
          2/6, Raja nagar
          Rasampalayam 
          Erode 
          638107
          </pre>
           
          </p>
          <h2 className={styles.title}>Email</h2>
          <p className={styles.text}>dovzippi21@gmail.com</p>
          <h1 className={styles.title}>WhatsApp</h1>
          <p className={styles.text}>+91 63819 25745</p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 10:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 11:00 – 6:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
