import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
    return (
        <div>
            <Hero />
            <LeftSection imgURL="media/images/kite.png"
                prdctName="Kite"
                prdctDescp="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo="https://kite-dashboard.onrender.com/"
                learnMore=""
                googlePlay=""
                appStore=""
            />
            <RightSection imgURL="media/images/console.png"
                prdctName="Console"
                prdctDescp="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                learnMore=""
            />
            <LeftSection imgURL="media/images/coin.png"
                prdctName="Coin"
                prdctDescp="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />
            <RightSection imgURL="media/images/kiteconnect.png"
                prdctName="Kite Connect API"
                prdctDescp="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                learnMore=""
            />
            <LeftSection imgURL="media/images/varsity.png"
                prdctName="Varsity mobile"
                prdctDescp="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />

            <div className="mt-3 p-4">
                <p className="fs-4">Want to know more about our technology stack? Check out the <a href="">Zerodha.tech</a> blog.</p>
            </div>
            <Universe />
        </div>
    );
}

export default ProductPage;