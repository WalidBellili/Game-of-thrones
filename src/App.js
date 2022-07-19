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
    console.log(response);
    this.setState({
      characters: response,
    });
  }
  handleFavoriteClick = () => {
    this.setState({
      favorites: this.state,
    });
  };
  render() {
    console.log(this.state.f);
    return (
      <div className="d-flex flex-wrap align-items-center justify-content-center mb-3 text-center">
        <h1>Game of thrones</h1>;
        {this.state.characters.map((character) => {
          return (
            <Character
              name={character.fullName}
              title={character.title}
              image={character.imageUrl}
              onClick={this.handleFavoriteClick}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
