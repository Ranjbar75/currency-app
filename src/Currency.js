import React from "react";

function Currency(props) {
    return(
        <div className="card" key={props.id}>
          <div className="card-body d-flex justify-content-between">
            <div className="card-buy-sell">
              <h5 className="card-buy"><span> فروش : </span>  <b>{props.currency_buy}</b></h5>
              <h5 className="card-sell"><span> خرید : </span> <b>{props.currency_sell}</b></h5>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="currency-code">{props.courency_code}</h5>
              <img
                className="ml-3"
                src={`${window.location.origin}/flags/${props.courency_flag}.png`}
                width="16"
                height="12"
                alt="South Africa"
              />
            </div>
          </div>
        </div>
      )
}

export default Currency;