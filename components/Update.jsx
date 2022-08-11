import { useState } from "react";
import styles from "../styles/Add.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const Update = ({ upddata, setClose }) => {
  const [file, setFile] = useState(upddata.file);
  const [title, setTitle] = useState(upddata.title);
  const [desc, setDesc] = useState(upddata.desc);
  const [prices, setPrices] = useState(upddata.prices);
  const [custom, setCustomType] = useState(upddata.custom);

  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };

  const handleExtraInput = (e) => {
    setExtra({ ...extra, [e.target.name]: e.target.value });
  };

  const handleExtra = (e) => {
    setExtraOptions((prev) => [...prev, extra]);
  };

  const handleEdit = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dqay036l4/image/upload",
        data
      );

      const { url } = uploadRes.data;
      const newProduct = {
        title,
        desc,
        prices,
        custom,
        img: url,
      };

      await axios.put("http://localhost:3000/api/products/" + upddata._id, {
        title,
        desc,
        prices,
        custom,
        img: url,
      });
      setClose(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span>
        <h1>Edit cake</h1>
        <div className={styles.item}>
          <label className={styles.label}>Choose an image</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <input
            className={styles.input}
            value={title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Desc</label>
          <textarea
            rows={4}
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Prices</label>
          <div className={styles.priceContainer}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder={prices[0]}
              onChange={(e) => changePrice(e, 0)}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder={prices[1]}
              onChange={(e) => changePrice(e, 1)}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder={prices[2]}
              onChange={(e) => changePrice(e, 2)}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder={prices[3]}
              onChange={(e) => changePrice(e, 3)}
            />
          </div>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Custome cakes</label>
          <select
            name="custom"
            id="custom cakes"
            value={custom}
            onChange={(e) => setCustomType(e.target.value)}
          >
            <option value="None">None</option>
            <option value="kidsBirthday">Kids Cakes</option>
            <option value="Wedding Cakes">Wedding Cakes</option>
            <option value="Photo Cakes">Photo Cakes</option>
            <option value="Occasional cakes">Occasional cakes</option>
            <option value="Theme cakes">Theme cakes</option>
            <option value="Celebration cakes">Celebration cakes</option>
          </select>
        </div>
        <button className={styles.addButton} onClick={handleEdit}>
          Update
        </button>
      </div>
    </div>
  );
};

export default Update;
