import React from "react";
import Healthcheck from "../Images/Healthcheck.jpg"

function Freehealthcheck() {
    return (

        <div>

            <div style={{ width: "100%", height: "auto", backgroundColor: "pink", color: "white", padding: "30px", marginBottom: "10px" }} className="row" >

                <div style={{ padding: "30px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} className="col-xxl-4 col-xl-4 col-md-4 col-sm-12">
                    <h1 style={{ fontSize: "50px", margin: "0", padding: "0" }} >1523</h1>
                    <p style={{ fontSize: "20px", margin: "0", padding: "0" }} >Dogs Delevired</p>
                </div>


                <div style={{ padding: "30px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} className="col-xxl-4 col-xl-4 col-md-4 col-sm-12">
                    <h1 style={{ fontSize: "50px", margin: "0", padding: "0" }}>92%</h1>
                    <p style={{ fontSize: "20px", margin: "0", padding: "0" }} >Positive Feedback</p>
                </div>



                <div style={{ padding: "30px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} className="col-xxl-4 col-xl-4 col-md-4 col-sm-12">
                    <h1 style={{ fontSize: "50px", margin: "0", padding: "0" }}>576</h1>
                    <p style={{ fontSize: "20px", margin: "0", padding: "0" }} >Happy Families</p>
                </div>


            </div>

            <div style={{ width: "100%", height: "auto", backgroundColor: "black", color: "white", padding: "30px" }} className="row">

                <div style={{ padding: "30px" }} className="col-xxl-6 col-xl-6 col-md-12 col-sm-12">
                    <img style={{ maxWidth: "100%", height: "300px" }} src={Healthcheck} className="row" />
                </div>

                <div style={{ padding: "30px" }} className="col-xxl-6 col-xl-6 col-md-12  col-sm-12" >

                    <h1>Free Health Check Dogs</h1>

                    <p> Dogs, like humans, can develop various health problems over time. Some of these
                        issues,
                        such as dental problems, arthritis, or heart disease, may not show noticeable
                        symptoms until they have progressed significantly
                    </p>

                    <p>Each dog is unique, and their healthcare needs may differ.
                        Regular checkups enable veterinarians to assess your dog's individual health status
                        and provide tailored advice on nutrition, exercise, and other aspects of care to meet their specific requirements.
                    </p>

                    <p>Don't wait for your dog to show signs of illness; take proactive steps to safeguard their health.
                        Your dog depends on you, and together, you can enjoy many more years of companionship and joy.
                    </p>

                    <div style={{ textAlign: "center", marginTop: "50px" }}>
                        <button style={{ padding: "10px", borderRadius: "10px", backgroundColor: "yellowgreen" }}>Contact Us</button>
                    </div>


                </div>



            </div>

        </div>
    )
}

export default Freehealthcheck;