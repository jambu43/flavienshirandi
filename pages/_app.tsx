// @ts-nocheck
import type { AppProps } from "next/app";

import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/ gtag";

import { ThemeProvider } from "styled-components";
import { theme } from "../global/theme";

import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextNProgress from "nextjs-progressbar";

//store
import { createWrapper } from "next-redux-wrapper";
import store from "../redux/store";
import { Provider } from "react-redux";

// import styles

import "../styles/globals.css";

import { GlobalProvider } from "../context/GlobalContext";

<link
  rel="stylesheet"
  href="https://unicons.iconscout.com/release/v4.0.0/css/unicons.css"
/>;
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smoothMobile: false,
        resetNativeScroll: true,
      });
    });

    // `useEffect`'s cleanup phase
    return () => {
      if (scroll) scroll.destroy();
    };
  });

  return (
    <>
      <Provider store={store}>
        <GlobalProvider>
          <NextNProgress
            color="#fff"
            startPosition={0.3}
            stopDelayMs={200}
            height={5}
            showOnShallow={false}
          />

          <ThemeProvider theme={theme}>
            <main className="main" data-scroll-container>
              <Component {...pageProps} />
            </main>
          </ThemeProvider>
        </GlobalProvider>
      </Provider>
    </>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
