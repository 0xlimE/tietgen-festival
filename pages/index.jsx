import { useState } from 'react';
import Head from 'next/head';
import Menu from '../components/Menu';
import BannerSection from '../components/sections/BannerSection';
import ActivitiesSection from '../components/sections/ActivitiesSection';
import ArtistsSection from '../components/sections/ArtistsSection';
import AboutSection from '../components/sections/AboutSection';
import TicketsSection from '../components/sections/TicketsSection';
import FooterSection from '../components/sections/FooterSection';
import Modal from '../components/Modal';
import ProgramSection from '../components/sections/ProgramSection';

export default () => {
  const [modalData, setModalData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const updateModalData = modalData => {
    setModalData(modalData);
    setModalVisible(true);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="The official site for the annual festival at the Tietgen Residence hall!"
        />
        <title>Tietgen Festival</title>
        <link rel="icon" href="/static/favicon.png" sizes="32x32" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,700"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <script async defer data-domain="tietgenfestival.dk" src="https://nsa.janschill.de/js/plausible.js"></script>
        <script
          async
          defer
          src="https://cdn-ticket.livebackend.com/prod/45/embed/877.js?ver=pmgr1r"
        />
      </Head>

      <Menu />

      <BannerSection />
      <AboutSection />
      <TicketsSection />

      <Modal
        visible={modalVisible}
        setModalVisible={setModalVisible}
        modalData={modalData}
      />
      <style jsx global>{`
        body {
          overflow: ${modalVisible ? 'hidden' : 'visible'};
        }
      `}</style>
      <style jsx global>{`
        /* TypoPRO Bebas Neue Regular */
        @import url('https://cdn.jsdelivr.net/npm/@typopro/web-bebas-neue@3.7.5/TypoPRO-BebasNeue-Regular.css');
        html,
        body {
          margin: 0;
        }
        body {
          font-family: 'Roboto', sans-serif;
          word-break: break-word;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: 'TypoPRO Bebas Neue', 'Roboto', sans-serif;
          user-select: none;
        }
        a,
        a:link,
        a:hover,
        a:active,
        a:visited {
          text-decoration: none;
          font-weight: bold;
          color: inherit;
        }
      `}</style>
    </>
  );
};
