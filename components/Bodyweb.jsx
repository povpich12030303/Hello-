import "./Bodyweb.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faTv,
  faCircleDown,
  faMagnifyingGlass,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";

import { Container } from "react-bootstrap";

const Bodyweb = () => {
  return (
    <Container style={{ marginTop: 20 }} id="postsrt">
      <h4 className="text">More Reasons to Join</h4>
      <Row>
        <Col md={3} sm={12}>
          <Card
            style={{
              width: "auto",
              height: "auto",
              backgroundColor: "#516E71",
              marginTop: "5",
              marginRight: "5",
            }}
          >
            <Card.Body>
              <Card.Title style={{ color: "black" }}>
                Enjoy on your TV
              </Card.Title>
              <Card.Text>
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </Card.Text>
              <FontAwesomeIcon icon={faTv} className="icon" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={12}>
          {" "}
          <Card
            style={{
              width: "auto",
              height: "auto",
              backgroundColor: "#516E71",
              marginTop: "5",
              marginRight: "5",
            }}
          >
            <Card.Body>
              <Card.Title style={{ color: "black" }}>
                Download your shows to watch offline
              </Card.Title>

              <Card.Text>
                Save your favorites easily and always have something to watch
              </Card.Text>
              <FontAwesomeIcon icon={faCircleDown} className="icon" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={12}>
          {" "}
          <Card
            style={{
              width: "auto",
              height: "auto",
              backgroundColor: "#516E71",
            }}
          >
            <Card.Body>
              <Card.Title style={{ color: "black" }}>
                Watch everywhere
              </Card.Title>

              <Card.Text>
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV. Lorem ipsum dolor sit amet.
              </Card.Text>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={12}>
          {" "}
          <Card
            id="card"
            style={{
              width: "auto",
              height: "auto",
              backgroundColor: "#516E71",
              marginTop: "5",
              marginRight: "5",
            }}
          >
            <Card.Body>
              <Card.Title style={{ color: "black" }}>
                Create profiles for kids
              </Card.Title>

              <Card.Text>
                Send kids on adventures with their favorite characters in a
                space made just for them free.
              </Card.Text>
              <FontAwesomeIcon icon={faFaceSmile} className="icon" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Bodyweb;
