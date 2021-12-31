import React, { Component } from "react";

class Side extends Component {
  render() {
    return (
      <div className="App">
        {this.props.data.map((item) => (
          <div className="aside">
            <div className="panier" id="panier">
              <div className="charte">
                <div>
                  <img
                    className="artimgmin"
                    src={`../images/${item.id}.png`}
                    alt=""
                  />
                </div>
                <div className="prodname">{item.name}</div>
                <div>
                  <img
                    className="delimg"
                    key={item.id}
                    src="images/del.png"
                    alt=""
                    onClick={(event) => this.props.delItem(item.id)}
                  />
                </div>
                <div className="qtt">{item.qtt}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Side;
