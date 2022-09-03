import React from "react";
import Character from "./components/Characters";
import Continents from "./components/Continents";
import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      // favorites: [],
      continents: [],
      // isCharactere: false,
      // isContinent: false,
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
    const secondRequest = await fetch(
      "https://thronesapi.com/api/v2/Continents"
    );
    // console.log(secondRequest);
    const secondResponse = await secondRequest.json();
    // console.log(secondResponse);
    this.setState({
      continents: secondResponse,
    });
  }
  handleFavoriteClick = (character) => {
    const cloneFavorites = [...this.state.favorites, character];

    this.setState({
      favorites: cloneFavorites,
    });
  };

  handleToggleClick = (e) => {
    // const element = document.getElementById("toggle");
    // element.classList.toggle("toggle");
    if (this.state.isCharactere !== this.state.isContinent) {
    }
  };

  render() {
    // console.log(this.state.characters);
    // const { characters, favorites, continents, isCharactere, isContinent } =
    //   this.state;
    // console.log(continents);

    return (
      <div className="text-center">
        <h1>Game of thrones</h1>
        <div>
          <button onClick={this.handleToggleClick}>Personnages</button>
          <button onClick={this.handleToggleClick}>Continent</button>
        </div>
        <div>
          <div
            id="toggle"
            className="d-flex flex-wrap gap-5 align-items-center justify-content-center"
          >
            {/* {characters.map((character) => {
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
            {continents.map((continent) => {
              return <Continents continent={continent.name} />;
            })} */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
