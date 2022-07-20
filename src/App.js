import React from "react";
import Character from "./components/Characters";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      favorites: [],
    };
  }

  async componentDidMount() {
    const request = await fetch("https://thronesapi.com/api/v2/Characters");
    // console.log(request);
    const response = await request.json();
    // console.log(response);
    this.setState({
      characters: response,
    });
  }
  handleFavoriteClick = (character) => {
    const cloneFavorites = [...this.state.favorites, character];

    this.setState({
      favorites: cloneFavorites,
    });
  };
  render() {
    // console.log(this.state.characters);
    const { characters, favorites } = this.state;
    console.log(favorites);

    return (
      <div className="d-flex flex-wrap align-items-center justify-content-center mb-3 text-center">
        <h1>Game of thrones</h1>
        {characters.map((character) => {
          const { fullName, title, imageUrl } = character;
          return (
            <Character
              name={fullName}
              title={title}
              image={imageUrl}
              onClick={() => this.handleFavoriteClick(character)}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
