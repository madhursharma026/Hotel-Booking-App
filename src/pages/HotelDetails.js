import '../Style/HotelDetails.css';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Navbar1 from '../Components/Header/Navbar1';

export default function HotelDetails() {

    return (
        <>
            <Navbar1 />
            <div class="container-lg mt-3">
                <div className="searchItem">
                    <img
                        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
                        alt="#ImgNotFound"
                        className="hotelImg"
                    />
                    <div className="hotelDesc">
                        <h1 className="hotelTitle">Tower Street Apartments</h1>
                        <span className="hotelDistance">500m from center</span>
                        <span className="hotelTaxiOp">Free airport taxi</span>
                        <span className="hotelSubtitle">
                            Studio Apartment with Air conditioning
                        </span>
                        <span className="hotelFeatures">
                            Entire studio • 1 bathroom • 21m² 1 full bed
                        </span>
                        <span className="hotelCancelOp">Free cancellation </span>
                        <span className="hotelCancelOpSubtitle">
                            You can cancel later, so lock in this great price today!
                        </span>
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelRating">
                            <span>Excellent</span>
                            <button>8.9</button>
                        </div>
                        <div className="hotelDetailTexts">
                            <span className="hotelPrice">$112</span>
                            <span className="hotelTaxOp">Includes taxes and fees</span>
                            <button className="hotelCheckButton">See availability</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

