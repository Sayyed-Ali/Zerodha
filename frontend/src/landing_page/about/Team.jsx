function Team() {
    return (
        <div className="container ">
            <div className="row mt-3">
                <h1 className="fs-3" style={{ lineHeight: "2.3rem", fontWeight: "450" }}>People</h1>
            </div>

            <div className="row text-muted" style={{ paddingBottom: "100px", lineHeight: "2rem" }}>
                <div className="col text-start p-5 fs-6 text-center ">
                    <img src="media/images/nithinKamath.jpg" alt="nitin" style={{ borderRadius: "100%", width: "60%" }} />
                    <h4 className="mt-3 fs-5">Nithin Kamath</h4>
                    <h5 className="text-muted fs-6">Founder, CEO</h5>
                </div>
                <div className="col text-start p-5 fs-6 align-self-center">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p style={{ textDecoration: "none" }}>Coneect on
                        <a href=""> HomePage </a>/
                        <a href=""> TradingQnA </a>/
                        <a href=""> Twitter</a>
                    </p>
                </div>
            </div>
        </div >
    );
}

export default Team;