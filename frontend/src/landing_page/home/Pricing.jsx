function Pricing() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4 text-start">
                    <h2 className="fs-1 mb-5">Unbeatable pricing</h2>
                    <p className="text-muted">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="">See pricing <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6 mt-2 mb-5">
                    <div className="row">
                        <div className="col border p-5">
                            <h2 className="fs-1 mb-4">&#8377;0</h2>
                            <p className="text-muted">Free euity delievery and direct mutual funds</p>
                        </div>
                        <div className="col border p-5">
                            <h2 className="fs-1 mb-4">&#8377;20</h2>
                            <p className="text-muted">Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;