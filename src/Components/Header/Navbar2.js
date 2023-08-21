import './Navbar.css';
import { useState } from "react";
import "react-date-range/dist/styles.css";
import { useNavigate } from "react-router-dom";
import "react-date-range/dist/theme/default.css";

function Navbar2() {
    const history = useNavigate();
    const [locationName, setLocationName] = useState("");

    function handleSearch() {
        fetch(`https://airlabs.co/api/v9/suggest?q=${locationName}&api_key=13eb1321-bf87-4a2e-8f8f-2c90f72471e0`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                fetch(`https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?cityCode=${data.response.cities_by_airports[0].city_code}&radius=100&radiusUnit=KM&amenities=BUSINESS_CENTER&hotelSource=ALL`, {
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer IipdmUqSgGf9M8KvgSX8gbxrvDEC",
                    },
                    mode: "cors",
                    catch: "default"
                })
                    .then(resp => resp.json())
                    .then(data => history("/HotelList", { state: { data: data } }))
            })
    }

    return (
        <>
            <div style={{ background: '#003580', color: 'white' }}>
                <div className='container-lg pb-5'>
                    <h1>A lifetime of discounts? It's Genius.</h1>
                    <p className='pb-3'>
                        Get rewarded for your travels – unlock instant savings of 10% or
                        more with a free Hotel Booking account
                    </p>
                    <button type="button" class="btn btn-light mb-3" style={{ borderRadius: 0 }}>SignUp / Login</button>
                </div>
            </div>
            <div className='container-lg' style={{ marginTop: '-38px' }}>
                <div class="input-group input-group-lg mb-3 mt-3" style={{ border: '3px solid #FEBB03', borderRadius: '10px' }}>
                    <input type="text" class="form-control" placeholder="🛌 Where are you going?" aria-describedby="locationHere" value={locationName} onChange={(e) => setLocationName(e.target.value)} />
                    <button class="btn btn-primary" type="button" id="locationHere" onClick={() => handleSearch()}>Search</button>
                </div>
            </div>
        </>
    );
}

export default Navbar2;
