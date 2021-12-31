// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Side from "./components/Side";
import Search from "./components/Search";
import Total from "./components/Total";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [AddedData, setAddedData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/robot/", {
      method: "GET",
      mode: "cors",
      headers: {},
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  const addtopan = (id) => {
    let newdata = data.filter((item) => item.id === id);
    if (AddedData.includes(newdata[0])) {
      AddedData.filter((item) => {
        if (item.id === id) {
          item.qtt++;
        } else {
          setAddedData(AddedData.concat());
        }
      });
    } else {
      newdata[0].qtt = 1;
      setAddedData(AddedData.concat(newdata));
    }
  };
  const delItem = (id) => {
    let newdata = AddedData.filter((item) => item.id != id);
    setAddedData(newdata);
  };
  const onSearch = (e) => {
    if (e.target.value != "") {
      let newdata = data.filter((item) => {
        if (item.name.toLowerCase().includes(e.target.value.toLowerCase())) {
          return item;
        }
      });
      setData(newdata);
    } else {
      fetch("http://localhost:3001/robot/", {
        method: "GET",
        mode: "cors",
        headers: {},
      })
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="App">
      <Header />
      <section>
        <Card data={data} addtopan={addtopan} />
        <aside>
          <Search onSearch={onSearch} />
          <Total data={AddedData} />
          <Side data={AddedData} delItem={delItem} />
        </aside>
      </section>
      <Footer />
    </div>
  );
}

export default App;
