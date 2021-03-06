import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Pricing } from "../components/Pricing/Pricing";
import { Slider } from "../components/Slider/Slider";
import styles from "../styles/Home.module.css";
import data from "../utils/data.json";

const Home: NextPage = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Our Pricing</h1>
        <div className={styles.slider_container}>
          <p>Annually</p>
          <Slider checked={checked} setChecked={setChecked} />
          <p>Monthly</p>
        </div>
        <div className={styles.pricing_container}>
          {data.map((dataPrice) =>
            checked
              ? dataPrice.monthly.map((monthly) => (
                  <Pricing key={monthly.level} priceData={monthly} />
                ))
              : dataPrice.annually.map((annually) => (
                  <Pricing key={annually.level} priceData={annually} />
                ))
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
