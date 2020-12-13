import React, { useEffect, useState } from "react";
import axios from "axios";
import {CodeToFlag,PersianGoldName} from "./constants";
import Currency from './Currency.js';
import WatingApi from './WatingApi.js';


const Gold = () => {
    const [Items,setItems] = useState([]);

    const ApiUrl = "https://currency.jafari.li/json";

    useEffect(() => {
        axios({
            method: "GET",
            url: ApiUrl
        })
            .then(response => {
                setItems(response.data.Item);
            })
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        console.log(2222);
        console.log(Items);

    }, [Items]);

    return (
        <div className="cards-main">
            <h3 className="heading_title">قیمت فلزات گران بها :</h3>
            {
                Items.length === 0 ? (
                    <WatingApi />
                ) : (
                    Items.map((Item, index) => {
                    return(
                      <Currency
                      index={index} 
                      currency_buy={Item.Rate} 
                      currency_sell={Item.Rate} 
                      courency_code={PersianGoldName[Item.Name]}
                      courency_flag={CodeToFlag[Item.Name]}
                      />
                    )
                  })
                )
            }

            
        </div>
    );
}

export default Gold;
