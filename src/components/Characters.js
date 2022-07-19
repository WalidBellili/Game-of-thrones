import React from "react";

class Character extends React.Component {
  render() {
    return (
      <div>
        {/* <p>{this.props.name}</p>
        <p>{this.props.title}</p>

        <img src={this.props.image} alt="" width={330} height={190} /> */}

        <div className="card">
          <img src={this.props.image} alt="" width={280} height={190} />

          <p>{this.props.name}</p>

          <p>{this.props.title}</p>
        </div>
      </div>
    );
  }
}

export default Character;
