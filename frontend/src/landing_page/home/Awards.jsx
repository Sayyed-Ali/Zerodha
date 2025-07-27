function Awards() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="media/images/largestBroker.svg" alt="" />
                </div>
                <div className="col-6 p-5 text-start mt-5">
                    <h2 className="fs-1">Largest stock broker in India</h2>
                    <p className="mb-4 mt-3 text-muted">2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading nad investing in: </p>
                    <div className="row">
                        <div className="col-6 text-start text-muted">
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodites derivatives</li>
                                <li>Currency Derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6 text-start text-muted">
                            <ul>
                                <li>Stocks and IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/images/pressLogos.png" alt="pressLogos" style={{ width: "90%" }} />
                </div>
            </div>
        </div>
    );
}

export default Awards;