import { AppProps } from "next/app";
import { FC, useEffect } from "react";
import { Router } from "next/router";
import { BoxAside } from "@/app/components/BoxAside";
import { BoxHeader } from "@/app/components/BoxHeader";
import { getAdminRedirect } from "@/app/utils/getAdminRedirect";
import "@/app/index.css";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    let disposed = false;
    let unsubscribe = () => {};

    async function startAnalytics() {
      const { isSupported, initializeAnalytics, getAnalytics, logEvent } =
        await import("firebase/analytics");
      if (!(await isSupported()) || disposed) return;
      const { getApps, initializeApp } = await import("firebase/app");
      if (disposed) return;
      const existingApp = getApps()[0];
      const app =
        existingApp ??
        initializeApp({
          apiKey: "AIzaSyApe1mnUDKLGUIXa0XtntxOe-k2vysY8L4",
          authDomain: "ejik3yfgcuhta376sw2p.firebaseapp.com",
          projectId: "ejik3yfgcuhta376sw2p",
          storageBucket: "ejik3yfgcuhta376sw2p.appspot.com",
          messagingSenderId: "1056518212822",
          appId: "1:1056518212822:web:ca40589b75cbf38a05cd77",
          measurementId: "G-Q1B4GLE32V",
        });
      const analytics = existingApp
        ? getAnalytics(app)
        : initializeAnalytics(app, { config: { send_page_view: false } });
      let frame = 0;
      const trackPage = () => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          logEvent(analytics, "page_view", {
            page_location: window.location.href,
            page_path: window.location.pathname,
            page_title: document.title,
          });
        });
      };
      Router.events.on("routeChangeComplete", trackPage);
      trackPage();
      unsubscribe = () => {
        cancelAnimationFrame(frame);
        Router.events.off("routeChangeComplete", trackPage);
      };
    }

    startAnalytics().catch((error) => {
      console.warn("Analytics could not be initialized", error);
    });
    return () => {
      disposed = true;
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const redirect = getAdminRedirect(window.location.href);
    if (redirect) window.location.replace(redirect);
  }, []);

  return (
    <>
      <BoxHeader />
      <BoxAside />
      <Component {...pageProps} />
    </>
  );
};

export default App;
