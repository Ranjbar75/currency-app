import React, { useEffect, useState } from "react";
import axios from "axios";
import {CodeToFlag,PersianGoldName} from "./constants";


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
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        console.log(Golds);

    }, [Golds]);

    return (
        <div className="cards-main">
            <h3 className="heading_title">قیمت سکه :</h3>
            {
                Golds.map((Gold, index) => {
                    return(
                        <div className="card" key={index}>
                            <div className="card-body d-flex justify-content-between">
                                <div className="card-buy-sell">
                                    <h5 className="card-buy"><span> فروش : </span>  <b>{Gold.Buy}</b></h5>
                                    <h5 className="card-sell"><span> خرید : </span> <b>{Gold.Sell}</b></h5>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="currency-code">{PersianGoldName[Gold.Coin]}</h5>
                                    <img
                                        className="ml-3"
                                        src={`${window.location.origin}/flags/${CodeToFlag[Gold.Coin]}.png`}
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

export default Gold;
