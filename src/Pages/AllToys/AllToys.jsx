/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Row, Table } from 'react-bootstrap';
import TableBody from './TableBody';
import useTitle from '../../hooks/useTitle';



const AllToys = () => {

  const [allToys, setAllToys] = useState([]);
  const [search, setSearch] = useState('')
  useTitle('AllToys')

  useEffect(() => {
    fetch('https://baby-doll-server-side.vercel.app/toys')
      .then(res => res.json())
      .then(data => {
        setAllToys(data)
        // console.log(data)
      })

  }, [])


  // search
  const handleSearch = () => {
    fetch(`https://baby-doll-server-side.vercel.app/searchToys/${search}`)
    .then(res => res.json())
    .then(data => {
      setAllToys(data)
      console.log(data)
    })
  }

  return (

    <Container className='my-4'>
      <div>
        <InputGroup onChange={(e) => setSearch(e.target.value)} type='text' className="mb-3 w-50 mx-auto">
          <Button onClick={handleSearch} variant="outline-secondary" id="button-addon1">
            Button
          </Button>
          <Form.Control
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

      </div>

      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Seller</th>
                <th>Name</th>
                <th>Toy Name</th>
                <th>available_quantity</th>
                <th>rating</th>
                <th>email</th>
                <th>image</th>
              </tr>
            </thead>
            {
              allToys.map((singleToy, index) => <TableBody index={index} singleToy={singleToy} key={singleToy._id} />)
            }
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default AllToys;
