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
  return (
    <div className={styles.container}>
      <Head>
        <title>Christy Cakes</title>
        <meta name="description" content="Best cake shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
      <Featured />
      {/* <section class="cta" data-aos="fade-up" data-aos-delay="0">
        <div class="container">
            <div class="cta-content d-xl-flex align-items-center justify-content-around text-center text-xl-left">
                <div class="content" data-aos="fade-right" data-aos-delay="200">
                    <h2>CUSTOM YOUR OWN CAKES</h2>
                    <p>Create a cake all your own!Add your choice of fillings,frostings<br> and decorations to customize your perfet cake!!  </p>
                </div>
                <div class="subscribe-btn" data-aos="fade-left" data-aos-delay="400" data-aos-offset="0">
                    <a href="#" class="btn btn-primary">Design Cake</a>
                </div>
            </div>
        </div>
    </section> */}
      <div className={styles.contain}>
        <div className={styles.contain2}></div>
        <div>
        <h1>CUSTOM YOUR OWN CAKES</h1>
        <p>Create a cake all your own!Add your choice of fillings,frostings <br/> and decorations to customize your perfet cake!!  </p>
        </div>
        <div><button className={styles.btn}>DESIGN CAKES</button></div>
      </div>
      {admin==true?<AddButton setClose={setClose} />:  null}
      <CakeList cakeList={cakeList} />
      {!close && <Add setClose={setClose} />}
      <Offers></Offers>
    </div>
  );
}

