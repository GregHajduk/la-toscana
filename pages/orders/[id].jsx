import styles from "../../styles/Order.module.css"

const Order = () => {
  return <div className={styles.container}>
      <h2 className={styles.message}>your order is paid</h2>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h3 className={styles.totalTitle}>order total</h3>
          <div className={styles.totalItem}>
            <p className={styles.totalItemTitle}>subtotal:</p>
            <span>$39.98</span>
          </div>
          <div className={styles.totalItem}>
            <p className={styles.totalItemTitle}>delivery:</p>
            <span>$5.99</span>
          </div>
          <div className={styles.totalSum}>
            <p className={styles.totalItemTitle}>total:</p>
            <span className={styles.total}>$45.97</span>
          </div>
        </div>
      </div>
  </div>;
};

export default Order;
