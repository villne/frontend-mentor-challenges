import { useState } from "react";
import { Data } from "../../types/data.interface";
import { Button } from "../Button/Button";
import styles from "./Pricing.module.css";

interface Props {
  priceData: Data;
}

export const Pricing = ({ priceData }: Props) => {
  if (priceData.storage >= 1000) priceData.storage /= 1000;

  return (
    <div className={styles.container}>
      <h2 className={styles.level}>{priceData.level}</h2>
      <p className={styles.price}>$ {priceData.price}</p>
      <hr className={styles.hr} />
      <p>
        {priceData.storage}{" "}
        {priceData.storage > 100 ? <span>GB</span> : <span>TB</span>} Storage
      </p>{" "}
      <hr className={styles.hr} />
      <p>{priceData.max_users} Users allowed</p>
      <hr className={styles.hr} />
      <p>Send up to {priceData.max_send} GB</p>
      <hr className={styles.hr} />
      <Button buttonClass="moi">learn more</Button>
    </div>
  );
};
