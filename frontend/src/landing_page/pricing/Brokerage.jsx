function Brokerage() {
    return (
        <div className="container border-top border-bottom">
            <div className="row mt-5">
                <div className="col-8">
                    <h3 className="fs-4 mb-2" style={{ position: "relative", left: "0px", color: "#397dd1" }}>Brokerage calculator</h3>
                    <ul className="text-start text-muted p-4 fs-9" style={{ lineHeight: "2.2rem" }}>
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of 250 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged 220 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% or 2100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or 2200 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged 240 per executed order instead of 220 per executed order.</li>
                    </ul>
                </div>
                <div className="col-4">
                    <h3 className="fs-4" style={{ color: "#397dd1" }}>List of charges</h3>

                </div>
            </div>
        </div>
    );
}

export default Brokerage;