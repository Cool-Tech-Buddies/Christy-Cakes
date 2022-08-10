import Image from "next/image";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <div id="footer" className={styles.container}>
      <div className={styles.item}>
        <div className={styles.item}>
          <Image src="/img/footer.jpg" objectFit="cover" layout="fill" alt="" />
        </div>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            <Link href="/" passHref>
              <a className={styles.logo}>Christy Cakes</a>
            </Link>
            <p>We make best Home made cakes</p>
          </h2>
        </div>

        <div className={styles.card}>
          <h1 className={styles.title}>Contact Info</h1>

          <p className={styles.text}>
            <p className={styles.text}>
              <i className="fa fa-map-marker" aria-hidden="true"></i> 2/6, Raja
              nagar, Rasampalayam Erode<br></br>
              638107
            </p>
          </p>

          <p className={styles.text}>
            <p className={styles.text}> </p>
            <p>
              <p className={styles.text}>
                {" "}
                <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                dovzippi21@gmail.com{" "}
              </p>
            </p>
          </p>

          <p>
            <p className={styles.text}>
              <i className="fa fa-phone" aria-hidden="true"></i>+91 63819 25745
            </p>
          </p>
          <div className={styles.share}>
            <a href="#" className="fab fa-facebook"></a>
            <a href="#" className="fab fa-youtube"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-whatsapp"></a>
          </div>
        </div>

        <div className={styles.card}>
          <h1 className={styles.title}>Working hours</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 9:00 – 10:00
          </p>
          <p className={styles.text}>
            SATURDAY & SUNDAY
            <br /> 11:00 – 6:00
          </p>
        </div>

        <div className={styles.card}>
          <h1 className={styles.title}>Subscribe us</h1>
          <p className={styles.text}>
            Sign up for our mailing list to get latest updates and offers
          </p>
          <form method="get">
            <div className={styles.inputgrp}>
              <input
                className={styles.forminput}
                name="subscribe"
                type="email"
                placeholder="Email Address"
              />
              <span>
                <a
                  type="submit"
                  name="submit-mail"
                  className={styles.btn}
                  href="mailto:mathi2002nagaraj@gmail.com"
                >
                  Submit
                </a>
              </span>
            </div>
          </form>
          <p className={styles.text}>We respect your privacy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
