const Test = (props) => {
  const { name, text } = props;

  return (
    <>
      <h1>{name}</h1>
      <p>{text}</p>
    </>
  );
};

export default Test;
