import bgimage from '../1.jpg'
import roomImage from '../2.avif'
function Homepage() {
    return (
        <>
            <div className=" backgroundimage container-fluid">
                {/* <img src={bgimage} alt="iamge" height={1200} width={1250}/> */}
                <h1>Search for home that is suitable for you</h1>

                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />

                <h3>More than 2,000 houses and 4500 rooms available</h3>

                <div className="row">
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
                            <span>Room&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$120</span>
                            </div>
                            <div className="card-body">
                                <img src={roomImage} alt="room image" />
                            </div>
                            <div className="card-footer">Address: QuaideAzam Industrial Estate</div>

                        </div>
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
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={bgimage} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={roomImage} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={roomImage} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


            </div>
        </>
    )
}

export default Homepage;