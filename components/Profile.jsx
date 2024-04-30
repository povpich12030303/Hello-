const Profile = (props) => {
  return (
    <>
      <h2>{props.Name}</h2>
      <p>{props.Text}</p>
      <img>{props.img}</img>
    </>
  );
};

export default Profile;
