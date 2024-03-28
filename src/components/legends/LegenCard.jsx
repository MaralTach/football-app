import React,{useState} from 'react'
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";

const LegenCard = (legend) => {
    const [show,setShow] = useState(false)
  return (
      <Col>
              <Card onClick={() => setShow(!show)} >
              {
                !show ? (<Card.Img variant="top" src={legend.img} />
                ) : (
                 <>   
                <Card.Header>
                <Card.Title>{legend.name}</Card.Title>
                </Card.Header>
                <ul className="m-auto">
                  {legend.statistics.map((item) => (
                    <li className="list-unstyled h5 text-start">{item}</li>
                  ))}
                </ul>
                <span>{legend.official_career}</span>
                </>
            
              ) }
              
              </Card>
            </Col>
  )
}

export default LegenCard