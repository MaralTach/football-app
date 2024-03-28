import { Col, Container, Row } from "react-bootstrap"; //!yazım olarak daha kullanışlı ama performans açısından üstteki yöntem daha ideal
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { data } from "../../helper/data";
import { useState } from "react";
import LegenCard from "./LegenCard";

const LegendContainer = () => {
 const [search,setSearch] = useState("")

  const handleCahange = (e) => {
    setSearch(e.target.value)
    
  }
 const filteredData = data.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase()))
 console.log(filteredData)

  return (
    <div>
      <Form.Control type="search" placeholder="Search legends..." 
      onChange={handleCahange} 
      className="my-form" 
       value={search}/>

      <Container>
        <Row xs={1} sm={1} md={2} lg={3}>
          {filteredData.map((legend) => (
           
            <LegenCard key={legend.id}{...legend}/>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LegendContainer;
