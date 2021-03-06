import Section from './Section';
import SectionTitleWhite from './SectionTitleWhite';
import colors from '../colors';

const AboutSection = () => <Section
  id="about-section"
  minHeight="100vh"
  color={colors.white}
  backgroundColor={colors.gradientdown}
>
  <SectionTitleWhite>ABOUT TIETGEN FESTIVAL</SectionTitleWhite>
  <p>
 Tietgen Festival is the annual festival at the Tietgen Residence Hall! The dorm houses 390 students
 from different educational backgrounds and nationalities. Once a year, all friends and
 neighbors of the dorm are invited into the circle to experience the Tietgen Spirit. The ambition
 is to create a festival where friends and neighbors can enjoy the dorm and its unique possibility for cultural mediation.
  </p>
  <p>
    The festival distinguishes itself from other festivals by being not just another party, but by
    being a festival which promotes curiosity, learning and cultural experiences alongside the
    great party! The festival is non-profit and is entirely run by volunteers from the dorm.
    All residents are invited to pitch in and help shape the festival from the festival vision.
  </p>
  <p>
    <i>
      <b>
      “The Annual Tietgen Festival strives to engage residents to come
      together in order to invite surrounding neighbors and fellow peers to
      demystify Tietgen, promote cultural curiosity and celebrate the Tietgen
      spirit.“
      </b>
    </i>
  </p>
  <style jsx>{`
    p {
      margin-top: 0em;
      margin-bottom: 1em;
      font-size: calc(1em + 0.3vw);
      width: 100%;
      max-width: 700px;
      text-align: center;
    }
  `}</style>
</Section>;

export default AboutSection;
