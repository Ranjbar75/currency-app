import React, { useEffect, useState } from "react";
import axios from "axios";
import {CodeToFlag,PersianGoldName} from "./constants";
import Currency from "./Currency.js";
import WatingApi from './WatingApi.js';

const Gold = () => {
    const [Golds,setGolds] = useState([]);

    const ApiUrl = "https://currency.jafari.li/json";

    useEffect(() => {
        axios({
            method: "GET",
            url: ApiUrl
        })
            .then(response => {
                setGolds(response.data.Gold);
            })
            .catch(
                //error => console.log(error)
            );
    }, []);

    useEffect(() => {
        //console.log(Golds);

    }, [Golds]);

    return (
        <div className="cards-main">
            <h3 className="heading_title">قیمت سکه :</h3>
            {
                Golds.length === 0 ? (
                    <WatingApi />
                ) : (
                  Golds.map((Gold, index) => {
                    return(
                      <Currency
                      index={index} 
                      currency_buy={Gold.Buy} 
                      currency_sell={Gold.Sell} 
                      courency_code={PersianGoldName[Gold.Coin]}
                      courency_flag={CodeToFlag[Gold.Coin]}
                      />
                    )
                  })
                )
            }

            
        </div>
    );
}

export default Gold;
