import React, { Component } from "react";

class Card extends Component {
  state = {
    id: null,
    name: "",
    price: null,
    qty: 1,
  };

  render() {
    return (
      <div className="App">
        <article>
          {Array.from(this.props.data).map((e) => (
            <div class="article">
              <img class="artimg" src={`../images/${e.id}.png`} alt="" />
              <img
                key={e.id}
                class="plusimg"
                id={`${e.id}`}
                src="../images/plus.png"
                alt=""
                value={this.state}
                onClick={(event) => {
                  event.preventDefault();
                  this.props.addtopan(e.id);
                }}
              />
              <div class="info">
                <div>
                  {e.name} : {e.price} DH
                </div>
                <button class="detailsBtn">Detail</button>
              </div>
            </div>
          ))}
        </article>
      </div>
    );
  }
}
export default Card;
