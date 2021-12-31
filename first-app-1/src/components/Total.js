import React, { PureComponent } from "react";
class Total extends React.Component {
  render() {
    let summ = 0;
    this.props.data.map((element) => {
      summ += element.price;

      if (element.qtt > 1) {
        summ = summ * element.qtt;
      }
    });
    return (
      <div id="total" className="title">
        Total: {summ}DH
      </div>
    );
  }
}

export default Total;
