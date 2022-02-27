import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bg}>
        <Image
          src="/images/wine shop bg.jpg"
          alt="shelves with wine bottles"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h3 className={styles.motto}>vinul merge <br/> dupa bere</h3>
        </div>
        <div className={styles.card}>
          <h2 className={styles.title}>find our shops here</h2>
          <p className={styles.text}>
            Lorem, ipsum dolor.
            <br />
            Lorem, ipsum dolor.
            <br />
            Lorem, ipsum dolor.
          </p>
        </div>
        <div className={styles.card}>
            <h2 className={styles.title}>working hours</h2>
            <p className={styles.text}>
                monday - thursday <br/>
                10:00 - 22:00
            </p>
            <p className={styles.text}>
                friday - saturday<br/>
                10:00 - 24:00
            </p>
            <p className={styles.text}>
                sunday<br/>
                11:00 - 17:00
            </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
