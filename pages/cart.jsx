import styles from "../styles/Cart.module.css";

const cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th>product</th>
            <th>name</th>
            <th>price</th>
            <th>quantity</th>
            <th>total</th>
          </tr>
          <tr className={styles.tr}>
            <td>1</td>
            <td>prosecco</td>
            <td>$19.99</td>
            <td>2</td>
            <td>$39.98</td>
          </tr>
        </table>
      </div>
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
          <button className={styles.button}>check out</button>
        </div>
      </div>
    </div>
  );
};

export default cart;
