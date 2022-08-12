import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import axios from "axios";
import { GetServerSideProps } from "next";
import Cookies from "js-cookie";

export default function Home() {
  const admin =
    Cookies.get() != null
      ? Cookies.get().token === "SWdw4CV||663Z{p3|ZXtP%0k6Ejj;F"
      : false;
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>+91 63819 25745</div>
        </div>
      </div>
      <div className={styles.item}>
        {admin == true ? (
          <ul className={styles.list}>
            <Link href="/" passHref>
              <li className={styles.listItem}>Homepage</li>
            </Link>

            <Link href="/admin/product" passHref>
              <a className={styles.listItem}>Products</a>
            </Link>
            <Link href="/admin/order" passHref>
              <a className={styles.listItem}>Orders</a>
            </Link>
            <Link href="/" passHref>
              <a className={styles.logo}>Christy Cakes</a>
            </Link>
            <Link href="/offers" passHref>
              <a className={styles.listItem}>Offers</a>
            </Link>
            <Link href="/blog" passHref>
              <a className={styles.listItem}>Report</a>
            </Link>
            <Link href="/admin/login" passHref>
              <a className={styles.listItem}>Logout</a>
            </Link>
          </ul>
        ) : (
          <ul className={styles.list}>
            <Link href="/" passHref>
              <li className={styles.listItem}>Homepage</li>
            </Link>

            <Link href="/#menu" passHref>
              <a className={styles.listItem}>Menu</a>
            </Link>
            <Link href="/customcakes" passHref>
              <a className={styles.listItem}>Custom Cakes</a>
            </Link>
            <Link href="/" passHref>
              <a className={styles.logo}>Christy Cakes</a>
            </Link>
            <Link href="/offers" passHref>
              <a className={styles.listItem}>Offers</a>
            </Link>
            <Link href="/blog" passHref>
              <a className={styles.listItem}>Blog</a>
            </Link>
            <Link href="#footer" passHref>
              <a className={styles.listItem}>Contact</a>
            </Link>
          </ul>
        )}
      </div>
      {admin == true ? (
        <Link href="/admin" passHref>
          <Image src="/img/admin.png" alt="" width="30px" height="30px" />
        </Link>
      ) : (
        <Link href="/cart" passHref>
          <div className={styles.item}>
            <div className={styles.cart}>
              <Image src="/img/cart.png" alt="" width="30px" height="30px" />
              <div className={styles.counter}>{quantity}</div>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
