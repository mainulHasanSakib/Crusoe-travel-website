import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className="container-fluid bannerBg  vh-100" id="home">
            <div className=" overlay ">
                <h1 className="text-white pt-5 mt-5  "> WelCome to <span className="text-warning fw-bold">Crusoe Survival & Camping</span></h1>
                <h3 className="text-white pt-5 mt-5  "> Adventure Is Calling</h3>
                <h1 className="text-warning pt-5 mt-5 fw-bolder  "> BE WILD, BE FREE</h1>
                <p className="text-white fw-bold pt-3 mt-5">To be brave and grab life <br /> as the extraordinary adventure it is. <br /> We exist to give you the confidence to be <br /> whoever you want to be.</p>

            </div>
            
        </div>
    );
};

export default Banner;