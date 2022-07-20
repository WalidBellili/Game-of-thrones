import React from "react";

class Character extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <img
            src={this.props.image}
            alt=""
            width={250}
            height={220}
            className="card-img-top"
          />

          <h2 className="card-title">{this.props.name}</h2>

          <p className="card-text">{this.props.title}</p>
          <button onClick={this.props.onClick}>Favoris</button>
        </div>
      </div>
    );
  }
}

export default Character;
