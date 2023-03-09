import Cert_1 from "../img/certificate_1.jpg";
import Cert_2 from "../img/certificate_2.jpg";

function Cert() {
  return (
    <div className="Cert" id="cert">
      <header>
        <h2>My Certificates</h2>
      </header>
      
      <div>
        <img src={Cert_1}/>
        <img src={Cert_2}/>
      </div>
    </div>
  );
}
export default Cert;