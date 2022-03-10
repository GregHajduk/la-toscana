import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../../styles/Product.module.css";
import axios from "axios";
import ExtraOrderOptions from "../../components/ExtraOrderOptions";

const Product = ({ wine }) => {
  const [bottlesAmount, setBottlesAmount] = useState(0);
  const [extraOptions, setExtraOptions] = useState([]);
  const [price, setPrice] = useState(wine.prices[bottlesAmount]);

  const handleChange = (e, extra) => {
    const checked = e.target.checked;

    if (checked) {

      setPrice((Number(price) + extra.price).toFixed(2));
      setExtraOptions((prev) => [...prev, extra]);
    } else {
      setPrice((Number(price) - extra.price).toFixed(2));
      setExtraOptions(
        extraOptions.filter((extraOption) => extraOption._id !== extra._id)
      );
    }
  };

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
        <h1 className={styles.title}>{wine.title}</h1>
        <span className={styles.price}>${wine.prices[bottlesAmount]}</span>
        <p className={styles.desc}>{wine.desc}</p>
        <div className={styles.sizeContainer}>
          <h3 className={styles.sizeTitle}>choose the size</h3>
          <div className={styles.sizesContainer}>
            <div className={styles.size} onClick={() => setBottlesAmount(0)}>
              <Image
                src="/images/single bottle icon.svg"
                height="40"
                width="40"
              />
              <p className={styles.sizeName}>bottle</p>
            </div>
            <div className={styles.size} onClick={() => setBottlesAmount(1)}>
              <Image src="/images/case icon.svg" height="40" width="40" />
              <p className={styles.sizeName}>
                case <span>(6 bottles)</span>
              </p>
            </div>
          </div>
        </div>
        <h4 className={styles.extrasTitle}>
          those would go well with your wine
        </h4>
        <div className={styles.extras}>
          <ExtraOrderOptions wine={wine} handleChange={handleChange} />
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <h2>
            total: <span className={styles.total}>${price}</span>
          </h2>
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
