import React, { useEffect, useState } from "react";
import axios from "axios";
import {CodeToCountry, CodeToFlag} from "./constants";
import Currency from './Currency.js';

const App = () => {
  
  const [currencies, setCurrencies] = useState([]);

  const ApiUrl = "https://currency.jafari.li/jsons";
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
          <div class="card card-rtl">
            <div className="card-body d-flex justify-content-between">
            <div className="card-buy-sell">
              <h5 className="card-buy"><span> فروش : </span>  <b> 0000000 </b></h5>
              <h5 className="card-sell"><span> خرید : </span> <b> 00000000 </b></h5>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="currency-code">درحال بارگذاری لطفا صببر کنید ....</h5>
            </div>
          </div>
          </div>

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
