import "./Card.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "react-bootstrap";
const Folter = () => {
  return (
    <>
      <Container style={{ marginTop: "10%" }}>
        <h4 className="text7">Frequently Asked Questions</h4>
        <div className="bor">
          <div className="txt">What is Netflix?</div>
        </div>
        <div className="bor">
          <div className="txt">How much dose Netflix?</div>
        </div>
        <div className="bor">
          <div className="txt">Where can I watch?</div>
        </div>
        <div className="bor">
          <div className="txt">How do i cancel?</div>
        </div>
        <div className="bor">
          <div className="txt">What can I Watch Netflix?</div>
        </div>
        <div className="bor">
          <div className="txt">Is Netflix good for kids? </div>
        </div>
      </Container>
      <Container style={{ marginTop: "8%", width: "100%", height: "20vh" }}>
        <div className="log">
          <h5>
            Ready to watch? Enter your email or mobile number to create or
            restart your membership.
          </h5>
          <input type="text" class="input" placeholder="Email address" />

          <button class="btn4 ml-2">Get Start</button>
        </div>
      </Container>
    </>
  );
};

export default Folter;
