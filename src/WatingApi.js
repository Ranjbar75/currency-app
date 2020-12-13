

const WatingApi = () => {
    return (
        <div className="card card-rtl">
            <div className="card-body d-flex justify-content-between">
                <div className="card-buy-sell">
                    <h5 className="card-buy"><span> فروش : </span>  <b> 00000000 </b></h5>
                    <h5 className="card-sell"><span> خرید : </span> <b> 00000000 </b></h5>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="currency-loading">درحال بارگذاری لطفا صببر کنید ....</h5>
                </div>
            </div>
          </div>
      );
}

export default WatingApi;
