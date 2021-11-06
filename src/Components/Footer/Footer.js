import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <>

            <div className="container-fluid  text-white marginT" style={{ fontFamily: "Open Sans", boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)", fontSize: "smaller", backgroundColor: "#090660" }}>

                <div className="row">

                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                        <img src="logo.png" className="mt-5 px-3" alt="logo" />

                        <p className="font-italic mt-5 px-3">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit ut aliquam,
                            purus sit amet luctus venenatis, lectus
                            magna fringilla urna, porttitor rhoncus
                            dolor purus non enim praesent elem</p>
                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12">
                        <h4 className="font-italic  mt-5 px-5">Service</h4>
                        <ul>
                            <li><div className="mt-4 px-2"><span className="mx-3 font-italic">Domain</span></div></li>

                            <li><div className="mt-4 px-2"><span className="mx-3 font-italic">Shared Hosting</span></div></li>

                            <li><div className="mt-4 px-2"><span className="mx-3 font-italic">Cloud Hosting</span></div></li>

                            <li><div className="mt-4 px-2"><span className="mx-3 font-italic">Private Hosting</span></div></li>

                            <li><div className="mt-4 px-2"><span className="mx-3 font-italic">Sports</span></div></li>
                        </ul>








                    </div>








                    <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12">

                        <h4 className="font-italic  mt-5 px-5">Hosting</h4>
                        <ul>
                            <li><div className="mt-4 px-2"><span className="mx-3 font-italic">Cheap Hosting</span></div></li>

                            <li><div className="mt-4 px-2"><span className="mx-3 font-italic">Hosting Wordpress</span></div></li>

                            <li><div className="mt-4 px-2"><span className="mx-3 font-italic">Email Hosting</span></div></li>

                            <li><div className="mt-4 px-2"><span className="mx-3 font-italic">Hosting Unlimited</span></div></li>


                        </ul>

                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12">

                        <h4 className="font-italic  mt-5 px-5">Company</h4>
                        <ul>
                            <li><div className="mt-4 px-2"><span className="mx-3 font-italic">About</span></div></li>

                            <li><div className="mt-4 px-2"><span className="mx-3 font-italic">Career</span></div></li>

                            <li><div className="mt-4 px-2"><span className="mx-3 font-italic">Contact Us</span></div></li>




                        </ul>

                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12">

                        <h4 className="font-italic  mt-5 px-5">Help</h4>
                        <ul>
                            <li><div className="mt-4 px-2"><span className="mx-3 font-italic">FAQ</span></div></li>

                            <li><div className="mt-4 px-2"><span className="mx-3 font-italic">Help support</span></div></li>






                        </ul>

                    </div>

                    <div className="row">
                        <div className="col">
                            <p className="text-center fw-bolder">Made Remotely By Uzair Maqbool. Copyright 2021</p>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Footer;