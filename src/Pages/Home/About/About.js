import React from 'react';
import img from '../../../img/ab.jpg'
const About = () => {
    return (
        <div className="container my-5" id="about">
            <h1 className="text-center mt-5 pt-5 text-success fw-bolder"> ABOUT US</h1>
          <div className="row  justify-content-center align-item-center my-5">
          <div className="col-12 col-md-6">
          <h1> WelCome to <span className="text-success fw-bold ">Crusoe Survival & Camping</span></h1>
          <p className=" fw-bold mt-3 p-3 shadow border border-info border-3 rounded">We believe in a world where you have total freedom to be you, without judgement. To experiment. To express yourself. To be brave and grab life as the extraordinary adventure it is. So we make sure everyone has an equal chance to discover all the amazing things they’re capable of – no matter who they are, where they’re from or what looks they like to boss. We exist to give you the confidence to be whoever you want to be.</p>
          </div>
          <div className="col-12 col-md-6">
            <img className="img-fluid shadow rounded" src={img} alt="" />
          </div>
              </div>  

              <div className="row g-3 d-flex  my-5 ">
                    <div className="col-md-3 col-12 ">
                        <h2 className="text-white text-center bg-success rounded-3 mr-3 p-3">
                            23000+ <br />
                          Happy Survival Challengers 
                        </h2>
                    </div>
                    <div className="col-md-3 col-12   ">
                    <h2 className="text-white bg-success rounded-3 text-center p-3">
                            250+ <br />
                            Expert Rescue Team
                        </h2>
                    </div>
                    <div className="col-md-3 col-12 ">
                    <h2 className="text-white text-center bg-success rounded-3 p-3">
                            24/7 <br />
                            Location Tracking Service
                        </h2>
                    </div>
                    <div className="col-md-3 col-12 ">
                    <h2 className="text-white text-center bg-success rounded-3 p-3">
                            24/7 <br />
                            Emergency Helicopter
                        </h2>
                    </div>
                </div>


        </div>
    );
};

export default About;