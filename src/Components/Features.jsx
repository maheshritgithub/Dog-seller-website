import React from "react";
import Healthcare from "../Icons/Healthcare.png";
import Pure from "../Icons/Pure.png";
import Reasonableprice from "../Icons/Reasonableprice.png";
import Safedelivery from "../Icons/Safedelivery.jpg";

function Features() {
    return (
        <div className="row " style={{ padding: "40px", }} >
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6" style={{ padding: "40px" }} >
                <img style={{ width: "150px", height: "100px", }} src={Healthcare} alt="Healthcare Icon" />
                <h5 className="h5">Free Health Check</h5>
            </div>

            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6" style={{ padding: "40px" }} >
                <img style={{ width: "150px", height: "100px", }} src={Pure} alt="Pure Icon" />
                <h5 className="h5">1OO%pure Breed</h5>
            </div>

            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6" style={{ padding: "40px" }} >
                <img style={{ width: "150px", height: "100px", }} src={Reasonableprice} alt="Reasonable Price Icon" />
                <h5 className="h5">Reasonable Price</h5>
            </div>

            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6" style={{ padding: "40px" }} >
                <img style={{ width: "150px", height: "100px", }} src={Safedelivery} alt="Safe Delivery Icon" />
                <h5 className="h5">Safe Delivery</h5>

            </div>
        </div>
    );
}

export default Features;
