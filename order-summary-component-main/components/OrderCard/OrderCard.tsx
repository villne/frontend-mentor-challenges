import Image from "next/image";
import { Button } from "../Button/Button";

import styles from "./OrderCard.module.css";

interface Props {}

export const OrderCard = ({}: Props) => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.hero_image}
        alt="hero"
        src="/illustration-hero.svg"
        layout="responsive"
        width={100}
        height={50}
      />
      <div className={styles.card_container}>
        <h1>Order Summary</h1>
        <p>
          You can now listen to millions of songs, audiobooks and podcasts on
          any device anywhere you like!
        </p>
        <div className={styles.subscription}>
          <Image
            className={styles.music_image}
            alt="music"
            src="/icon-music.svg"
            width={50}
            height={50}
          />
          <div className={styles.annual_plan}>
            <h3>Annual Plan</h3>
            <p>$59.99/year</p>
          </div>
          <div className={styles.change_link}>
            <a href="/">Change</a>
          </div>
        </div>
        <Button buttonClass="proceed">Proceed to Payment</Button>
        <Button buttonClass="cancel">Cancel Order</Button>
      </div>
    </div>
  );
};
