import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Admin.module.css";
import AddButton from "../../components/AddButton";
import Add from "../../components/Add";
import Update from "../../components/Update";
const Index = ({ orders, products }) => {
  const [cakeList, setcakeList] = useState(products);
  const [close, setClose] = useState(true);
  const [Updateclose, UpdatesetClose] = useState(true);
  const [data, setData] = useState(null);
  const [orderList, setOrderList] = useState(orders);
  const status = ["preparing", "on the way", "delivered"];

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const res = await axios.delete(
        "http://localhost:3000/api/products/" + id
      );
      setcakeList(cakeList.filter((cake) => cake._id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  const handleEdit = async (id) => {
    console.log(id);
    try {
      const res = await axios.get("http://localhost:3000/api/products/" + id);
      const data = res.data;
      console.log(data);
      setData(data);
      UpdatesetClose(false);
      setcakeList(cakeList.filter((cake) => cake._id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;

    try {
      const res = await axios.put("http://localhost:3000/api/orders/" + id, {
        status: currentStatus + 1,
      });
      setOrderList([
        res.data,
        ...orderList.filter((order) => order._id !== id),
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Products Details</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th className={styles.tableheading}>Image</th>
              <th className={styles.tableheading}>Id</th>
              <th className={styles.tableheading}>Title</th>
              <th className={styles.tableheading}>Price</th>
              <th className={styles.tableheading}>Action</th>
            </tr>
          </tbody>
          {cakeList.map((product) => (
            <tbody key={product._id}>
              <tr className={styles.trTitle}>
                <td className={styles.tabledata}>
                  <Image
                    src={product.img}
                    width={150}
                    height={150}
                    objectFit="cover"
                    alt=""
                  />
                </td>
                <td className={styles.tabledata}>{product._id}</td>
                <td className={styles.tabledata}>{product.title}</td>
                <td className={styles.tabledata}>Rs.{product.prices[0]}</td>
                <td className={styles.tabledata}>
                  <button
                    className={styles.button}
                    onClick={() => handleEdit(product._id)}
                  >
                    Edit
                  </button>
                  {!Updateclose && (
                    <Update upddata={data} setClose={Updateclose} />
                  )}
                  <button
                    className={styles.button}
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  const productRes = await axios.get("http://localhost:3000/api/products");
  const orderRes = await axios.get("http://localhost:3000/api/orders");

  return {
    props: {
      orders: orderRes.data,
      products: productRes.data,
    },
  };
};

export default Index;
