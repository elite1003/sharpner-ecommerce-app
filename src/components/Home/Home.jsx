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
    <ListGroup.Item key={index} className="card-body border-0 border-bottom">
      <div className="d-flex  justify-content-between">
        <h5>{item.date}</h5>
        <small>{item.place}</small>
        <p>{item.description} </p>
        <Button variant="primary"> Buy Ticket</Button>
      </div>
    </ListGroup.Item>
  ));
  return (
    <ListGroup className="p-4 m-auto mt-5 mb-5 card w-75 shadow">
      {detailList}
    </ListGroup>
  );
};

export default Home;
