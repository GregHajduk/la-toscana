import Image from "next/image";
import Link from "next/link";
import styles from "../styles/WineCard.module.css";

const WineCard = ({ wine }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={wine.img}
          alt="prosecco"
          width="200"
          height="500"
          objectFit="cover"
        />
      </div>
      <Link href={`/product/${wine._id}`} passHref>
        <h3 className={styles.title}>{wine.title}</h3>
      </Link>
      <span className={styles.price}>${wine.prices[0]}</span>
      <p className={styles.desc}>{wine.desc}</p>
    </div>
  );
};

export default WineCard;
