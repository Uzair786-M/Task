import React from 'react';
import { Button } from 'react-bootstrap';
import './Tryus.css';
const Tryus = () => {
    return (
        <>

            <div className="container Try" id="Email" style={{ overflowX: "hidden" }}>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center">

                        <img src="sunrise.jpg" alt="Get Started" className="img" style={{ borderRadius: "2rem" }} />
                    </div>
                </div>
            </div>



            <div className="container p-5 mt-5" style={{ position: "relative", overflowX: "hidden" }}>
                <div className="row">
                    < div className="col">
                        <h1 className="text-center mt-5 text-white fonts">Start the success of your<br />
                            website with us</h1>
                        <div className="d-flex justify-content-center">
                            <Button className="buttons">Get Started</Button>
                        </div>
                    </div>





                </div>
            </div >

        </>
    )
}

export default Tryus;