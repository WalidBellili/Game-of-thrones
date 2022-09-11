import { useEffect, useState } from "react";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    const request = await fetch(`https://thronesapi.com/api/v2/Characters`);
    const response = await request.json();
    setCharacters(response);
  };
  console.log(characters);
  return <div></div>;
};

export default Home;
