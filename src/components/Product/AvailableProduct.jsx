import React, { useContext } from "react";
import AvailableProductContext from "../../store/available-product-context";
import CartContext from "../../store/cart-context";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const AvailableProduct = () => {
  const availableProductCtx = useContext(AvailableProductContext);
  const cartCtx = useContext(CartContext);
  const { items } = availableProductCtx;
  const { addItem } = cartCtx;
  const productList = items.map((product) => (
    <Col key={product.id} sm={6} md={4} lg={3}>
      <Card className="mb-4">
        <Card.Img variant="top" src={product.imageUrl} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>Price: Rs. {product.price}</Card.Text>
          <Button
            onClick={() => addItem({ ...product, amount: 1 })}
            variant="primary"
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  ));
  return (
    <Container>
      <Row>{productList}</Row>
    </Container>
  );
};

export default AvailableProduct;
