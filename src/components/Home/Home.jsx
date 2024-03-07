import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const Home = () => {
  const details = [
    {
      date: new Date().toLocaleString(),
      place: "Lucknow",
      description: "Lorem epsum dimdaba dininsin ",
    },
    {
      date: new Date().toLocaleString(),
      place: "Lucknow",
      description: "Lorem epsum dimdaba dininsin ",
    },
    {
      date: new Date().toLocaleString(),
      place: "Lucknow",
      description: "Lorem epsum dimdaba dininsin ",
    },
    {
      date: new Date().toLocaleString(),
      place: "Lucknow",
      description: "Lorem epsum dimdaba dininsin ",
    },
    {
      date: new Date().toLocaleString(),
      place: "Lucknow",
      description: "Lorem epsum dimdaba dininsin ",
    },
  ];
  const detailList = details.map((item, index) => (
    <ListGroup.Item key={index}>
      <div className="d-flex w-100 justify-content-between">
        <h5>{item.date}</h5>
        <small>{item.place}</small>
        <p>{item.description} </p>
        <Button variant="primary"> Buy Ticket</Button>
      </div>
    </ListGroup.Item>
  ));
  return <ListGroup>{detailList}</ListGroup>;
};

export default Home;
