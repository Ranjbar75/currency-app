import React, { useEffect, useState } from "react";
import axios from "axios";
import {CodeToCountry, CodeToFlag} from "./constants";
import Currency from './Currency.js';
import WatingApi from './WatingApi.js';

const App = () => {
  
  const [currencies, setCurrencies] = useState([]);

  const ApiUrl = "https://currency.jafari.li/json";
  useEffect(() => {
    axios({
      method: "GET",
      url: ApiUrl
    })
    .then(response => {
      setCurrencies(response.data.Currency);
    })
    .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    console.log(currencies.length);
  
  }, [currencies]);

  return (

    <div className="cards-main">
      <h3 className="heading_title">نرخ ارزها :</h3>
      {
        currencies.length === 0 ? (
          <WatingApi />
      ) : (
        currencies.map((currency, index) => {
          return(
            <Currency
            index={index} 
            currency_buy={currency.Buy} 
            currency_sell={currency.Sell} 
            courency_code={CodeToCountry[currency.Code]}
            courency_flag={CodeToFlag[currency.Code]}
            />
          )
        })
      )
      }
    </div>
  );
}

export default App;
