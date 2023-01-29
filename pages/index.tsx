import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/home/Banner";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Flavien Shirandi</title>
      </Head>
      <Layout>
        <Banner/>
      </Layout>
    </div>
  );
};

export default Home;
