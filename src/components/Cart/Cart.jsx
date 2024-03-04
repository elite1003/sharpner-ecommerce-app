import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import { Table, Button, Image, CloseButton, Modal } from "react-bootstrap";
const Cart = (props) => {
  const { items, totalAmount } = useContext(CartContext);

  const itemList = items.map((item) => {
    return (
      <tr>
        <td>
          <Image
            src={item.imageUrl}
            alt={item.title}
            className="thumbnail"
            rounded
            style={{ width: "100px", height: "100px" }}
          />
          <span className="g-2">{item.title}</span>
        </td>
        <td>{item.price}</td>
        <td>
          {item.quantity} <Button variant="danger">Remove</Button>
        </td>
      </tr>
    );
  });
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog onHide={props.onHideCart}>
        <Modal.Header>
          <Modal.Title>Cart</Modal.Title>
          <CloseButton onClick={props.onHideCart} />
        </Modal.Header>

        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
              </tr>
            </thead>
            <tbody>{itemList}</tbody>
          </Table>
        </Modal.Body>

        <Modal.Footer>
          <h1>Total amount {totalAmount}</h1>
          <Button variant="danger" onClick={props.onHideCart}>
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default Cart;
