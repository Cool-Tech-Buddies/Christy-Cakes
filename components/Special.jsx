import React from "react";
import Image from "next/image";
import styles from "../styles/Special.module.css";
const Special = (props) => {
  return (
    <div>
      <div className={styles.sectionhero}>
        <div className={styles.hero}>
          <div className={styles.herotextbox}>
            <h1 className={styles.headingprimary}>{props.head}</h1>
            <p className={styles.herodescription}>{props.para}</p>
            <span className={styles.btn}> Lets Explore </span>
            <div className={styles.deliveredmeals}>
              <div className={styles.deliveredimgs}>
                <Image
                  src={props.img}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
                <img src="img/customers/customer-1.jpg" alt="Customer photo" />
                <img src="img/customers/customer-2.jpg" alt="Customer photo" />
                <img src="img/customers/customer-3.jpg" alt="Customer photo" />
                <img src="img/customers/customer-4.jpg" alt="Customer photo" />
                <img src="img/customers/customer-5.jpg" alt="Customer photo" />
                <img src="img/customers/customer-6.jpg" alt="Customer photo" />
              </div>
              <p className={styles.deliveredtext}>
                <span>150+</span> Cakes delivered last year!
              </p>
            </div>
          </div>
          <div>
            <img
              src="/img/custom.png"
              layout="fill"
              objectFit="contain"
              alt="custom cakes"
              className={styles.heroimgbox}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special;
