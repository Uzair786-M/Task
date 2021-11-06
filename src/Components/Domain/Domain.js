import React from 'react';
import { InputGroup, SplitButton, Dropdown, FormControl } from 'react-bootstrap';
import './Domain.css';
const Domain = () => {
    return (
        <>


            <div className="container w-75 mt-5" >
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="card text-white p-4" style={{ backgroundColor: "#6B67F5", boxShadow: "5px 5px 5px rgba(0,0,0,0.5)", borderRadius: "1.5rem" }}>
                            <div className="card-body">
                                <div className="card-title d-flex justify-content-center mt-4 heading">Find the perfect domain name</div>
                                <div className="card-subtitle mb-2  d-flex justify-content-center text">Enter your select domain name and choose any extension name in the next step </div>
                                <div className="card-text d-flex justify-content-center smalltext">(choose between .com, .online, .tech, .site, .net, and more)</div>

                                <div className="d-flex justify-content-center input">




                                    <InputGroup className="mb-3 ">
                                        <FormControl aria-label="Text input with dropdown button" placeholder="Search your domain name" />

                                        <SplitButton

                                            title="Search"
                                            id="segmented-button-dropdown-2"
                                            alignRight

                                        >
                                            <Dropdown.Item href="#">Action</Dropdown.Item>
                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                        </SplitButton>
                                    </InputGroup>

                                </div>





                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Domain;