import React, { useEffect, useState } from "react";
import "./News.sass";
import Aos from "aos";

import axios from "axios";
import Card from "./Card/Card";

export default function News() {
  const [state, setState] = useState({});
  let dateStateArr,
    sumDateState = [];
  useEffect(() => {
    axios
      .get("https://bilim-568e2-default-rtdb.firebaseio.com/news.json")
      .then((r) => {
        setState(r.data);
      });
    Aos.init({ duration: 2000 });
    window.scrollTo(0, 0);
  }, []);
  if (Object.keys(state).length > 0 && !!state) {
    dateStateArr = Object.keys(state).map((post) => {
      return state[post].date.split("-");
    });
    dateStateArr.map((date) => {
      let sumNumber = date.reduce((acc, number) => {
        return acc + parseInt(number);
      }, 0);
      sumDateState.push(sumNumber);
    });
    sumDateState.sort((a, b) => {
      return b - a;
    });
    console.log(sumDateState);
  }

  return (
    <div className="page__2 position-padding">
      <div className="wrapper">
        <div className="new">
          <div className="news">
            <div className="news__title">НОВОСТИ ЦЕНТРА РАЗВИТИИ ИНФОРМАЦИ</div>
            <div className="news__content">
              <div className="news2">
                <div className="news__text"></div>
              </div>
              {state !== null
                ? Object.keys(state).map((item) => (
                    <Card data={state[item]} id={item} key={item} />
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
