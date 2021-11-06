
import React, { useEffect } from "react";
import Button from '../Button/Button';
import ReadMore from "../ReadMore/ReadMore";
import './Home.css';
import Aos from 'aos';
import "aos/dist/aos.css";





const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])


    return (
        <>

            <div className="container" style={{ overflowX: "hidden" }}>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="h1" style={{ marginLeft: "15%", marginTop: "15%", fontWeight: "bold" }}>Reliable Web<br />
                            Hosting Platform<br />
                            for Your Website</div>
                        <p style={{ marginLeft: "15%", marginTop: "5%", color: "lightslategray" }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                            amet luctus venenatis, lectus magna fringilla urna, porttitor</p>

                        <div>
                            <Button btnType="HomeButton1">Try for 7 days free</Button>

                            <Button btnType="HomeButton2">Choose your plan</Button>


                        </div>

                    </div>



                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 ">

                        <img src="webhosting.jpg" alt="web hosting " className="  w-75 imgs" style={{ borderRadius: "1.5rem" }} data-aos="fade-left" />

                    </div>

                </div>




            </div>

            <div className="container txt">
                <div className="row">

                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">

                        <div>

                            <h5>Unlimited Hosting</h5>

                            <ReadMore>
                                GeeksforGeeks: A Computer Science portal for geeks.
                                It contains well written, well thought and well explained
                                computer science, programming articles and quizzes.
                                It provides a variety of services for you to learn, so thrive
                                and also have fun! Free Tutorials, Millions of Articles, Live,
                                Online and Classroom Courses ,Frequent Coding Competitions,
                                Webinars by Industry Experts, Internship opportunities, and Job
                                Opportunities. Knowledge is power!
                            </ReadMore>
                        </div>
                    </div>



                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <h5>Shared Hosting</h5>
                        <div>
                            <ReadMore>
                                GeeksforGeeks: A Computer Science portal for geeks.
                                It contains well written, well thought and well explained
                                computer science, programming articles and quizzes.
                                It provides a variety of services for you to learn, so thrive
                                and also have fun! Free Tutorials, Millions of Articles, Live,
                                Online and Classroom Courses ,Frequent Coding Competitions,
                                Webinars by Industry Experts, Internship opportunities, and Job
                                Opportunities. Knowledge is power!
                            </ReadMore>
                        </div>
                    </div>





                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <h5>Wordpress Hosting</h5>
                        <div>
                            <ReadMore>
                                GeeksforGeeks: A Computer Science portal for geeks.
                                It contains well written, well thought and well explained
                                computer science, programming articles and quizzes.
                                It provides a variety of services for you to learn, so thrive
                                and also have fun! Free Tutorials, Millions of Articles, Live,
                                Online and Classroom Courses ,Frequent Coding Competitions,
                                Webinars by Industry Experts, Internship opportunities, and Job
                                Opportunities. Knowledge is power!
                            </ReadMore>
                        </div>
                    </div>
                </div>
            </div>





        </>
    )
}

export default Home;