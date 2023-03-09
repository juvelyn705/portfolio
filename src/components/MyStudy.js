import ProfileImage from "../img/nemsu_logo.jpg";

function MyStudy() {
    return (
      <div className="MyStudy" id="my_study">
        <header>
          <h2>My Study</h2>
        </header>
        <section>
          <img src={ProfileImage} />
          <p>Studied</p>
          <p>Bachelor of Science in Computer Science - BSCS</p>
          <p>at</p>
          <p>North Eastern Mindanao State University - NEMSU</p>
          <p>Currently</p>
          <p>Fourth year student</p>
        </section>
      </div>
    );
  
}
  
export default MyStudy;