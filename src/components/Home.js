import ProfileImage from "../img/my-profile.png";

function Home() {
  return (
    <div className="Home" id="home">
        <div className="wrapper">
            <img src={ProfileImage} alt="profile"/>
            <section>
              <h3>Hi, I'm</h3>
              <h1>Juvelyn Generale</h1>
              <p>Tends to secure a responsible career opportunity to fully utilize my training and skills, while making a significant contribution to the success of the company.</p>
              <p>And also to secure challenging position in a reputable organization to expand my learnings, knowledge, and skills.</p>
            </section>
        </div>
    </div>
  );

}

export default Home;
