import React from "react";
import Dreamdogimg from "../Images/Dreamdog.jpg";

function Dreamdog() {
    return (

        <div className="row">

            <div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "80vh",
                    backgroundImage: `url(${Dreamdogimg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}>
                    <div style={{
                        padding: "20px", color: "whitesmoke"
                    }}>

                        <h1>How To Get Your Dream Dog</h1>

                        <p style={{ fontSize: "20px", fontFamily: "serif", fontWeight: "normal" }}>Start by browsing through our extensive collection of dog breeds.<br />
                            Each breed has its unique characteristics, temperament, and care requirements.</p>

                        <p style={{ fontSize: "20px", fontFamily: "serif", fontWeight: "normal" }}>Click on the breed you're interested in to view detailed listings.<br /> You'll find information about the breed's history,
                            personality traits, and exercise requirements.</p>

                        <div style={{ textAlign: "center", marginTop: "50px" }}>
                            <button style={{ padding: "10px", borderRadius: "10px", color: "black" }}>View ALL Dog Breeds</button>
                        </div>

                    </div>
                </div>

            </div >
        </div >
    );
}

export default Dreamdog;
