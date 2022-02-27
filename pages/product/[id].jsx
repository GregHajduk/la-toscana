import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Product.module.css";
import axios from "axios";

const Product = ({ wine }) => {
  const [size, setSize] = useState(0);
  console.log(wine)
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={wine.img}
            alt={wine.name}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{wine.name}</h1>
        <span className={styles.price}>${wine.prices[size]}</span>
        <p className={styles.desc}>{wine.desc}</p>
        <div className={styles.sizeContainer}>
          <h3 className={styles.sizeTitle}>choose the size</h3>
          <div className={styles.sizesContainer}>
            <div className={styles.size} onClick={() => setSize(0)}>
              <Image
                src="/images/single bottle icon.svg"
                height="40"
                width="40"
              />
              <p className={styles.sizeName}>bottle</p>
            </div>
            <div className={styles.size} onClick={() => setSize(1)}>
              <Image src="/images/case icon.svg" height="40" width="40" />
              <p className={styles.sizeName}>
                case <span>(6 bottles)</span>{" "}
              </p>
            </div>
          </div>
        </div>
        <h4 className={styles.extrasTitle}>
          those would go well with your wine
        </h4>
        <div className={styles.extras}>
          <div className={styles.extraItem}>
            <input
              type="checkbox"
              id="cheese"
              name="cheese"
              className={styles.checkbox}
            />
            <label htmlFor="cheese">italian cheese</label>
          </div>
          <div className={styles.extraItem}>
            <input
              type="checkbox"
              id="ham"
              name="ham"
              className={styles.checkbox}
            />
            <label htmlFor="ham">parma ham</label>
          </div>
          <div className={styles.extraItem}>
            <input
              type="checkbox"
              id="olives"
              name="olives"
              className={styles.checkbox}
            />
            <label htmlFor="olives">olives</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>add to cart</button>
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
      wine: res.data,
    },
  };
};

export default Product;
