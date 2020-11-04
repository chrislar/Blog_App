import React from 'react';
import { Card, CardGroup } from "react-bootstrap";
import Break from "../Images/break1.jpg";
import Messi from "../Images/messi.jpg";
import Transfer from "../Images/mbappe.jpg";
import { posts } from "./Posts";

function mapThree(list) {
    let __list = []
    for (let i = 0; i < 3; ++i ) {
        __list.push(list[i]);
    }

    return __list;
}

function InfoCards() {

    return (
        <CardGroup className="my-5">
            {
                
                mapThree(posts)

            }
            <Card>
                <Card.Img variant="top" src={Break} />
                <Card.Body>
                    <Card.Title>Solskjaer hits out at Premier League rule change</Card.Title>
                    <Card.Text>
                        The Manchester United boss is angry that other clubs went against having five substitutes in the English top division this season

                </Card.Text>
                    <a href=""> read more.. </a>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>


            <Card >
                <Card.Img variant="top" src={Messi} />
                <Card.Body>
                    <Card.Title>When Messi stops playing, i will throw away my television</Card.Title>
                    <Card.Text>
                        Barcelona put together a brilliant performance against Juventus on Wednesday night as they won 2-0 and Christian Vieri was fully of praise for Lionel Messi afterwards.
                        Even though Vieri hopes Messi still has a lot more left in the tank, he looked ahead to the day when the No.10 hangs up his boots.
            </Card.Text>
                    <a href="/article"> read more.. </a>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 20 mins ago</small>
                </Card.Footer>
            </Card>


            <Card >

                <Card.Img variant="top" src={Transfer} />
                <Card.Body>
                    <Card.Title>Transfer Live: Mbappe tells PSG he wants to leave!</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    <a href=""> read more.. </a>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
}


export default InfoCards;