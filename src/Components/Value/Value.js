import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
const Value = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <>
            <div className="container p-5" id="Website Builder" style={{ overflowX: "hidden" }}>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="h1" style={{ fontWeight: "bold", margin: "7%" }}>Extra Website<br />
                            Security</div>
                        <p style={{ color: "lightslategray", textAlign: "justify" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque sit viverra turpis
                            eu. Pellentesque scelerisque nec enim tempus netus mi proin viverra eu. Auctor
                            neque, amet, eget elit. Libero nascetur porttitor mattis urna et consectetur.
                            Placerat vulputate eget nam habitasse. Faucibus tristique nisl, libero quis cursus
                            eu faucibus vel. Lobortis est, vel rutrum dictumst sagittis, rhoncus egestas quis
                            orci. Ultricies scelerisque donec sagittis ante tristique cursus elementum.
                        </p>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
                        <img src="websitesecurity.jpg" alt="Web Security" style={{ borderRadius: "1rem" }} className="w-100" data-aos="fade-left" />
                    </div>

                </div>
            </div>








            <div className="container-fluid bg-light p-5" style={{ overflowX: "hidden" }}>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
                        <img src="Loading.jpg" alt="Loading" style={{ borderRadius: "2rem" }} className=" w-100" data-aos="fade-right" />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">

                        <div className="h1" style={{ fontWeight: "bold", margin: "7%" }}>Simply and fast<br />
                            website</div>
                        <p style={{ color: "lightslategray", textAlign: "justify" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque sit viverra turpis
                            eu. Pellentesque scelerisque nec enim tempus netus mi proin viverra eu. Auctor
                            neque, amet, eget elit. Libero nascetur porttitor mattis urna et consectetur.
                            Placerat vulputate eget nam habitasse. Faucibus tristique nisl, libero quis cursus
                            eu faucibus vel. Lobortis est, vel rutrum dictumst sagittis, rhoncus egestas quis
                            orci. Ultricies scelerisque donec sagittis ante tristique cursus elementum.
                        </p>

                    </div>
                </div>
            </div>



            <div className="container mt-5" style={{ overflowX: "hidden" }}>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">


                        <div className="h1" style={{ fontWeight: "bold", margin: "7%" }}>24/7 Customer<br />
                            Support</div>
                        <p style={{ color: "lightslategray", textAlign: "justify" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque sit viverra turpis
                            eu. Pellentesque scelerisque nec enim tempus netus mi proin viverra eu. Auctor
                            neque, amet, eget elit. Libero nascetur porttitor mattis urna et consectetur.
                            Placerat vulputate eget nam habitasse. Faucibus tristique nisl, libero quis cursus
                            eu faucibus vel. Lobortis est, vel rutrum dictumst sagittis, rhoncus egestas quis
                            orci. Ultricies scelerisque donec sagittis ante tristique cursus elementum.
                        </p>

                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <img src="CustomerService.jpg" alt="24/7 Customer Service" style={{ borderRadius: "2rem" }} className="w-100" data-aos="fade-left" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Value;