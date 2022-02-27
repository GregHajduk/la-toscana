import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/images/phone-icon.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>order now!</div>
          <div className={styles.text}>022 883 555</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>Home</li>
          <li className={styles.menuItem}>Products</li>
          <li className={styles.menuItem}>Menu</li>
          <Image src="/images/logo.svg" alt="logo" width="120" height="120" />
          <li className={styles.menuItem}>Events</li>
          <li className={styles.menuItem}>Blog</li>
          <li className={styles.menuItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cartContainer}>
          <AiOutlineShoppingCart className={styles.cart}/>
          <span className={styles.counter}>3</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
