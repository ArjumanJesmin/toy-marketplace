import { Card } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";


const Details = () => {
  const allData = useLoaderData();
  // eslint-disable-next-line no-unused-vars
  const { id, image, price, rating, name } = allData;

  return (
    <>
      <Card className="mx-auto my-5 p-5" style={{width:'38rem'}}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p> {price}</p>
            <p> {rating}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Details;