import Image from "next/image";
import styles from "../styles/FeaturedSlider.module.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useState } from "react";

const FeaturedSlider = () => {
  const [index, setIndex] = useState(0);
  const images = [
    {
      key: 1,
      name: "red wine bottle",
      img: "/images/featured1.jpg",
    },
    {
      key: 2,
      name: "white wine bottle",
      img: "/images/featured2.jpg",
    },
    {
      key: 3,
      name: "two rose wine bottles",
      img: "/images/featured3.jpg",
    },
  ];
  const handleClick = (direction) => {
    if (direction === "left") {
      setIndex(index === 0 ? images.length - 1 : index - 1);
    }
    if (direction === "right") {
      setIndex(index === images.length - 1 ? 0 : index + 1);
    }
    console.log(index);
  };
  return (
    <div className={styles.container}>
      <AiOutlineLeft
        className={styles.arrow}
        style={{ left: 32 }}
        onClick={() => handleClick("left")}
      />
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((image) => (
          <div className={styles.imgContainer} key={image.key}>
            <Image
              src={image.img}
              alt={image.name}
              layout="fill"
              objectFit="cover"
              quality="100"
            />
          </div>
        ))}
      </div>
      <AiOutlineRight
        className={styles.arrow}
        style={{ right: 32 }}
        onClick={() => handleClick("right")}
      />
    </div>
  );
};

export default FeaturedSlider;
