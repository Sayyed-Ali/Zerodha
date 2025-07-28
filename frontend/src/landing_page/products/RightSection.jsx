function RightSection({
    imgURL,
    prdctName,
    prdctDescp,
    learnMore
}) {
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-6 text-start m-auto" style={{ width: "25rem" }}>
                    <h1 className="fs-4 mb-3" style={{ lineHeight: "2.3rem", fontWeight: "450" }}>{prdctName}</h1>
                    <p className="fw-500 lh-lg">{prdctDescp}</p>
                    <div className="mb-4">
                        <a href={learnMore}>Learn more <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-6">
                    <img src={imgURL} alt="kite" style={{ width: "95%" }} />
                </div>
            </div>
        </div >
    );
}

export default RightSection;