import React from "react";

function Callnow() {
    const buttonStyles = {
        backgroundColor: "green",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        fontFamily: "sans-serif",
        fontWeight: "bold",
        fontSize: "16px",
    };

    return (
        <div className="row" style={{ height: "15vh", backgroundColor: "pink", borderRadius: "10px" }}>
            <div className="col-lg-10 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
                <h1 style={{ color: "white", fontFamily: "sans-serif", fontWeight: "normal" }}>
                    Call to Get Your Dog Now
                </h1>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
                <button style={buttonStyles}>CALL NOW</button>
            </div>
        </div>
    );
}

export default Callnow;
