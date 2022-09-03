const Button = (props) => {
  console.log(props);
  const handleAddToFavorite = (e) => {};
  return (
    <>
      <button onClick={handleAddToFavorite}>Add to favorite</button>
      <button>Remove</button>
    </>
  );
};

export default Button;
