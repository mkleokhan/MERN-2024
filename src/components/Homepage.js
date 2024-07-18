import bgimage from '../1.jpg'
import roomImage from '../2.avif'
function Homepage() {
    return (
        <>
            <div className=" backgroundimage">
                {/* <img src={bgimage} alt="iamge" height={1200} width={1250}/> */}
                <h1>Search for home that is suitable for you</h1>

                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />

                <h3>More than 2,000 houses and 4500 rooms available</h3>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="card bg-dark">
                            <div className="card-header bg-dark">
                                <span>Room &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$120</span>
                            </div>
                            <div className="card-body">
                                <img src={roomImage} alt="room image" />
                            </div>
                            <div className="card-footer">Address: QuaideAzam Industrial Estate</div>

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card bg-dark">
                            <div className="card-header bg-dark">
                            <span>Room &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$120</span>
                            </div>
                            <div className="card-body">
                                <img src={roomImage} alt="room image" />
                            </div>
                            <div className="card-footer">Address: QuaideAzam Industrial Estate</div>

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card bg-dark">
                            <div className="card-header bg-dark">
                            <span>Room &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$120</span>
                            </div>
                            <div className="card-body">
                                <img src={roomImage} alt="room image" />
                            </div>
                            <div className="card-footer">Address: QuaideAzam Industrial Estate</div>

                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-lg-4">
                            <div className="card bg-dark">
                                <div className="card-header bg-dark">
                                <span>Room&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$120</span>
                                </div>
                                <div className="card-body">
                                    <img src={roomImage} alt="room image" />
                                </div>
                                <div className="card-footer">Address: QuaideAzam Industrial Estate</div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card bg-dark">
                                <div className="card-header bg-dark">
                                <span>Room&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$120</span>
                                </div>
                                <div className="card-body">
                                    <img src={roomImage} alt="room image" />
                                </div>
                                <div className="card-footer">Address: QuaideAzam Industrial Estate</div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card bg-dark">
                                <div className="card-header bg-dark">
                                <span>Room &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$120</span>
                                </div>
                                <div className="card-body">
                                    <img src={roomImage} alt="room image" />
                                </div>
                                <div className="card-footer">Address: QuaideAzam Industrial Estate</div>

                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </>
    )
}

export default Homepage;