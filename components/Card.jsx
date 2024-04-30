import Bodyweb from "./Bodyweb";
import "./Bodyweb.css";

const Card = () => {
  return (
    <>
      {" "}
      <Bodyweb
        Name="Enjoy on your TV"
        Text="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
      />
      <Bodyweb
        Name="Download your shows to watch offline"
        Text="Save your favorites easily and always have something to watch."
      />
      <Bodyweb
        Name="Watch everywhere"
        Text="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
      />
      <Bodyweb
        Name="Create profiles for kids"
        Text="Send kids on adventures with their favorite characters in a space made just for them — free with your membership."
      />
    </>
  );
};

export default Card;
