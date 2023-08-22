import "../Style/Hotel.css";
import { useEffect, useState } from "react";
import Navbar1 from "../Components/Header/Navbar1";
import { useLocation, useNavigate } from 'react-router-dom';

function Hotel() {
  const history = useLocation();
  const [open, setOpen] = useState(false);
  const [hotelDetails, setHotelDetails] = useState([]);

  useEffect(() => {
    if (history.state !== null) {
      let orderId = `${history.state.data.data[0].offers[0].id}`

      fetch(`https://test.api.amadeus.com/v3/shopping/hotel-offers/${orderId}`, {
        method: "GET",
        headers: {
          "Authorization": "Bearer XiMhWinR2LY4bkV9OV8n8F39tEdD",
        },
        mode: "cors",
        catch: "default"
      })
        .then(resp => resp.json())
        .then(data => setHotelDetails(data.data))
    }
  }, [])
  const [slideNumber, setSlideNumber] = useState(0);

  console.log(hotelDetails.hotel.name)

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar1 />
      {/* {(hotelDetails !== []) ? */}
      <div className="container-lg mt-3">
        {open && (
          <div className="slider">
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
          </div>
        )}
        <div className="hotelWrapper">
          <h1 className="hotelTitle">{hotelDetails.hotel.name}</h1>
          <h5>
            Address: {hotelDetails.hotel.cityCode} • {hotelDetails.hotel.address.stateCode} • {hotelDetails.hotel.address.countryCode}
          </h5>
          <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1" alt="#ImgNotFound" className="w-100 mt-4" style={{ maxHeight: '400px', objectFit: "cover" }} />
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h3 className="hotelTitle">Stay in the heart of City</h3>
              <h4 className="hotelDesc">
                {hotelDetails.offers[0].description.text}
              </h4>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Amenities: {hotelDetails.hotel.amenities[0]}</h1>
              <h1>Room Type: {hotelDetails.offers[0].room.type} {hotelDetails.offers[0].room.description.text}</h1>
              <h1>Cancellations Policies: {hotelDetails.offers[0].policies.cancellations[0].deadline}</h1>
              <h2>
                <b>₹ {hotelDetails.offers[0].price.total}</b>
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      {/* :
        <h1 className="text-center pt-5 mt-5">
          No Data Found!
        </h1>
      } */}
    </div>
  );
};

export default Hotel;
