function Education() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-5 text-start">
                    <img src="media/images/education.svg" alt="education" style={{ width: "100%" }} />
                </div>
                <div className="col-1"></div>
                <div className="col-6 mt-5 text-start">
                    <h2 className="fs-1">Free and open market education</h2>
                    <p className="text-muted">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="">Versity <i className="fa-solid fa-arrow-right mb-5"></i></a>
                    <p className="text-muted">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="">TradingQ&A <i className="fa-solid fa-arrow-right"></i></a>
                </div>

            </div>
        </div>
    );
}

export default Education;