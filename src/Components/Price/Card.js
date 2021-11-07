import React from 'react';
import { Card } from 'react-bootstrap';
import Button from '../Button/Button';
import './Price.css';



const Cards = (props) => {
    let icon1;
    let icon2;
    if (props.id === "1") {
        icon1 = props.IconFalse
    } else {
        icon1 = props.IconTrue
    }

    if (props.id === "1" || props.id === "2") {
        icon2 = props.IconFalse
    } else {
        icon2 = props.IconTrue
    }


    return (

        <>



            <Card className="Card">
                <div className="headings h1" >{props.Cont.popular}</div>



                <Card.Body>

                    <Card.Title style={{ textAlign: "center", fontWeight: "bold" }}>{props.Cont.cardtitle}</Card.Title>
                    <Card.Subtitle className="m-3 text-muted" style={{ textAlign: "center", fontSize: "1rem", color: "lightslategray" }}>{props.Cont.cardtext}</Card.Subtitle>
                    <Card.Text style={{ textAlign: "center", fontWeight: "bold", fontSize: "2.5rem" }}>
                        {props.Cont.price}
                    </Card.Text>

                    <Button btnType="CardButton">Select</Button>

                    <p ><span className="mx-2">{props.IconTrue}</span>
                        {props.Cont.Data.website}
                    </p>

                    <p><span className="mx-2">{props.IconTrue}</span>
                        {props.Cont.Data.storage}
                    </p>
                    <p><span className="mx-2">{icon1}</span>
                        {props.Cont.Data.ssl}
                    </p>
                    <p><span className="mx-2">{icon2}</span>
                        {props.Cont.Data.domain}
                    </p>
                    <p><span className="mx-2">{icon2}</span>
                        {props.Cont.Data.ads}
                    </p>
                    <p><span className="mx-2">{props.IconTrue}</span>
                        {props.Cont.Data.managed}
                    </p>
                    <p><span className="mx-2">{props.IconTrue}</span>
                        {props.Cont.Data.moneyBack}
                    </p>

                    <p><span className="mx-2">{props.IconTrue}</span>
                        {props.Cont.Data.email}
                    </p>

                </Card.Body>
            </Card>




        </>
    )
}

export default Cards;