import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const Product = ({ cake }) => {
  const [price, setPrice] = useState(cake.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [Name, setName] = useState([]);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = cake.prices[sizeIndex] - cake.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e) => {
    setName(e);
  };

  const handleClick = () => {
    dispatch(addProduct({ ...cake, Name, price, quantity }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={cake.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{cake.title}</h1>
        <span className={styles.price}>Rs.{price}</span>
        <p className={styles.desc}>{cake.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>1/4 kg</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>1/2 kg</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>1 kg</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(3)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>2 kg</span>
          </div>
        </div>
        <h3 className={styles.choose}> Name on the Cake</h3>

        <div>
          <input
            type="text"
            name="name"
            className={styles.textbox}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>

        <div className={styles.add}>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            defaultValue={1}
            className={styles.quantity}
          />
          <button className={styles.button} onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      cake: res.data,
    },
  };
};

export default Product;
