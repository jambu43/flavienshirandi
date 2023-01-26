import Head from "next/head";

import Link from "next/link";
import AsidePub from "../components/AsidePub";
import Layout from "../components/Layout";
import TopPub from "../components/TopPub";

function NotFund() {
  return (
    <>
      <Layout>
        <TopPub />
        <div className="container extra-banner">
          <div className="row">
            <div className="col-md-12">
              <ul className="breadcrumb ">
                <li>
                  <Link href="/">Accueil</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="two-col">
            <div className="container">
              <section>
                <div className="page404">
                  <p>{"La page que vous recherchez n'existe pas."}</p>
                  <Link href="/">Revenir à l&apos;accueil</Link>
                </div>
              </section>
              <AsidePub />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default NotFund;
