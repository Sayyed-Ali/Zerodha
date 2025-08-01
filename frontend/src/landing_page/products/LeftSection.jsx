function LeftSection({
    imgURL,
    prdctName,
    prdctDescp,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-6">
                    <img src={imgURL} alt="kite" style={{ width: "95%" }} />
                </div>
                <div className="col-6 text-start m-auto" style={{ width: "25rem" }}>
                    <h1 className="fs-4 mb-3" style={{ lineHeight: "2.3rem", fontWeight: "450" }}>{prdctName}</h1>
                    <p className="fw-500 lh-lg">{prdctDescp}</p>
                    <div className="mb-4">
                        <a className="me-5" href={tryDemo}>Try demo <i class="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore}>Learn more <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="d-flex">
                        <a className="me-5" href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="googlePlay" style={{ width: "95%" }} /></a>
                        <a href={appStore}><img src="media/images/appstoreBadge.svg" alt="appStore" style={{ width: "100%" }} /></a>
                    </div>
                </div>

            </div>
        </div >
    );
}

export default LeftSection;