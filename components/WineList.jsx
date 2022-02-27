import styles from "../styles/WineList.module.css";
import WineCard from "./WineCard";

const WineList = ({ wineList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>wine</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        architecto, saepe velit praesentium possimus vel modi esse beatae.
        Culpa, labore!
      </p>
      <div className={styles.wrapper}>
        {wineList.map((wine) => (
          <WineCard key={wine._id} wine={wine} />
        ))}
      </div>
    </div>
  );
};

export default WineList;
