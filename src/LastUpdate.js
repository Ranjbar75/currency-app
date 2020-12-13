
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment-jalaali";

const LastUpdate = () => {
    const [LastUpdate,setLastUpdate] = useState([]);

    const ApiUrl = "https://currency.jafari.li/json";

    useEffect(() => {
        axios({
            method: "GET",
            url: ApiUrl
        })
            .then(response => {
                setLastUpdate(response.data.LastModified);
            })
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        console.log(LastUpdate);

    }, [LastUpdate]);
    
    return (
        <div className="box-absolute">
            <p>
            آخرین بروز رسانی :‌  
            <span className="inline-datetime">
            {
                LastUpdate.length === 0 ? (
                    "درحال دریافت اطلاعات ..."
                ) : (
                    moment(LastUpdate, 'YYYY-M-D HH:mm:ss').endOf('jMonth').format('jYYYY/jM/jD HH:mm:ss') 
                )
            }
            </span> 
            </p>
        </div>
      );
}

export default LastUpdate;
