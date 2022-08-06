import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Featured from "../components/Featured";
import CakeList from "../components/CakeList";
import Offers from "../components/Offers";
import styles from "../styles/Home.module.css";
import Special from "../components/Special";

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      cakeList: res.data,
      admin,
    },
  };
};

export default function Home({ cakeList, admin }) {
  const [close, setClose] = useState(true);
  console.log(admin);
  return (
    <div className={styles.container}>
      <Head>
        <title>Christy Cakes</title>
        <meta name="description" content="Best cake shop in town" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>

      <Featured />

      <div className={styles.contain}>
        <div className={styles.contain2}></div>
        <div>
          <h1>CUSTOM YOUR OWN CAKES</h1>
          <p>
            Create a cake all your own!Add your choice of fillings,frostings{" "}
            <br /> and decorations to customize your perfet cake!!{" "}
          </p>
        </div>
        <div>
          <button className={styles.btn}>DESIGN CAKES</button>
        </div>
      </div>

      {admin == true ? <AddButton setClose={setClose} /> : null}
      <CakeList cakeList={cakeList} />
      {!close && <Add setClose={setClose} />}

      <Offers></Offers>
    </div>
  );
}
