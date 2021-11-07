import React from 'react';
import Cards from './Card';
import { Obj1, Obj2, Obj3 } from '../../Components/Price/CardData';
import './Price.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
const element1 = <FontAwesomeIcon icon={faCheck} size="1x" color="#000000" />
const element2 = <FontAwesomeIcon icon={faTimes} size="1x" color="#000000" />


const Price = () => {



    return (
        <>
            <div className="container mt-5 " id="Pricing">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-lg-12 col-sm-12">

                        <div className="bg-light jumbotrons">


                            <div className="row ">
                                <div className="row mt-5">
                                    <div className="col d-flex justify-content-center">

                                        <h1 style={{ fontSize: "50px" }}>Choose Your Hosting Package</h1>

                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col d-flex justify-content-center">
                                        <p className="lead" style={{ fontSize: "15px", color: "lightslategray" }}>Enter your select domain name and choose any extension name in the next step</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col d-flex justify-content-center">
                                        <p style={{ fontSize: "15px", color: "lightslategray" }}>(choose between .com, .online, .tech, .site, .net, and more)</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 mt-5" >
                                        <Cards Cont={Obj1} IconTrue={element1} IconFalse={element2} id="1" />
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">


                                        <Cards Cont={Obj2} IconTrue={element1} IconFalse={element2} id="2" />


                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 mt-5">
                                        <Cards Cont={Obj3} IconTrue={element1} IconFalse={element2} id="3" />
                                    </div>
                                </div>

                            </div>

                        </div>



                    </div>

                </div>
            </div>

        </>
    )
}

export default Price;