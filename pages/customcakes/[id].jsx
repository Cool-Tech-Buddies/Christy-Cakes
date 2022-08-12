import React from "react";
import Link from "next/link";
import styles from "../../styles/cakeCard.module.css";
import axios from "axios";
import Image from "next/image";
import Custom from "../../components/custom";
export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/customcakes/${params.id}`
  );

  return {
    props: {
      cakeList: res.data,
      Title: params.id,
    },
  };
};
export default function Home({ cakeList, Title }) {
  return (
    <div id="custom">
      <Custom TitleName={Title}></Custom>
      <div className={styles.wrapper}>
        {cakeList.map((cakeList) => (
          <div className={styles.container} key={cakeList._id}>
            <div className={styles.cardtop}>
              <Image src={cakeList.img} alt="" width="500" height="500" />
            </div>
            <h1 className={styles.title}>{cakeList.title}</h1>

            <Link href={`/product/${cakeList._id}`} passHref>
              <button className={styles.btn}>View more</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
