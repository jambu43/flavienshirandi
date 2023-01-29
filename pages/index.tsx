import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/home/About";
import Article from "../components/home/Article";
import Banner from "../components/home/Banner";
import Brand from "../components/home/Brand";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Flavien Shirandi</title>
      </Head>
      <Layout>
        <Banner/>
        <Brand />
        <About />
        <Article />
      </Layout>
    </div>
  );
};

export default Home;
