function Hero() {
    return (
        <div className="container ">
            <div className="row" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
                <h1 className="fs-2" style={{ lineHeight: "2.3rem", fontWeight: "450" }}>Charges</h1>
                <h2 className="fs-5" style={{ lineHeight: "2.3rem", fontWeight: "150" }}>List of all charges and taxes</h2>
            </div>

            <div className="row mt-5 p-2">
                <div className="col p-3">
                    <img src="media/images/pricingEquity.svg" alt="" />
                    <h1 className="fs-3 mb-4">Free equity delivery</h1>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col p-3">
                    <img src="media/images/intradayTrades.svg" alt="" />
                    <h1 className="fs-3 mb-4">Intraday and F&O trades</h1>
                    <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col p-3">
                    <img src="media/images/pricingEquity.svg" alt="" />
                    <h1 className="fs-3 mb-4">Free direct MF</h1>
                    <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>

        </div >
    );
}

export default Hero;