import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="App">
        <div id="search">
          <input
            type="text"
            onChange={(e) => {
              this.props.onSearch(e);
            }}
            placeholder="chercher un produit ..."
          />
        </div>
      </div>
    );
  }
}
export default Search;
