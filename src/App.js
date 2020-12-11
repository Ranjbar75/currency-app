import React, { useEffect, useState } from "react";
import axios from "axios";
import {CodeToCountry, CodeToFlag} from "./constants";
const App = () => {
  const [currencies, setCurrencies,setGold] = useState([]);

  const ApiUrl = "https://currency.jafari.li/json";

  useEffect(() => {
    axios({
      method: "GET",
      url: ApiUrl
    })
    .then(response => {
      setCurrencies(response.data.Currency);
      setGold(response.data.setGold);
    })
    .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    console.log(currencies);
  
  }, [currencies]);

  return (
    <div className="cards-main">
      <h3 className="heading_title">نرخ ارزها :</h3>
      {
        currencies.map((currency, index) => {
          return(
            <div className="card" key={index}>
              <div className="card-body d-flex justify-content-between">
                <div className="card-buy-sell">
                  <h5 className="card-buy"><span> فروش : </span>  <b>{currency.Buy}</b></h5>
                  <h5 className="card-sell"><span> خرید : </span> <b>{currency.Sell}</b></h5>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="currency-code">{CodeToCountry[currency.Code]}</h5>
                  <img
                    className="ml-3"
                    src={`${window.location.origin}/flags/${CodeToFlag[currency.Code]}.png`}
                    width="16"
                    height="12"
                    alt="South Africa"
                  />
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
