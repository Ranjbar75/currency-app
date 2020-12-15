
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
            .catch(
                //error => console.log(error)
            );
    }, []);

    useEffect(() => {
        //console.log(LastUpdate);

    }, [LastUpdate]);

    function handleClick(){
        window.location.reload();
    }
    
    return (
        <div className="box-absolute">
            <p>
            آخرین بروز رسانی :‌  
            <span className="inline-datetime">
            {
                LastUpdate.length === 0 ? (
                    "درحال دریافت اطلاعات ..."
                ) : (

                    moment.loadPersian({dialect: 'persian-modern'}),
                    moment(LastUpdate, 'YYYY-M-D HH:mm:ss').format('dddd، jD jMMMM jYYYY ساعت : HH:mm ')

                    //moment(LastUpdate, 'YYYY-M-D HH:mm:ss').format('jYYYY/jM/jD HH:mm:ss D')
                )
            }
            </span> 
            <span className="circle_reload" onClick={handleClick}>
                <i className="reload_icon">
                    <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 254.398 254.398">
                        <path d="M254.398,82.007l-28.133,62.972l-62.972-28.134l29.508-11.284c-9.065-26.295-34.042-45.245-63.377-45.245
                            c-28.157,0-53.501,17.781-63.065,44.246L32.284,92.248c14.732-40.772,53.771-68.166,97.141-68.166
                            c44.758,0,82.949,28.625,97.246,68.527L254.398,82.007z M124.974,230.316c43.371,0,82.409-27.394,97.141-68.167l-34.076-12.313
                            c-9.563,26.465-34.906,44.246-63.064,44.246c-29.335,0-54.312-18.95-63.377-45.245l29.508-11.284L28.133,109.42L0,172.392
                            l27.728-10.603C42.024,201.691,80.216,230.316,124.974,230.316z"/>
                    </svg>
                </i>
            </span>
        
            </p>
        </div>
      );
}

export default LastUpdate;
