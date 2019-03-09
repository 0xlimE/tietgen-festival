import { Fragment, Component } from "react";
import Head from "next/head";
import { BannerSection } from "../components/sections/BannerSection";
import { AboutSection } from "../components/sections/AboutSection";

export default class Index extends Component {
  render() {
    return (
      <Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="The official site for the annual festival at the Tietgen Residence hall!"
          />
          <title>Tietgen Festival</title>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,700"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <script
            async
            defer
            src="https://cdn-ticket.livebackend.com/prod/45/embed/877.js?ver=pmgr1r"
          />
        </Head>
        <BannerSection />
        <AboutSection />

        <style jsx global>{`
          /* TypoPRO Bebas Neue Regular */
          @import url("https://cdn.jsdelivr.net/npm/@typopro/web-bebas-neue@3.7.5/TypoPRO-BebasNeue-Regular.css");
          html,
          body {
            margin: 0;
          }
          body {
            font-family: "Roboto", sans-serif;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: "TypoPRO Bebas Neue", "Roboto", sans-serif;
            user-select: none;
          }
        `}</style>
      </Fragment>
    );
  }
}
