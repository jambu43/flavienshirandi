import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/home/About";
import Article from "../components/home/Article";
import Banner from "../components/home/Banner";
import Brand from "../components/home/Brand";
import Expertise from "../components/home/Expertise";
import GetTouch from "../components/home/GetTouch";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Flavien Shirandi</title>
      </Head>
      <Layout  bgColor="#000" textColor="#ffffffb8" logo="logo/logo.png">
        <Banner />
        <Brand />
        <About />
        <Article />
        <Expertise />
        <GetTouch />
      </Layout>
    </div>
  );
};

export default Home;
