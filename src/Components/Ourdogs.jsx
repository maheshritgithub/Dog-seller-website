import React from "react";
import Labrator from "../Images/Labrator.jpg";
import Pug from "../Images/Pug.jpg";
import Rot from "../Images/Rot.jpg";
import Beagle from "../Images/Beagle.jpg";
import Germanshepard from "../Images/Germanshepard.jpg";
import Golden from "../Images/Golden.jpg";
import { Button } from "react-bootstrap";

function Ourproducts() {
    return (

        <div>
            <div style={{ width: "100%", height: "20vh", backgroundColor: "skyblue", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <h1 className="h1">List Of Our Breeds</h1>
            </div>



            <div style={{ padding: "20px" }} className="row">
                <div className="col-xxl-4 col-xl-4 col-md-6 col-sm-6 d-flex flex-column" style={{ padding: "20px" }}>
                    <div style={{ width: "100%", marginBottom: "10px" }}>
                        <img style={{ width: "100%", height: "320px" }} src={Labrator} alt="Labrator" />
                    </div>
                    <Button className="btn btn-primary" style={{ width: "100%" }}>LABRATOR - RS.12,000</Button>
                </div>
                <div className="col-xxl-4 col-xl-4 col-md-6 col-sm-6 d-flex flex-column" style={{ padding: "20px" }}>
                    <div style={{ width: "100%", marginBottom: "10px" }}>
                        <img style={{ width: "100%", height: "320px" }} src={Pug} alt="Pug" />
                    </div>
                    <Button className="btn btn-primary" style={{ width: "100%" }}>PUG - RS.18,000</Button>
                </div>
                <div className="col-xxl-4 col-xl-4 col-md-6 col-sm-6 d-flex flex-column" style={{ padding: "20px" }}>
                    <div style={{ width: "100%", marginBottom: "10px" }}>
                        <img style={{ width: "100%", height: "320px" }} src={Rot} alt="Rot" />
                    </div>
                    <Button className="btn btn-primary" style={{ width: "100%" }}>ROTTWEILER - RS.15,000</Button>
                </div>
                <div className="col-xxl-4 col-xl-4 col-md-6 col-sm-6 d-flex flex-column" style={{ padding: "20px" }}>
                    <div style={{ width: "100%", marginBottom: "10px" }}>
                        <img style={{ width: "100%", height: "320px" }} src={Beagle} alt="Beagle" />
                    </div>
                    <Button className="btn btn-primary" style={{ width: "100%" }}>BEAGLE - RS.19,000</Button>
                </div>
                <div className="col-xxl-4 col-xl-4 col-md-6 col-sm-6 d-flex flex-column" style={{ padding: "20px" }}>
                    <div style={{ width: "100%", marginBottom: "10px" }}>
                        <img style={{ width: "100%", height: "320px" }} src={Germanshepard} alt="German Shepherd" />
                    </div>
                    <Button className="btn btn-primary" style={{ width: "100%" }}>GERMAN SHEPHERD - RS.14,000</Button>
                </div>
                <div className="col-xxl-4 col-xl-4 col-md-6 col-sm-6 d-flex flex-column" style={{ padding: "20px" }}>
                    <div style={{ width: "100%", marginBottom: "10px" }}>
                        <img style={{ width: "100%", height: "320px" }} src={Golden} alt="Golden Retriever" />
                    </div>
                    <Button className="btn btn-primary" style={{ width: "100%" }}>GOLDEN RETRIEVER - RS.12,000</Button>
                </div>
            </div>

        </div>
    );
}

export default Ourproducts;
