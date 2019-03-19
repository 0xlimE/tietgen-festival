import { Fragment, Component } from 'react';
import { Section } from './Section';
import colors from '../colors';

export class BannerSection extends Component {
  handleArrowDownOnClick = () => {
    this.scrollToSection('about-section');
  };
  scrollToSection = sectionID => {
    const section = document.getElementById(sectionID);
    const domRect = section.getBoundingClientRect();
    const newWindowY = window.scrollY + domRect.top;
    window.scrollTo({
      top: newWindowY,
      left: 0,
      behavior: 'smooth',
    });
  };
  render() {
    return (
      <Fragment>
        <Section
          id="banner-section"
          height="calc(100vh - 80px)"
          color={colors.yellow}
        >
          <video autoPlay loop muted poster="/static/video_poster.jpg">
            <source src="/static/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="container">
            <img src="static/logo.png" />
            <div className="title-container">
              <h2 className="title">
                3<sup>RD</sup> - 4<sup>TH</sup> MAY 2019
              </h2>
              <h2 className="title">Tietgenkollegiet</h2>
            </div>
          </div>
          <a onClick={this.handleArrowDownOnClick}>
            <i className="fa fa-arrow-down" />
          </a>
        </Section>
        <style jsx>{`
          video {
            position: absolute;
            width: 100%;
            height: calc(100vh - 80px);
            z-index: -1;
            object-fit: cover;
          }
          .container {
            display: flex;
            flex-direction: row;
            align-items: center;
          }
          img {
            width: 35vw;
            margin-right: 2vw;
            border-radius: 100%;
          }
          .title-container {
            display: flex;
            flex-direction: column;
          }
          .title {
            margin: 0;
            text-shadow: 0px 0px 50px rgba(0, 0, 0, 0.5);
            font-size: 8.5vw;
          }
          sup {
            font-size: 0.5em;
          }
          .fa-arrow-down {
            position: absolute;
            left: calc(50vw - 2rem);
            bottom: 40px;
            font-size: 4rem;
            cursor: pointer;
          }
          @media screen and (min-width: 800px) {
            img {
              width: calc(0.35 * 800px);
              margin-right: calc(0.02 * 800px);
            }
            .title {
              font-size: calc(0.085 * 800px);
            }
          }
        `}</style>
      </Fragment>
    );
  }
}
