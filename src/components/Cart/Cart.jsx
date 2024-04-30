import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import { Table, Button, Image, CloseButton, Modal } from "react-bootstrap";
import ModalOverlay from "../UI/ModalOverlay";

const Cart = (props) => {
  const { items, totalAmount, removeItem } = useContext(CartContext);
  const itemList = items.map((item) => {
    return (
      <tr key={item.id}>
        <td>
          <Image
            src={item.imageUrl}
            alt={item.title}
            className="thumbnail"
            rounded
            style={{ width: "100px", height: "100px" }}
          />
        </td>
        <td>
          <span className="g-2">{item.title}</span>
        </td>
        <td>{item.price}</td>
        <td>{item.amount}</td>
        <td>
          <Button
            variant="danger"
            onClick={() => {
              removeItem(item.id);
            }}
          >
            Remove
          </Button>
        </td>
      </tr>
    );
  });
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "relative" }}
    >
      <Modal.Dialog onHide={props.onHideCart}>
        <Modal.Header>
          <Modal.Title>Cart</Modal.Title>
          <CloseButton onClick={props.onHideCart} />
        </Modal.Header>
        <Modal.Body>
          <Table>
            <thead>
              <tr>
                <th>ITEM</th>
                <th>TITLE</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
              </tr>
            </thead>
            <tbody>{itemList}</tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <h3>Total amount Rs: {totalAmount}</h3>
          <Button variant="danger" onClick={props.onHideCart}>
            Close
          </Button>
        </Modal.Footer>
        <Button>Order</Button>
      </Modal.Dialog>
    </div>
  );
};

const ModalCart = (props) => {
  return (
    <ModalOverlay onClose={props.onHideCart}>
      <Cart onHideCart={props.onHideCart} />
    </ModalOverlay>
  );
};
export default ModalCart;
