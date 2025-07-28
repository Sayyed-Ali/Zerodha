import { Link } from "react-router-dom";

function Hero() {
    return (
        <div className="container mb-5">
            <div className="row border-bottom" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
                <h1 className="fs-3" style={{ lineHeight: "2.3rem", fontWeight: "450" }}>Zerodha Products</h1>
                <h2 className="fs-4 text-muted" style={{ lineHeight: "2.3rem", fontWeight: "450" }}>Sleek, modern, and intuitive trading platforms</h2>
                <p className="fs-6 text-muted" style={{ lineHeight: "2.3rem", fontWeight: "450" }}>Check out our <Link to={"/"}>investment offerings <i class="fa-solid fa-arrow-right"></i></Link> </p>
            </div>
        </div >
    );
}

export default Hero;