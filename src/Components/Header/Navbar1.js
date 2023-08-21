import './Navbar.css';
import "react-date-range/dist/styles.css";
import Navbar from 'react-bootstrap/Navbar';
import "react-date-range/dist/theme/default.css";

function Navbar1() {
    return (
        <>
            <div style={{ background: '#003580', color: 'white' }}>
                <div className='container-lg'>
                    <Navbar>
                        <Navbar.Brand className='text-white'>Hotel Booking</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <button type="button" class="btn btn-primary mx-2">Sign Up</button>
                            <button type="button" class="btn btn-warning mx-2">Login</button>
                        </Navbar.Collapse>
                    </Navbar>
                    <div className="headerList my-3">
                        <div className="headerListItem active">
                            <span><i class="fa fa-bed"></i>&nbsp; Stays</span>
                        </div>
                        <div className="headerListItem">
                            <span><i class="fa fa-plane"></i>&nbsp; Flights</span>
                        </div>
                        <div className="headerListItem">
                            <span><i class="fa fa-car"></i>&nbsp; Car rentals</span>
                        </div>
                        <div className="headerListItem">
                            <span><i class="fa fa-bed"></i>&nbsp; Attractions</span>
                        </div>
                        <div className="headerListItem">
                            <span><i class="fa fa-taxi"></i>&nbsp; Airport taxis</span>
                        </div>
                        <div className="headerListItem">
                            <span><i class="fa fa-train"></i>&nbsp; Train</span>
                        </div>
                    </div>
                    <div className="row pb-3">
                        <div className="col-4 headerListAfterLGScrn mt-3">
                            <div className="headerListItem active h-100">
                                <span><i class="fa fa-bed"></i> Stays</span>
                            </div></div>
                        <div className="col-4 headerListAfterLGScrn mt-3">
                            <div className="headerListItem active h-100">
                                <span><i class="fa fa-plane"></i> Flights</span>
                            </div></div>
                        <div className="col-4 headerListAfterLGScrn mt-3">
                            <div className="headerListItem active h-100">
                                <span><i class="fa fa-car"></i> Car rentals</span>
                            </div></div>
                        <div className="col-4 headerListAfterLGScrn mt-3">
                            <div className="headerListItem active h-100">
                                <span><i class="fa fa-bed"></i> Attractions</span>
                            </div></div>
                        <div className="col-4 headerListAfterLGScrn mt-3">
                            <div className="headerListItem active h-100">
                                <span><i class="fa fa-car"></i> Airport taxis</span>
                            </div></div>
                        <div className="col-4 headerListAfterLGScrn mt-3">
                            <div className="headerListItem active h-100">
                                <span><i class="fa fa-train"></i> Train</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar1;

