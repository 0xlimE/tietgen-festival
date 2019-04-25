import { useState } from 'react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import colors from '../colors';
import ButtonCloud from '../ButtonCloud';
import ButtonCloudButton from '../ButtonCloudButton';

export default props => {
  const activities = [
    {
      name: 'CLUB 60',
      description: (
        <>
          <p>
            Start your friday night with CLUB 60, where you get the chance to
            enjoy a shot of beer every minute for one hour, while our DJ’s is
            playing different songs 🍻🍻🍻
          </p>
          <p>
            The DJ’s comments: "D’Joan is heating up the night with everything
            that you have wished for and everything you forgot to wish for. In
            60 minutes we will introduce you to: 60 different lives, 60
            emotions, 60 dimensions, 60 million, 60 eyebrows, 60 plums, 60 Kay
            Bojesen monkeys, 60 teflon pans, 60 feet, 60 olive oils, 60
            evisu-pants, 60 Monet paintings, 60 time zones, 60 mood rings, 60
            commercial banks, 60 religions, 60 different boogers and 60.000
            beers"
          </p>
        </>
      ),
      imageUrl: '/static/activities/Club60.jpeg',
    },
    {
      name: 'TIETGEN RACE',
      description: (
        <p>
          Friday afternoon, you have the opportunity to participate in the the
          ultimate Tietgen Race. You will (with a partner) be tested at sea, on
          land and in the air on both speed, balance, craftiness, concentration
          and courage. It is a relay race, where you participate in teams of two
          - preferably with a theme and accompanying costumes. There is room for
          a total of 10 teams; first come, first served. The two best teams
          compete in a final round, where they have the opportunity to win a
          great prize and eternal honor.
        </p>
      ),
      imageUrl: '/static/activities/TietgenRace.jpeg',
    },
    {
      name: 'SCIENCE SLAM',
      description: (
        <>
          <p>
            Saturday afternoon we invite you to watch a battle of science! Three
            cool residents of Tietgen will do a 5-7 minutes presentation
            inspired by a project they have worked on. They will each try to
            convince you that just their project is the most exciting.
          </p>
          <p>
            The brave participants are: <br />
            Mats, who will present the project: "Earlier signs of disease in the
            heart - new weapons in the fight against heart failure" <br />
            Yas, who will present: "The rules of war" <br />
            Andreas, who will present: "Career pressure and the
            contract-year-phenomenon among professional basketball players"
          </p>
          <p>
            When the participants have presented, the audience will, at the show
            of hands, decide who has the best project. Come and hear about some
            exciting projects from residents and support your favorite
            candidate!
          </p>
        </>
      ),
      imageUrl: '/static/activities/ScienceSlam.jpeg',
    },
    {
      name: 'BINGO',
      description: (
        <>
          <p>
            There are great prices on the table when we invite you to Tietgen
            Festival's answer to Bingo: TRASH OR TREASURE. You just need to show
            up in the circle, get a free bingo ticket and then you have the
            chance to win prizes with a total value of 10.000 kr. But of course
            there will be some obstacles to get the great prices. If you get
            bingo, the wheel of fortune will decide if you are going away with
            trash or treasure.
          </p>
          <p>
            If lucky you are able to win prices from: Helena Hjortshøj Studio,
            Grillens Burgerbar, La Glace, Bezzervizzer, Academic Books, SMUK,
            Homemate, La’ Belle Clinique, Redbull, Stylist Britt Kehler and many
            more.
          </p>
        </>
      ),
      imageUrl: '/static/activities/Bingo.png',
    },
    {
      name: 'STUDENT REVUES',
      description: (
        <>
          <p>
            Student Revues is a great tradition at Danish universities and
            Saturday afternoon we have invited Statskundskabsrevyen (The revue
            of political science). They will entertain with their best sketches
            from their recent revue. Join and get an insight into general and
            political student humor - there is guarantee for laughing.
          </p>
        </>
      ),
      imageUrl: '/static/activities/StudentRevues.png',
    },
    {
      name: 'GIN & TONIC YOGA',
      description: (
        <p>
          Hungover and groggy from a crazy Friday night? Get your body back into
          it and quench your thirst at the same time when we host Gin&Tonic Yoga
          in the circle after the breakfast on Saturday. You will get a G&T
          which will be refilled as the Yoga teacher Ida will guide you through
          some great exercises. Yoga experience or just basic balance is not a
          requirement!
        </p>
      ),
      imageUrl: '/static/activities/GinTonicYoga.jpeg',
    },
    {
      name: 'SILENT DISCO',
      description: (
        <p>
          Come and dance your socks off when we once more present SILENT DISCO
          💥💥 This year will be crazier than ever, when we in collaboration
          with RedBull turn the party hall into a FULL MOON party, with all the
          UV paint your heart desires!
        </p>
      ),
      imageUrl: '/static/activities/SilentDisco.png',
    },
    {
      name: 'K-POP POP-UP-BAR',
      description: (
        <>
          <p>안녕하세요, K-POP 좋아하요?</p>
          <p>
            Have you ever taken rows of soju shots and danced to loud korean pop
            music in an elevator? No? Well your time has come. Tietgen’s
            resident k-pop stan Signe Lilja is hosting, DJ-ing and bartendering
            in the first and only pop-up bar held in an in one of the building’s
            elevators. She will be serving Korea’s no. 1 spirit soju (소주)
            mixed with beer into the korean classic drink somaek (소맥) and
            korean snacks (No-one ever drank soju without eating ramen) all
            while the crispiest tunes of the best k-pop music of all time will
            be bang-bang-banging out the speakers.
          </p>
        </>
      ),
      imageUrl: '/static/activities/KPopPopUpBar.jpeg',
    },
  ];
  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleButtonOnClick = activity => {
    props.updateModalData({
      title: activity.name,
      imageUrl: activity.imageUrl,
      content: activity.description,
    });
  };

  const handleButtonMouseOut = index =>
    setSelectedActivity(prevIndex => (prevIndex === index ? null : index));

  return (
    <>
      <Section
        id="activities-section"
        color={colors.yellow}
        backgroundColor={colors.pink}
      >
        {activities.map((activity, index, array) =>
          activity.name && activity.description && activity.imageUrl ? (
            <img
              className={selectedActivity == index ? 'visible' : ''}
              key={activity.imageUrl}
              src={activity.imageUrl}
            />
          ) : null
        )}
        <SectionTitle>ACTIVITIES</SectionTitle>
        <ButtonCloud>
          {activities.map((activity, index, array) => (
            <ButtonCloudButton
              key={activity.name}
              color={colors.pink}
              backgroundColor={colors.yellow}
              onClick={() => handleButtonOnClick(activity)}
              onMouseOver={() => setSelectedActivity(index)}
              onMouseOut={() => handleButtonMouseOut(index)}
            >
              {activity.name}
            </ButtonCloudButton>
          ))}
        </ButtonCloud>
      </Section>
      <style jsx>{`
        img {
          position: absolute;
          width: 100%;
          height: 100%;
          transition: opacity 0.1s ease;
          opacity: 0;
          object-fit: cover;
        }
        .visible {
          opacity: 1;
        }
      `}</style>
    </>
  );
};
