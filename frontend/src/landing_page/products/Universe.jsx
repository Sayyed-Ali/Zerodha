import './Universe.css';

function Universe() {
    return (
        <div className="container mt-5">
            <div className="row mb-3">
                <h3 style={{ fontWeight: "450", fontSize: "1.8rem" }}>The Zerodha Universe</h3>
                <p className="mt-4 text-muted fs-5">Extend your trading and investment experience even further with our partner platforms</p>

                <div className="row grid text-muted">
                    <div className="col-4 p-3 mt-5 grid-col">
                        <img src="media/images/zerodhaFundhouse.png" />
                        <p className="text-small text-muted">Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                    </div>
                    <div className="col-4 p-3 mt-5 grid-col">
                        <img src="media/images/sensibullLogo.svg" />
                        <p className="text-small text-muted">Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                    </div>
                    <div className="col-4 p-3 mt-5 grid-col">
                        <img src="media/images/tijori.svg" />
                        <p className="text-small text-muted">Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
                        </p>
                    </div>
                    <div className="col-4 p-3 mt-5 grid-col">
                        <img src="media/images/streakLogo.png" />
                        <p className="text-small text-muted">Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                    </div>
                    <div className="col-4 p-3 mt-5 grid-col">
                        <img src="media/images/smallcaseLogo.png" />
                        <p className="text-small text-muted">Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                    </div>
                    <div className="col-4 p-3 mt-5 grid-col">
                        <img src="media/images/dittoLogo.png" />
                        <p className="text-small text-muted">Personalized advice on life and health insurance. No spam and no mis-selling.
                        </p>
                    </div>
                </div>
            </div>
            <button className='btn btn-primary mt-5 pe-4 ps-4 fs-4 mb-5'>Sign up for free</button>
        </div>
    );
}

export default Universe;