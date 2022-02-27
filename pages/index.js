import axios from "axios";
import Head from "next/head";
import FeaturedSlider from "../components/FeaturedSlider";
import WineList from "../components/WineList";
import styles from "../styles/Home.module.css";

export default function Home({ wineList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wine Shop in Harrogate</title>
        <meta
          name="description"
          content="Shop with biggest selection of world's best wines"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedSlider />
      <WineList wineList={wineList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      wineList: res.data,
    },
  };
};
