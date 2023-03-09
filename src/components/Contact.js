import { BsFacebook } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";

function Contact() {
    return (
      <div className="Contact" id="contact">
        <header>
          <h2>Contact Me</h2>
        </header>
        <section>
          <div className="email_wapper">
            <span>To: juvelyngenerale705@gmail.com <MdOutlineMail /></span>
            <textarea placeholder="Write message ..."></textarea>
            <button>Send <RiSendPlaneFill /></button>
          </div>

          <div>
            <a href="https://www.facebook.com/nhavel.generale.5/"><BsFacebook /> Juvelyn Generale</a>
          </div>
        </section>
      </div>
    );
  }
  
  export default Contact;