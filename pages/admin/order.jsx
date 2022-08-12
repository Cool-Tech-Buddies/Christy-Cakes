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
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th className={styles.tabledata}>Customer Id</th>
              <th className={styles.tabledata}>Customer Name</th>
              <th className={styles.tabledata}>Total</th>
              <th className={styles.tabledata}>Payment Method</th>
              <th className={styles.tabledata}>Status</th>
              <th className={styles.tabledata}>Action</th>
            </tr>
          </tbody>
          {orderList.map((order) => (
            <tbody key={order._id}>
              <tr className={styles.trTitle}>
                <td className={styles.tabledata}>{order._id}</td>
                <td className={styles.tabledata}>{order.customer}</td>
                <td className={styles.tabledata}>Rs.{order.total}</td>
                <td className={styles.tabledata}>
                  {order.method === 0 ? <span>cash</span> : <span>paid</span>}
                </td>
                <td className={styles.tabledata}>{status[order.status]}</td>
                <td className={styles.tabledata}>
                  <button
                    onClick={() => handleStatus(order._id)}
                    className={styles.buttonorder}
                  >
                    Next Stage
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
