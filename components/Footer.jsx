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
            <Link href="/" passHref><a className={styles.logo}>Christy Cakes</a></Link>
            <p>We make best Home made cakes</p>
          </h2>
        </div>


        <div className={styles.card}>
          <h1 className={styles.title}>Contact Info</h1>

          <p className={styles.text}>

            <p className={styles.text}>
              <i class="fa fa-map-marker" aria-hidden="true"></i>        2/6, Raja nagar,
              Rasampalayam
              Erode<br></br>
              638107
            </p>

          </p>


          <p className={styles.text}>
            <p className={styles.text}> </p>
            <p>


              <p className={styles.text}>  <i className="fa fa-envelope" aria-hidden="true"></i>  dovzippi21@gmail.com </p>
            </p>
          </p>
<<<<<<< HEAD

          <p>
            <p className={styles.text}><i class="fa fa-phone" aria-hidden="true"></i>+91 63819 25745</p>
          </p>
          <div className={styles.share}>

            <a href="#" class="fab fa-facebook"></a>
            <a href="#" class="fab fa-youtube"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-whatsapp"></a>

          </div>
=======
          <h2 className={styles.title}>Email</h2>
          <p className={styles.text}></p>
          <p className={styles.text}>dovzippi21@gmail.com</p>
          <h1 className={styles.title}>WhatsApp</h1>
          <p className={styles.text}>+91 63819 25745</p>
>>>>>>> d15c09552f1f8f41d107ecad9d4b9043c0f895bf
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
          <p className={styles.text}>Sign up for our mailing list to get latest updates and offers</p>
          <form method="get">
            <div className={styles.inputgrp}>
              <input className={styles.forminput} name="subscribe" type="email" placeholder="Email Address" />
<span>
              <button type="submit" name="submit-mail" className={styles.btn}>Submit</button>
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
