import '../Style/Home.css';
import Navbar1 from '../Components/Header/Navbar1';
import Navbar2 from '../Components/Header/Navbar2';

export default function Home() {
    return (
        <>
            <Navbar1 />
            <Navbar2 />
            <div class="container-lg">
                <div className="row">
                    <div className="col-md-4 imgContainer mt-4">
                        <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="#ImgNotFound" className="w-100 imgData" />
                        <div class="bottomLeft"><h1>Dublin</h1> <h2>123 properties</h2></div>
                    </div>
                    <div className="col-md-4 imgContainer mt-4">
                        <img src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=" alt="#ImgNotFound" className="w-100 imgData" />
                        <div class="bottomLeft"><h1>Reno</h1> <h2>123 properties</h2></div>
                    </div>
                    <div className="col-md-4 imgContainer mt-4">
                        <img src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=" alt="#ImgNotFound" className="w-100 imgData" />
                        <div class="bottomLeft"><h1>Austin</h1> <h2>123 properties</h2></div>
                    </div>
                </div>

                <h4 className="mt-4"><b>Browse by property type</b></h4>
                <div className="row">
                    <div className="col-lg col-sm-4 mt-3">
                        <img src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=" alt="#ImgNotFound" className='w-100 propertyTypeImg' />
                        <h4 className='mt-2'><b>Hotels</b></h4>
                        <p style={{ marginTop: '-10px' }}>233 hotels</p>
                    </div>
                    <div className="col-lg col-sm-4 mt-3">
                        <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" alt="#ImgNotFound" className='w-100 propertyTypeImg' />
                        <h4 className='mt-2'><b>Apartments</b></h4>
                        <p style={{ marginTop: '-10px' }}>233 hotels</p>
                    </div>
                    <div className="col-lg col-sm-4 mt-3">
                        <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg" alt="#ImgNotFound" className='w-100 propertyTypeImg' />
                        <h4 className='mt-2'><b>Resorts</b></h4>
                        <p style={{ marginTop: '-10px' }}>233 hotels</p>
                    </div>
                    <div className="col-lg offset-lg-0 offset-sm-2 col-sm-4 mt-3">
                        <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg" alt="#ImgNotFound" className='w-100 propertyTypeImg' />
                        <h4 className='mt-2'><b>Villas</b></h4>
                        <p style={{ marginTop: '-10px' }}>233 hotels</p>
                    </div>
                    <div className="col-lg col-sm-4 mt-3">
                        <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg" alt="#ImgNotFound" className='w-100 propertyTypeImg' />
                        <h4 className='mt-2'><b>Cabins</b></h4>
                        <p style={{ marginTop: '-10px' }}>233 hotels</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-6 mt-3">
                        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="#ImgNotFound" className='w-100' />
                        <h5>Aparthotel Stare Miasto</h5>
                        <p>Madrid</p>
                        <h6>Starting from $120</h6>
                    </div>
                    <div className="col-lg-3 col-6 mt-3">
                        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="#ImgNotFound" className='w-100' />
                        <h5>Aparthotel Stare Miasto</h5>
                        <p>Madrid</p>
                        <h6>Starting from $120</h6>
                    </div>
                    <div className="col-lg-3 col-6 mt-3">
                        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="#ImgNotFound" className='w-100' />
                        <h5>Aparthotel Stare Miasto</h5>
                        <p>Madrid</p>
                        <h6>Starting from $120</h6>
                    </div>
                    <div className="col-lg-3 col-6 mt-3">
                        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="#ImgNotFound" className='w-100' />
                        <h5>Aparthotel Stare Miasto</h5>
                        <p>Madrid</p>
                        <h6>Starting from $120</h6>
                    </div>
                </div>
            </div>

            <div style={{ background: '#003580' }}>
                <div className="container-lg text-white text-center py-5 mt-5">
                    <h1>Save time, save money!</h1>
                    <h5>Sign up and we'll send the best deals to you</h5>
                    <div style={{ maxWidth: '700px', margin: 'auto' }}>
                        <div className="row mt-2 mx-3">
                            <div className="col-md-10 col-sm-9 mt-3">
                                <input type="text" className='w-100 form-control-lg' placeholder='Enter Your Email' />
                            </div>
                            <div className="col-md-2 col-sm-3 mt-3">
                                <button type="button" class="btn btn-secondary h-100 w-100">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-secondary text-center text-white p-1">
                Copyright © 2023 Hotel Booking.
            </div>
        </>
    );
};

