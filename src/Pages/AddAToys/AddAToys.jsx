/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select';
import { AuthContext } from '../../providers/AuthProvider';


const AddAToys = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const { user } = useContext(AuthContext);
     const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
    
    const onSubmit = (data) => {
        data.skills = selectedOption;
        console.log(data)
    
        fetch("http://localhost:5000/postToy", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
          });
        console.log(data);
      };

    const options = [
        { value: 'frozen dolls', label: 'frozen dolls' },
        { value: 'donald duck', label: 'donald duck' },
        { value: 'science kits', label: 'science kits' },
        { value: 'math learning toys', label: 'math learning toys' },
        { value: 'Bedtime Baby Doll', label: 'Bedtime Baby Doll' },
        { value: 'Cooking Toys', label: 'Cooking Toys' },
    ];
    

    return (
        <Container>
            <Row>
                <Col>
                    <form className='p-5 m-4 ' onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className=" mb-2 w-75"
                            {...register("title")}
                            placeholder="title"
                            defaultValue="Name"
                        />
                        <input
                            className="mb-2 w-75"
                            //   value={user?.email}
                            {...register("email", { required: true })}
                            placeholder="your email"
                            type="email"
                        />

                        <input
                            className="mb-2 w-75"
                            {...register("image")}
                            placeholder="Image URL"
                            type="url"
                            defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
                        />


                        <CreatableSelect
                            className="mb-2 w-75"
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            isMulti
                        />
                        <select className="mb-2 w-50" {...register("available_quantity")}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        <input
                            className="mb-2 w-75"
                            {...register("description")}
                            placeholder="description"
                        />
                        <br />
                        <input className="px-5 " value="Post Toy" type="submit" />
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddAToys;