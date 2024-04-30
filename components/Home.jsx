import "./Bodyweb.css";
import Bodyweb from "./Bodyweb";
import Aboutme from "./Aboutme";
import "bootstrap/dist/css/bootstrap.min.css";
const Home = () => {
  return (
    <>
      <div id="logo">
        <Bodyweb />
      </div>
      <Aboutme />
    </>
  );
};

export default Home;
