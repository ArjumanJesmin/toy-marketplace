/* eslint-disable no-unused-vars */
import { Card } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const BtnDetails = () => {
  const allData = useLoaderData();
  // eslint-disable-next-line no-unused-vars
  const { id, image, price, rating, name } = allData;
  return (
    <div>
       <Card className="mx-auto my-5 p-5" style={{ width: '38rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p> {price}</p>
            <p> {rating}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BtnDetails;