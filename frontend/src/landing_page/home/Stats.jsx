function Stats() {
    return (
        <div className="container mt-5 p-5">
            <div className="row p-5">
                <div className="col-6 text-start">
                    <h2 className="mb-5 fs-1">Trust with confidence</h2>
                    <h3 className="fs-4">Customer-first always</h3>
                    <p className="text-muted">That's why 1.3+ crore customers trust Zerodha with 23.5+ lakh crores worth of equity investments.</p>

                    <h3 className="fs-4">No spam or gimmicks</h3>
                    <p className="text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h3 className="fs-4">The Zerodha universe</h3>
                    <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h3 className="fs-4">Do better with money</h3>
                    <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-6">
                    <img src="media/images/ecosystem.png" alt="ecosystem" style={{ width: "90%" }} />
                    <div className="text-center">
                        <a href="" className="mx-5">Explore our prodcuts <i class="fa-solid fa-arrow-right"></i></a>
                        <a href="">Try kite demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Stats;