import { AppProps } from "next/app";
import React, { FC } from "react";
import "../styles/globals.scss";
import Head from "next/head";
import Header from "@/components/organisms/header";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Wonder World</title>
        <link
          rel="icon"
          href="https://th.bing.com/th/id/R.13b5007b669aa231303f9c2083c4e7dd?rik=POS76FSob%2fEFpg&pid=ImgRaw&r=0"
        />
      </Head>

      <Header />
      <div className="global">
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
