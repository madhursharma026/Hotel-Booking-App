import { useState } from 'react';
import '../Style/HotelDetails.css';
import Modal from 'react-bootstrap/Modal';
import "react-date-range/dist/styles.css";
import Button from 'react-bootstrap/Button';
import "react-date-range/dist/theme/default.css";
import Navbar1 from '../Components/Header/Navbar1';
import { useLocation, useNavigate } from 'react-router-dom';

export default function HotelDetails() {
    const history = useLocation();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    let hotelDetails = ''
    if (history.state !== null) {
        hotelDetails = history.state.data.data;
    }
    const [adultValue, setAdultValue] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [roomQuantity, setRoomQuantity] = useState('');
    const [paramHotelIdValue, setParamHotelIdValue] = useState('');

    function seeAvailabilityFunction() {
        // fetch(`https://test.api.amadeus.com/v3/shopping/hotel-offers?hotelIds=${paramHotelIdValue}&adults=${adultValue}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&roomQuantity=${roomQuantity}&paymentPolicy=NONE&bestRateOnly=true`, {
        //     method: "GET",
        //     headers: {
        //         "Authorization": "Bearer lmQKdsngrKnos1lr6rI6y3GwMl7t",
        //     },
        //     mode: "cors",
        //     catch: "default"
        // })
        //     .then(resp => resp.json())
        //     .then(data => history("/Hotel", { state: { data: data } }))

        fetch(`https://test.api.amadeus.com/v3/shopping/hotel-offers?hotelIds=${paramHotelIdValue}&adults=${adultValue}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&roomQuantity=${roomQuantity}&paymentPolicy=NONE&bestRateOnly=true`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer XiMhWinR2LY4bkV9OV8n8F39tEdD",
            },
            mode: "cors",
            catch: "default"
        })
            .then(resp => resp.json())
            // .then(data => navigate("/Hotel", console.log(data)))
            .then(data => navigate("/Hotel", { state: { data: data } }))
    }

    function handleShow(gettingHotelIdValue) {
        setShow(true)
        setParamHotelIdValue(gettingHotelIdValue)
    }

    return (
        <>
            <Navbar1 />
            {(hotelDetails !== '') ?
                <div class="container-lg mt-3">
                    {hotelDetails.map((hotelDetails, index) =>
                        <div className="searchItem">
                            <img
                                src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
                                alt="#ImgNotFound"
                                className="hotelImg"
                                style={{ width: '200px', height: '200px' }}
                            />
                            <div className="hotelDesc">
                                <h3 className="hotelTitle">{hotelDetails.name}</h3>
                                <span className="hotelDistance">{hotelDetails.distance.value} {hotelDetails.distance.unit} from center</span>
                                <span className="hotelFeatures">
                                    <b>Latitude</b>: {hotelDetails.geoCode.latitude} • <b>Longitude</b>: {hotelDetails.geoCode.longitude}
                                </span>
                                <span className="hotelCancelOp">Cancellation Policy</span>
                                <span className="hotelCancelOpSubtitle">
                                    You can cancel later, so lock in this great price today!
                                </span>
                            </div>
                            <div className="hotelDetails">
                                <div className="hotelRating">
                                    <span></span>
                                    <h6>{hotelDetails.hotelId}</h6>
                                </div>
                                <div className="hotelDetailTexts">
                                    <button className="hotelCheckButton" onClick={() => handleShow(`${hotelDetails.hotelId}`)}>See availability</button>
                                </div>
                            </div>
                        </div>
                    )}
                    <Modal show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>See Availability {paramHotelIdValue}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="row">
                                <div className="col-9 mb-2">
                                    <h6 className='pt-2'>Number of Adult</h6>
                                </div>
                                <div className="col-3 mb-2 mt-1" style={{ textAlign: 'right' }}>
                                    <input type="number" value={adultValue} onChange={(e) => setAdultValue(e.target.value)} style={{ maxWidth: '50px', width: '100%', height: '30px', paddingLeft: '5px' }} />
                                </div>
                                <div className="col-9 mb-2">
                                    <h6 className='pt-2'>Number of Rooms</h6>
                                </div>
                                <div className="col-3 mb-2 mt-1" style={{ textAlign: 'right' }}>
                                    <input type="number" value={roomQuantity} onChange={(e) => setRoomQuantity(e.target.value)} style={{ maxWidth: '50px', width: '100%', height: '30px', paddingLeft: '5px' }} />
                                </div>
                                <div className="col-6 mb-2">
                                    <h6 className='pt-2'>Check In Date</h6>
                                </div>
                                <div className="col-6 mb-2 mt-1" style={{ textAlign: 'right' }}>
                                    <input type="date" value={checkInDate} className='form-control' onChange={(e) => setCheckInDate(e.target.value)} style={{ width: '100%', height: '30px', paddingLeft: '5px' }} />
                                </div>
                                <div className="col-6 mb-2">
                                    <h6 className='pt-2'>Check Out Date</h6>
                                </div>
                                <div className="col-6 mb-2 mt-1" style={{ textAlign: 'right' }}>
                                    <input type="date" value={checkOutDate} className='form-control' onChange={(e) => setCheckOutDate(e.target.value)} style={{ width: '100%', height: '30px', paddingLeft: '5px' }} />
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={() => seeAvailabilityFunction()}>
                                Check
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                :
                <h1 className="text-center pt-5 mt-5">
                    No Data Found!
                </h1>
            }
        </>
    );
};

