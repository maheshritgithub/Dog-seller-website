import React from "react";
import Labrator from "../Images/Labrator.jpg";
import Pug from "../Images/Pug.jpg";
import Rot from "../Images/Rot.jpg";
import Beagle from "../Images/Beagle.jpg";
import Germanshepard from "../Images/Germanshepard.jpg";
import Golden from "../Images/Golden.jpg";
import Boxer from "../Images/Boxer.jpg";
import Greatdane from "../Images/Greatdane.jpg";
import Lhasa from "../Images/Lhasa.jpg";
import Pomerian from "../Images/Pomerian.jpg";
import Shin from "../Images/Shin.jpg";
import Siberian from "../Images/Siberian.jpg";

const imageStyles = {
    width: "100%",
    height: "300px",

    paddingBottom: "10px"
};

const breedStyles = {
    textAlign: "left",
    marginTop: "10px",
};

function Oursales() {
    return (

        <div style={{ paddingTop: "20px" }}>



            <div style={{ width: "100%", height: "20vh", backgroundColor: "skyblue", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center", color: "white" }}>
                    <h1 className="h1">Popular Breeds</h1>
                    <p className="p">Classic Breeds that Never Go Out of Fashion</p>
                </div>

            </div>


            <div className="row" style={{ padding: "30px" }}>
                <div className="col-xxl-3 col-xl-3 col-md-4 col-sm-6 col-12" style={{ padding: "20px" }}>
                    <img src={Labrator} alt="Labrator" style={imageStyles} />
                    <h6 style={breedStyles}>Labrator</h6>
                    <h6 style={breedStyles}>Rs. 13,000</h6>
                </div>

                <div className="col-xxl-3 col-xl-3 col-md-4 col-sm-6 col-12" style={{ padding: "20px" }}>
                    <img src={Germanshepard} alt="German Shepherd" style={imageStyles} />
                    <h6 style={breedStyles}>German Shepherd</h6>
                    <h6 style={breedStyles}>Rs. 14,000</h6>
                </div>

                <div className="col-xxl-3 col-xl-3 col-md-4 col-sm-6 col-12" style={{ padding: "20px" }}>
                    <img src={Rot} alt="Rottweiler" style={imageStyles} />
                    <h6 style={breedStyles}>Rottweiler</h6>
                    <h6 style={breedStyles}>Rs. 15,000</h6>
                </div>

                <div className="col-xxl-3 col-xl-3 col-md-4 col-sm-6 col-12" style={{ padding: "20px" }}>
                    <img src={Beagle} alt="Beagle" style={imageStyles} />
                    <h6 style={breedStyles}>Beagle</h6>
                    <h6 style={breedStyles}>Rs. 19,000</h6>
                </div>

                <div className="col-xxl-3 col-xl-3 col-md-4 col-sm-6 col-12" style={{ padding: "20px" }}>
                    <img src={Siberian} alt="Siberian" style={imageStyles} />
                    <h6 style={breedStyles}>Siberian</h6>
                    <h6 style={breedStyles}>Rs. 45,000</h6>
                </div>

                <div className="col-xxl-3 col-xl-3 col-md-4 col-sm-6 col-12" style={{ padding: "20px" }}>
                    <img src={Pomerian} alt="Pomerian" style={imageStyles} />
                    <h6 style={breedStyles}>Pomerian</h6>
                    <h6 style={breedStyles}>Rs. 7,000</h6>
                </div>

                <div className="col-xxl-3 col-xl-3 col-md-4 col-sm-6 col-12" style={{ padding: "20px" }}>
                    <img src={Boxer} alt="Boxer" style={imageStyles} />
                    <h6 style={breedStyles}>Boxer</h6>
                    <h6 style={breedStyles}>Rs. 18,000</h6>
                </div>

                <div className="col-xxl-3 col-xl-3 col-md-4 col-sm-6 col-12" style={{ padding: "20px" }}>
                    <img src={Golden} alt="Golden Retriever" style={imageStyles} />
                    <h6 style={breedStyles}>Golden Retriever</h6>
                    <h6 style={breedStyles}>Rs. 24,000</h6>
                </div>

                <div className="col-xxl-3 col-xl-3 col-md-4 col-sm-6 col-12" style={{ padding: "20px" }}>
                    <img src={Pug} alt="Pug" style={imageStyles} />
                    <h6 style={breedStyles}>Pug</h6>
                    <h6 style={breedStyles}>Rs. 15,000</h6>
                </div>

                <div className="col-xxl-3 col-xl-3 col-md-4 col-sm-6 col-12" style={{ padding: "20px" }}>
                    <img src={Shin} alt="Shin Tzu" style={imageStyles} />
                    <h6 style={breedStyles}>Shin Tzu</h6>
                    <h6 style={breedStyles}>Rs. 25,000</h6>
                </div>

                <div className="col-xxl-3 col-xl-3 col-md-4 col-sm-6 col-12" style={{ padding: "20px" }}>
                    <img src={Lhasa} alt="Lhara Apso" style={imageStyles} />
                    <h6 style={breedStyles}>Lhara Apso</h6>
                    <h6 style={breedStyles}>Rs. 17,000</h6>
                </div>

                <div className="col-xxl-3 col-xl-3 col-md-4 col-sm-6 col-12" style={{ padding: "20px" }}>
                    <img src={Greatdane} alt="Great Dane" style={imageStyles} />
                    <h6 style={breedStyles}>Great Dane</h6>
                    <h6 style={breedStyles}>Rs. 20,000</h6>
                </div>
            </div>

        </div>
    );
}

export default Oursales;
