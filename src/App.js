import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./components/Loader/Loader";
import Container from "./components/CounterBox/CounterBox";
import CounterValue from "./components/CounterValue/CounterValue";
import { maxCount } from "./maxCount";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    let getData = async () => {
      const response = await axios.get(
        `https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/fardeen.json`
      );
      try {
        let value = response.data;
        // console.log(value);
        if (value !== null) setCount(value);
        else setCount(1);
      } catch (error) {
        alert(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (flag) {
      setLoading(true);
      let saveData = async () => {
        const response = await axios.put(
          `https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json`,
          {
            fardeen: count,
          }
        );
        try {
          let value = response.data;
          console.log(value);
          setLoading(false);
        } catch (error) {
          alert(error);
          console.error("There was an error!", error);
          setLoading(false);
        }
      };
      saveData();
    } else setFlag(true);
  }, [count]);

  const handleChange = (event) => {
    let inputValue = event.target.value;
    if (inputValue === "") inputValue = 1;
    else inputValue = parseInt(inputValue);
    // console.log(inputValue, typeof inputValue);
    if (inputValue > maxCount) return;
    setCount(inputValue);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };
  const handleIncrease = () => {
    if (count >= maxCount) return;
    setCount(count + 1);
  };

  return (
    <div className="App">
      <div className="white-board">
        {loading && <Loader />}
        <Container
          count={count}
          handleChange={handleChange}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
        />
        <CounterValue count={count} />
      </div>
      <div className="footer">
        Made by{" "}
        <a href="https://github.com/Eric761" target="_blank" rel="noreferrer">
          Fardeen
        </a>
      </div>
    </div>
  );
};

export default App;
