//this page/component will show about me portion of the middle third
function AboutMe() {
  return (
    <section>
      <h2 className="aboutContainer"> About Me </h2>
      <p className="aboutContent">
        Hi! I'm Irv. I am a novice web developer looking to expand my technical
        skills. So far, I am learning the ever-evolving language of Javascript.
        Frontend and backend applications involving Javascript, such as Node,
        Express, and React, are rewarding as they are challenging.
      </p>
      <p className="aboutContent">
        Outside of coding, I like to hike and travel. I relate my travel
        experiences to my journey with coding; I find common ground among the
        iterations of something familiar. Getting lost appears to be my
        specialty. Below is a photo of me sort of lost in Cinque Terre.
        <p>
          <img
            src="/images/smallercinque.jpeg"
            alt="me in cinque terre"
            className="aboutImage"
          />
        </p>
      </p>
    </section>
  );
}

export default AboutMe;
